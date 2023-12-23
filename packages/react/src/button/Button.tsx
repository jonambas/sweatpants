'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, cx } from '@styles/css';
import { useButtonGroup } from '../button-group/ButtonGroup.context';
import { Slot } from '../slot/Slot';

type BaseProps = ComponentPropsWithRef<'button'> & {
  asChild?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  kind?: 'primary' | 'destructive' | 'neutral' | 'bare';
  disabled?: boolean;
  fullWidth?: boolean;
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
    transition: '0.15s',
    whiteSpace: 'nowrap',
    _focusVisible: {
      position: 'relative',
      // zIndex: '1',
      outline: 'none',
      boxShadow: 'focus'
    }
  },
  variants: {
    fullWidth: { true: { w: '100%' }, false: {} },
    size: {
      lg: {
        fontSize: '5',
        paddingX: '5',
        height: 'calc(2.5rem)',
        lineHeight: 'calc(2.5rem - 2px)'
      },
      md: {
        fontSize: '4',
        paddingX: '4',
        height: 'calc(2rem)',
        lineHeight: 'calc(2rem - 2px)'
      },
      sm: {
        fontSize: '3',
        paddingX: '4',
        height: 'calc(1.75rem)',
        lineHeight: 'calc(1.75rem - 2px)'
      },
      xs: {
        fontSize: '2',
        paddingX: '3',
        height: 'calc(1.25rem)',
        lineHeight: 'calc(1.25rem - 2px)',
        borderRadius: 'xs'
      }
    },
    disabled: {
      true: { cursor: 'not-allowed', opacity: '0.7' },
      false: {}
    },
    selected: {
      true: {
        zIndex: '1'
      },
      false: {}
    },
    kind: {
      primary: {
        bg: { _lightScheme: 'gray12', _darkScheme: 'white' },
        borderColor: { _lightScheme: 'gray12', _darkScheme: 'white' },
        color: 'gray1',
        boxShadow: 'sm',
        '&:hover:not(:disabled)': {
          bg: { _lightScheme: 'gray11', _darkScheme: 'gray12' },
          borderColor: { _lightScheme: 'gray11', _darkScheme: 'gray12' }
        }
      },
      destructive: {
        bg: 'red3',
        borderColor: 'red7',
        color: 'red11',
        '&:hover:not(:disabled)': {
          bg: 'red4'
        }
      },
      neutral: {
        bg: 'transparent',
        borderColor: 'gray7',
        color: 'gray12',
        boxShadow: 'sm',
        '&:hover:not(:disabled)': {
          bg: 'gray4'
        }
      },
      bare: {
        bg: 'transparent',
        borderColor: 'transparent',
        position: 'relative',
        color: 'gray10',
        _before: {
          content: '""',
          position: 'absolute',
          // zIndex: '1',
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
        '&:hover:not(:disabled)': {
          bg: 'transparent',
          color: 'gray12',
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
      selected: true,
      css: {
        _lightScheme: { bg: 'gray12', color: 'white', borderColor: 'gray12' },
        _darkScheme: { bg: 'blue7', color: 'blue12', borderColor: 'blue9' },
        '&:hover:not(:disabled)': {
          _lightScheme: { bg: 'gray12', color: 'white', borderColor: 'gray12' },
          _darkScheme: { bg: 'blue7', color: 'blue12', borderColor: 'blue9' },
          _before: {
            opacity: '0.05'
          }
        }
      }
    },
    {
      kind: 'bare',
      selected: true,
      css: {
        _lightScheme: { bg: 'gray4', color: 'gray12', borderColor: 'gray4' },
        _darkScheme: { bg: 'blue7', color: 'blue12', borderColor: 'blue7' },
        '&:hover:not(:disabled)': {
          _lightScheme: { bg: 'gray4', color: 'gray12', borderColor: 'gray4' },
          _darkScheme: { bg: 'blue7', color: 'blue12', borderColor: 'blue7' },
          _before: {
            opacity: '0.05'
          }
        }
      }
    }
  ]
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, userRef) => {
  const {
    asChild,
    className,
    disabled = false,
    fullWidth = false,
    kind = 'neutral',
    size = 'md',
    type = 'button',
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
      className={cx(
        styles({ ...finalStyles, disabled, selected, fullWidth }),
        className
      )}
      disabled={disabled}
      {...pressedProps}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
