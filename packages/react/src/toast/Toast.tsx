import { cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Card } from '../card/Card';

export type ToastProps = ComponentPropsWithRef<'div'> & {
  tone?: 'positive' | 'negative' | 'neutral' | 'caution';
};

const styles = cva({
  base: {
    px: '4!',
    py: '3!',
    fontSize: '4',
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  variants: {
    tone: {
      positive: {
        bg: 'green3',
        color: 'green11',
        borderColor: 'green7',
        boxShadow: '0 3px 5px 0px rgba(0,255,0,0.1)'
      },
      negative: {
        bg: 'red3',
        color: 'red11',
        borderColor: 'red7',
        boxShadow: '0 3px 5px 0px rgba(255,0,0,0.1)'
      },
      neutral: {
        bg: 'gray3',
        color: 'gray11',
        borderColor: 'gray7',
        boxShadow: '0 3px 5px 0px rgba(0,0,0,0.05)'
      },
      caution: {
        bg: 'orange3',
        color: 'orange11',
        borderColor: 'orange7',
        boxShadow: '0 3px 5px 0px rgba(200,120,0,0.15)'
      }
    }
  }
});

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, userRef) => {
  const { children, className, tone = 'neutral', ...rest } = props;
  return (
    <Card
      kind="elevated"
      className={cx(styles({ tone }), className)}
      ref={userRef}
      {...rest}
    >
      <span>{children}</span>
    </Card>
  );
});

Toast.displayName = 'Toast';

export { Toast };
