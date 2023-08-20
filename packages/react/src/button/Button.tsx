import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, cx } from '@styles/css';
import { useButtonGroup } from '../button-group/ButtonGroup.context';
import { Slot } from '../slot/Slot';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  asChild?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'destructive' | 'neutral' | 'bare';
  disabled?: boolean;
};

const styles = cva({
  base: {
    display: 'inline-flex',
    textDecoration: 'none',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'sm',
    color: 'gray12',
    bg: 'white',
    transition: '0.15s',
    _hover: {
      bg: 'gray3'
    },
    _focusVisible: {
      position: 'relative',
      zIndex: '1',
      outline: 'none',
      boxShadow: 'focus'
    }
  },
  variants: {
    size: {
      lg: { fontSize: '6', paddingX: '4', paddingY: '3' },
      md: { fontSize: '5', paddingX: '4', paddingY: '3' },
      sm: { fontSize: '3', paddingX: '4', paddingY: '3' },
      xs: { fontSize: '2', paddingX: '3', paddingY: '2' }
    },
    disabled: {
      true: { cursor: 'not-allowed' },
      false: {}
    },
    variant: {
      primary: {
        background: 'gray14',
        borderColor: 'gray14',
        color: 'gray1',
        _hover: {
          bg: 'gray12',
          borderColor: 'gray12'
        }
      },
      destructive: {
        background: 'red10',
        borderColor: 'red11',
        color: 'white',
        _hover: {
          bg: 'red11',
          borderColor: 'red11'
        }
      },
      neutral: {
        borderColor: 'gray8'
      },
      bare: {
        bg: 'transparent',
        borderColor: 'transparent',
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          zIndex: '1',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'gray12',
          borderRadius: 'sm',
          opacity: '0',
          transition: 'opacity 0.15s'
        },
        _hover: {
          color: 'black',
          bg: 'transparent',
          borderColor: 'transparent',
          _before: {
            opacity: '0.1'
          }
        }
      }
    }
  },
  compoundVariants: [
    {
      variant: 'neutral',
      disabled: true,
      css: {
        borderColor: 'gray7',
        color: 'gray9',
        bg: 'gray3',
        _hover: {
          borderColor: 'gray7',
          color: 'gray9',
          bg: 'gray3'
        }
      }
    },
    {
      variant: 'primary',
      disabled: true,
      css: {
        background: 'gray11',
        borderColor: 'gray11',
        color: 'gray5',
        _hover: {
          bg: 'gray11',
          borderColor: 'gray11'
        }
      }
    },
    {
      variant: 'destructive',
      disabled: true,
      css: {
        background: 'red8',
        borderColor: 'red8',
        color: 'red3',
        _hover: {
          bg: 'red8',
          borderColor: 'red8'
        }
      }
    },
    {
      variant: 'bare',
      disabled: true,
      css: {
        color: 'gray9',
        _hover: {
          color: 'gray9',
          _before: {
            opacity: '0'
          }
        }
      }
    }
  ]
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, userRef) => {
  const {
    asChild,
    type = 'button',
    variant = 'neutral',
    size = 'md',
    className,
    disabled = false,
    ...rest
  } = props;

  const group = useButtonGroup();

  const finalStyles = {
    variant: group?.variant || variant,
    size: group?.size || size
  };

  const Element = asChild ? Slot : 'button';

  return (
    <Element
      ref={userRef}
      type={type}
      className={cx(styles({ ...finalStyles, disabled }), className)}
      disabled={disabled}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
