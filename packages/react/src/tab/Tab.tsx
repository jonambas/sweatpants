import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef, useContext } from 'react';
import { Button, ButtonProps } from '../button/Button';
import { TabsContext } from '../tabs/Tabs.context';

export type TabProps = ComponentPropsWithRef<'button'> & {
  selected?: boolean;
  size?: ButtonProps['size'];
  value: string;
};

const styles = cva({
  base: {
    position: 'relative',
    _after: {
      content: "''",
      display: 'block',
      position: 'absolute',
      height: '1px',
      left: 0,
      right: 0,
      opacity: '0',
      bg: 'gray12',
      borderRadius: 'sm',
      transition: '0.15s',
    },
    _hover: {},
  },
  variants: {
    selected: {
      true: {
        color: 'gray12',
        _after: { opacity: '1!' },
      },
      false: {},
    },
    size: {
      xs: { _after: { bottom: 'calc(token(spacing.3) * -1 - 2px)' } },
      sm: { _after: { bottom: 'calc(token(spacing.3) * -1 - 2px)' } },
      md: { _after: { bottom: 'calc(token(spacing.4) * -1 - 2px)' } },
      lg: { _after: { bottom: 'calc(token(spacing.4) * -1 - 2px)' } },
    },
  },
});

const Tab = forwardRef<HTMLButtonElement, TabProps>((props, userRef) => {
  const {
    children,
    className,
    size = 'md',
    onClick,
    onKeyDown,
    value,
    ...rest
  } = props;
  const tabsContext = useContext(TabsContext);
  const isSelected = value ? value === tabsContext.value : false;

  return (
    <Button
      kind="bare"
      role="tab"
      size={tabsContext.size ?? size}
      className={cx(
        styles({ selected: isSelected, size: tabsContext.size ?? size }),
        className,
      )}
      onClick={(e) => {
        tabsContext?.onClick(value);
        onClick?.(e);
      }}
      onKeyDown={(e) => {
        tabsContext?.onKeyDown(e, value);
        onKeyDown?.(e);
      }}
      ref={userRef}
      type="button"
      tabIndex={isSelected ? 1 : -1}
      {...rest}
      aria-selected={isSelected}
      data-sweatpants-tab
    >
      {children}
    </Button>
  );
});

Tab.displayName = 'Tab';

export { Tab };
