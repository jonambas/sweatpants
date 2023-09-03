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
      true: { cursor: 'not-allowed', opacity: '0.7' },
      false: {}
    },
    selected: {
      true: {
        zIndex: '1',
        borderColor: 'blue9',
        _lightScheme: { bg: 'blue3', color: 'blue11' },
        _darkScheme: { bg: 'blue6', color: 'blue12' },
        '&:hover:not(:disabled)': {
          borderColor: 'blue9',
          _lightScheme: { bg: 'blue3', color: 'blue11' },
          _darkScheme: { bg: 'blue6', color: 'blue12' },
          _before: {
            opacity: '0.05'
          }
        }
      },
      false: {}
    },
    kind: {
      primary: {
        bg: 'gray12',
        borderColor: 'gray12',
        color: 'gray1',
        '&:hover:not(:disabled)': {
          bg: 'gray11',
          borderColor: 'gray11'
        }
      },
      destructive: {
        bg: 'red5',
        borderColor: 'red8',
        color: 'red11',
        '&:hover:not(:disabled)': {
          bg: 'red6'
        }
      },
      neutral: {
        bg: 'transparent',
        borderColor: 'gray7',
        color: 'gray12',
        '&:hover:not(:disabled)': {
          bg: 'gray4'
        }
      },
      bare: {
        bg: 'transparent',
        borderColor: 'transparent',
        position: 'relative',
        color: 'gray12',
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
        '&:hover:not(:disabled)': {
          bg: 'transparent',
          _before: {
            opacity: '0.08'
          }
        }
      }
    }
  }
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
