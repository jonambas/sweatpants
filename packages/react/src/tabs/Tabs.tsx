'use client';

import { cva, cx } from '@styles/css';
import {
  ComponentPropsWithRef,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ButtonProps } from '../button/Button';
import { TabsContext } from './Tabs.context';
import { mergeRefs } from '../utils/mergeRefs';

export type TabsProps = ComponentPropsWithRef<'div'> & {
  activation?: 'automatic' | 'manual';
  defaultValue?: string;
  hideBorder?: boolean;
  onValueChange?: (value: string) => void;
  size?: ButtonProps['size'];
  value?: string;
};

const styles = cva({
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    w: '100%',
  },
  variants: {
    hideBorder: {
      true: {},
      false: {
        borderBottom: '1px solid token(colors.borders)',
      },
    },
    size: {
      xs: { py: '3', px: '3', gap: '2' },
      sm: { py: '3', px: '3', gap: '2' },
      md: { py: '4', px: '4', gap: '4' },
      lg: { py: '4', px: '4', gap: '4' },
    },
  },
});

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, userRef) => {
  const {
    activation = 'automatic',
    children,
    className,
    defaultValue,
    value,
    onValueChange,
    hideBorder = false,
    size = 'md',
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [internalValue, setInternalValue] = useState<string>(
    value ?? defaultValue ?? '',
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      tabRefs.current = Array.from(
        ref.current.querySelectorAll('[data-sweatpants-tab]'),
      );
    }
  }, [ref.current]);

  useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    tabValue: string,
  ) => {
    const thisIndex = tabRefs.current.findIndex(
      (node) => document.activeElement === node,
    );

    if (
      thisIndex > -1 &&
      value !== tabValue &&
      (e.key === 'Enter' || e.key === ' ')
    ) {
      e.preventDefault();
      if (!value) {
        setInternalValue(tabValue);
      }
      onValueChange?.(tabValue);
      return;
    }

    const length = tabRefs.current.length;

    let nextIndex;

    if (e.key === 'ArrowRight') {
      nextIndex = thisIndex < length - 1 ? thisIndex + 1 : 0;
    }

    if (e.key === 'ArrowLeft') {
      nextIndex = thisIndex !== 0 ? thisIndex - 1 : length - 1;
    }

    if (typeof nextIndex !== 'undefined') {
      tabRefs.current[nextIndex].focus();

      if (activation === 'automatic') {
        if (!value) {
          setInternalValue(tabValue);
        }
        onValueChange?.(tabValue);
        tabRefs.current[nextIndex].click();
      }
    }
  };

  const handleClick = (tabValue: string) => {
    if (!value) {
      setInternalValue(tabValue);
    }
    onValueChange?.(tabValue);
  };

  return (
    <TabsContext.Provider
      value={{
        value: internalValue,
        onKeyDown: handleKeyDown,
        onClick: handleClick,
        size,
      }}
    >
      <div
        className={cx(styles({ hideBorder, size }), className)}
        ref={mergeRefs([ref, userRef])}
        role="tablist"
        {...rest}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';

export { Tabs };
