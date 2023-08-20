import { ComponentPropsWithRef, forwardRef } from 'react';
import { Slot } from '../slot/Slot';
import { cva, cx } from '@styles/css';

export type LinkProps = ComponentPropsWithRef<'a'> & {
  asChild?: boolean;
  inheritColor?: boolean;
};

const styles = cva({
  base: {
    textDecoration: 'none',
    _hover: {
      textDecoration: 'underline'
    },
    _focusVisible: {
      outline: 'none',
      boxShadow: 'focus'
    }
  },
  variants: {
    inheritColor: {
      true: {
        color: 'inherit'
      },
      false: { color: 'blue11' }
    }
  }
});

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, userRef) => {
  const { children, asChild, className, inheritColor = false, ...rest } = props;

  const Elem = asChild ? Slot : 'a';

  return (
    <Elem
      ref={userRef}
      className={cx(styles({ inheritColor }), className)}
      {...rest}
    >
      {children}
    </Elem>
  );
});

Link.displayName = 'Link';

export { Link };
