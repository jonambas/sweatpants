import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, cx } from '@styles/css';
import { useButtonGroup } from '../button-group/ButtonGroup.context';
import { Slot } from '../slot/Slot';

type BaseProps = ComponentPropsWithRef<'button'> & {
  asChild?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  kind?: 'primary' | 'destructive' | 'neutral' | 'bare';
  disabled?: boolean;
};

export type ButtonProps =
  | ({
      kind?: 'neutral' | 'bare';
      selected?: boolean;
    } & BaseProps)
  | ({
      kind?: 'primary' | 'destructive';
      selected?: undefined;
    } & BaseProps);

const styles = cva({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'sm',
    color: 'gray12',

    transition: '0.15s',
    whiteSpace: 'nowrap',
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
      lg: {
        fontSize: '5',
        paddingX: '5',
        lineHeight: 'calc(2.5rem - 2px)'
      },
      md: { fontSize: '4', paddingX: '4', lineHeight: 'calc(2rem - 2px)' },
      sm: { fontSize: '3', paddingX: '4', lineHeight: 'calc(1.75rem - 2px)' },
      xs: { fontSize: '3', paddingX: '3', lineHeight: 'calc(1.25rem - 2px)' }
    },
    disabled: {
      true: { cursor: 'not-allowed' },
      false: {}
    },
    selected: {
      true: {
        bg: 'blue4',
        color: 'blue11',
        _hover: {
          bg: 'blue4',
          color: 'blue11',
          _before: {
            opacity: '0.05'
          }
        }
      },
      false: {}
    },
    kind: {
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
        borderColor: 'gray7'
      },
      bare: {
        bg: 'transparent',
        borderColor: 'transparent',
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          zIndex: '1',
          top: '-1px',
          bottom: '-1px',
          left: '-1px',
          right: '-1px',
          bg: 'gray12',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray12',
          borderRadius: 'inherit',
          opacity: '0',
          transition: 'opacity 0.15s'
        },
        _hover: {
          color: 'black',
          bg: 'transparent',
          _before: {
            opacity: '0.08'
          }
        }
      }
    }
  },
  compoundVariants: [
    {
      kind: 'neutral',
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
      kind: 'primary',
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
      kind: 'destructive',
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
      kind: 'bare',
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
    kind = 'neutral',
    size = 'md',
    className,
    disabled = false,
    selected,
    ...rest
  } = props;

  const group = useButtonGroup();

  const finalStyles = {
    kind: group?.kind || kind,
    size: group?.size || size
  };

  const Element = asChild ? Slot : 'button';
  const pressedProps = selected ? { 'aria-pressed': true } : {};

  return (
    <Element
      ref={userRef}
      type={type}
      className={cx(styles({ ...finalStyles, disabled, selected }), className)}
      disabled={disabled}
      {...pressedProps}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
