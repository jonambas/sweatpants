import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, cx } from '@styles/css';
import { ButtonProps } from '../button/Button';
import { ButtonGroupContext } from './ButtonGroup.context';

export type ButtonGroupProps = ComponentPropsWithRef<'div'> & {
  space?: 'tight' | 'loose' | 'normal' | 'none';
} & Pick<ButtonProps, 'size' | 'kind'>;

const styles = cva({
  base: {
    display: 'flex'
  },
  variants: {
    space: {
      tight: { gap: '2' },
      normal: { gap: '4' },
      loose: { gap: '6' },
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
      space = 'normal',
      size,
      kind,
      ...rest
    } = props;
    return (
      <div ref={userRef} className={cx(styles({ space }), className)} {...rest}>
        <ButtonGroupContext.Provider value={{ size, kind }}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
