import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'> & {
  padding?: 'loose' | 'normal' | 'tight' | 'none';
  kind?: 'white' | 'neutral';
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
    kind: {
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
    kind = 'neutral',
    ...rest
  } = props;

  return (
    <div
      ref={userRef}
      className={cx(styles({ padding, kind }), className)}
      {...rest}
    >
      {children}
    </div>
  );
});
