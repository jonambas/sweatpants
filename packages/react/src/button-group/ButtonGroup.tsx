import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, cx } from '@styles/css';
import { ButtonProps } from '../button/Button';
import { ButtonGroupContext } from './ButtonGroup.context';

export type ButtonGroupProps = ComponentPropsWithRef<'div'> & {
  spacing?: 'tight' | 'loose' | 'none';
} & Pick<ButtonProps, 'size' | 'variant'>;

const styles = cva({
  base: {
    display: 'flex'
  },
  variants: {
    spacing: {
      tight: { gap: '2' },
      loose: { gap: '4' },
      none: {
        gap: '0',
        '& > *:not(:first-child)': {
          marginLeft: '-1px'
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0'
        },
        '& > *:last-child:not(:first-child)': {
          borderLeftRadius: '0'
        },
        '& > *:first-child:not(:last-child)': {
          borderRightRadius: '0'
        },
        '& > *:hover': {
          position: 'relative',
          zIndex: '1'
        }
      }
    }
  }
});

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, userRef) => {
    const {
      children,
      className,
      spacing = 'none',
      size,
      variant,
      ...rest
    } = props;
    return (
      <div
        ref={userRef}
        className={cx(styles({ spacing }), className)}
        {...rest}
      >
        <ButtonGroupContext.Provider value={{ size, variant }}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
