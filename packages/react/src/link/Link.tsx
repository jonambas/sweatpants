import { ComponentPropsWithRef, forwardRef } from 'react';
import { Slot } from '../slot/Slot';
import { cva, cx } from '@styles/css';

export type LinkProps = ComponentPropsWithRef<'a'> & {
  asChild?: boolean;
  dark?: boolean;
};

const styles = cva({
  base: {
    transition: '0.08s',
    cursor: 'pointer',
    textDecoration: 'underline',
    _focusVisible: {
      outline: 'none',
      boxShadow: 'focus'
    }
  },
  variants: {
    dark: {
      true: {
        color: 'gray14',
        textDecorationColor: 'gray8',
        _hover: {
          textDecorationColor: 'gray11'
        }
      },
      false: {
        color: 'blue11',
        textDecorationColor: 'blue7',
        _hover: {
          textDecorationColor: 'blue11'
        }
      }
    }
  }
});

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, userRef) => {
  const { children, asChild, className, dark = false, ...rest } = props;

  const Elem = asChild ? Slot : 'a';

  return (
    <Elem ref={userRef} className={cx(styles({ dark }), className)} {...rest}>
      {children}
    </Elem>
  );
});

Link.displayName = 'Link';

export { Link };
