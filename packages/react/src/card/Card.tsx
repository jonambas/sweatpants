import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'> & {
  padding?: 'loose' | 'normal' | 'tight' | 'none';
  variant?: 'white' | 'neutral';
};

const styles = cva({
  base: {
    borderRadius: 'md'
  },

  variants: {
    padding: {
      none: { padding: '0' },
      tight: { padding: '2' },
      normal: { padding: '5' },
      loose: { padding: '7' }
    },
    variant: {
      white: {
        bg: 'white',
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.04)'
      },
      neutral: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'gray5'
      }
    }
  }
});

export const Card = forwardRef<HTMLDivElement, CardProps>((props, userRef) => {
  const {
    children,
    className,
    padding = 'normal',
    variant = 'neutral',
    ...rest
  } = props;

  return (
    <div
      ref={userRef}
      className={cx(styles({ padding, variant }), className)}
      {...rest}
    >
      {children}
    </div>
  );
});
