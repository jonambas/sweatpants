import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type StackProps = ComponentPropsWithRef<'div'> & {
  align?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  space?: 'none' | 'tight' | 'normal' | 'loose';
};

const styles = cva({
  base: { display: 'flex' },
  variants: {
    direction: {
      row: { flexDir: 'row' },
      column: { flexDir: 'column' },
      'row-reverse': { flexDir: 'row-reverse' },
      'column-reverse': { flexDir: 'column-reverse' }
    },
    space: {
      tight: { gap: '2' },
      normal: { gap: '6' },
      loose: { gap: '8' },
      none: { gap: '0' }
    },
    align: {
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      center: { alignItems: 'center' }
    }
  }
});

const Stack = forwardRef<HTMLDivElement, StackProps>((props, userRef) => {
  const {
    align = 'start',
    children,
    className,
    direction = 'column',
    space = 'normal',
    ...rest
  } = props;

  return (
    <div
      className={cx(styles({ align, direction, space }), className)}
      ref={userRef}
      {...rest}
    >
      {children}
    </div>
  );
});

export { Stack };
