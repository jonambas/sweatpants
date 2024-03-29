import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type StackProps = ComponentPropsWithRef<'div'> & {
  align?: 'start' | 'center' | 'end' | 'baseline';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  space?: 'none' | 'tight' | 'normal' | 'loose';
};

const styles = cva({
  base: { display: 'flex', w: '100%' },
  variants: {
    direction: {
      row: { flexDir: 'row' },
      column: { flexDir: 'column' },
      'row-reverse': { flexDir: 'row-reverse' },
      'column-reverse': { flexDir: 'column-reverse' }
    },
    space: {
      tight: { gap: '2' },
      normal: { gap: '5' },
      loose: { gap: '7' },
      none: { gap: '0' }
    },
    align: {
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      baseline: { alignItems: 'baseline' }
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
