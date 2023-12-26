'use client';

import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { ButtonProps } from '../button/Button';

export type TabsProps = ComponentPropsWithRef<'div'> & {
  hideBorder?: boolean;
  size?: ButtonProps['size'];
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
    children,
    className,
    hideBorder = false,
    size = 'md',
    ...rest
  } = props;

  return (
    <div
      className={cx(styles({ hideBorder, size }), className)}
      ref={userRef}
      {...rest}
    >
      {children}
    </div>
  );
});

Tabs.displayName = 'Tabs';

export { Tabs };
