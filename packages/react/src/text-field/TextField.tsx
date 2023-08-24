import {
  ComponentPropsWithRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';
import { Text } from '../text/Text';
import { css, cva } from '@styles/css';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';

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

const labelStyles = css({
  display: 'block',
  color: 'gray12'
});

const containerStyles = css({
  w: '100%'
});

const inputContainerStyles = css({
  position: 'relative'
});

const inputStyles = cva({
  base: {
    display: 'flex',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray7',
    borderRadius: 'sm',
    background: 'white',
    fontSize: '3',
    paddingX: '3',
    transition: 'border 0.15s',
    '&:hover:not(:focus)': {
      borderColor: 'gray9'
    },
    _focus: {
      outline: 'none',
      borderColor: 'gray12'
    }
  },
  variants: {
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' }
    },
    size: {
      lg: {
        fontSize: '6',
        paddingX: '5',
        lineHeight: 'calc(2.5rem - 2px)'
      },
      md: { fontSize: '5', paddingX: '4', lineHeight: 'calc(2rem - 2px)' },
      sm: { fontSize: '3', paddingX: '4', lineHeight: 'calc(1.75rem - 2px)' }
    },
    hasError: {
      true: {
        borderColor: 'red8',
        background: 'red2',
        '&:hover:not(:focus)': {
          borderColor: 'red9'
        },
        _focus: {
          borderColor: 'red9'
        }
      },
      false: {}
    }
  }
});

const prefixOrSuffixStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  top: 0,
  fontSize: '2',
  color: 'gray11',
  paddingX: '4'
});

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, userRef) => {
    const {
      align = 'left',
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
        paddingLeft: undefined,
        paddingRight: undefined
      };

      if (prefixRef.current) {
        styles.paddingLeft = prefixRef.current.clientWidth;
      }

      if (suffixRef.current) {
        styles.paddingRight = suffixRef.current.clientWidth;
      }

      setPadding(styles);
    }, [prefixRef, suffixRef]);

    return (
      <div className={containerStyles}>
        {hideLabel ? (
          <ScreenReaderOnly>{label}</ScreenReaderOnly>
        ) : (
          <Text
            htmlFor={id}
            element="label"
            looksLike="p"
            className={labelStyles}
          >
            {label}
          </Text>
        )}
        <div className={inputContainerStyles}>
          <input
            id={id}
            type="text"
            className={inputStyles({ align, size, hasError })}
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
  }
);
export { TextField };
