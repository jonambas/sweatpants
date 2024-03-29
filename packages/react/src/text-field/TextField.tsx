'use client';

import {
  ComponentPropsWithRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { css, cva, cx } from '@styles/css';
import { Label } from '../label/Label';

export type TextFieldProps = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
  label?: string;
  id: string;
  size?: 'sm' | 'md' | 'lg';
  hideLabel?: boolean;
  hasError?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  align?: 'left' | 'right';
};

const containerStyles = css({
  w: '100%',
});

const inputContainerStyles = css({
  position: 'relative',
  zIndex: '1',
});

const inputStyles = cva({
  base: {
    display: 'flex',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray7',
    borderRadius: 'sm',
    bg: 'contentBg',
    boxShadow: 'sm',
    fontSize: '3',
    paddingX: '3',
    transitionDuration: '0.15s',
    transitionProperty: 'background, border',
    outline: 'none',
    color: 'gray12',
    '&:hover:not(:focus)': {
      borderColor: 'gray8',
    },
    _focus: {
      borderColor: 'blue9',
      background: 'blue2',
    },
  },
  variants: {
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
    },
    size: {
      lg: {
        fontSize: '6',
        paddingX: '5',
        height: '2.5rem',
      },
      md: { fontSize: '5', paddingX: '4', height: '2rem' },
      sm: { fontSize: '3', paddingX: '4', height: '1.75rem' },
    },
    hasError: {
      true: {
        borderColor: 'red8',
        background: 'red2',
        '&:hover:not(:focus)': {
          borderColor: 'red9',
        },
        _focus: {
          borderColor: 'red9',
          background: 'red2',
        },
      },
      false: {},
    },
  },
});

const prefixOrSuffixStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  top: 0,
  fontSize: '2',
  color: 'gray11',
  paddingX: '4',
  pointerEvents: 'none',
});

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, userRef) => {
    const {
      align = 'left',
      className,
      label,
      id,
      size = 'md',
      hasError = false,
      hideLabel = false,
      prefix,
      suffix,
      ...rest
    } = props;
    const prefixRef = useRef<HTMLSpanElement>(null);
    const suffixRef = useRef<HTMLSpanElement>(null);
    const [padding, setPadding] = useState({});

    useEffect(() => {
      const styles: HTMLAttributes<'input'>['style'] = {
        paddingLeft: prefix ? `calc(1rem + 1ch)` : undefined,
        paddingRight: suffix ? `calc(1rem + 1ch)` : undefined,
      };

      if (prefixRef.current) {
        styles.paddingLeft = prefixRef.current.clientWidth;
      }

      if (suffixRef.current) {
        styles.paddingRight = suffixRef.current.clientWidth;
      }

      setPadding(styles);
    }, [prefix, suffix, prefixRef, suffixRef]);

    return (
      <div className={containerStyles}>
        <Label hide={hideLabel} id={id}>
          {label}
        </Label>
        <div className={inputContainerStyles}>
          <input
            id={id}
            type="text"
            className={cx(inputStyles({ align, size, hasError }), className)}
            ref={userRef}
            style={{ ...padding }}
            {...rest}
          />
          {prefix && (
            <span
              className={prefixOrSuffixStyles}
              ref={prefixRef}
              style={{ left: 0 }}
            >
              {prefix}
            </span>
          )}
          {suffix && (
            <span
              className={prefixOrSuffixStyles}
              ref={suffixRef}
              style={{ right: 0 }}
            >
              {suffix}
            </span>
          )}
        </div>
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export { TextField };
