import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../button/Button';

export type TabProps = ComponentPropsWithRef<'button'> & {
  selected?: boolean;
  size?: ButtonProps['size'];
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
      transition: '0.15s'
    },
    _hover: {}
  },
  variants: {
    selected: {
      true: {
        color: 'gray12',
        _after: { opacity: '1!' }
      },
      false: {}
    },
    size: {
      xs: { _after: { bottom: 'calc(token(spacing.3) * -1 - 2px)' } },
      sm: { _after: { bottom: 'calc(token(spacing.3) * -1 - 2px)' } },
      md: { _after: { bottom: 'calc(token(spacing.4) * -1 - 2px)' } },
      lg: { _after: { bottom: 'calc(token(spacing.4) * -1 - 2px)' } }
    }
  }
});

const Tab = forwardRef<HTMLButtonElement, TabProps>((props, userRef) => {
  const { children, className, selected = false, size = 'md', ...rest } = props;
  return (
    <Button
      kind="bare"
      size={size}
      className={cx(styles({ selected, size }), className)}
      // selected={selected}
      ref={userRef}
      type="button"
      {...rest}
    >
      {children}
    </Button>
  );
});

Tab.displayName = 'Tab';

export { Tab };
