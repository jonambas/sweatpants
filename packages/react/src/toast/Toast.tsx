import { css, cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Card } from '../card/Card';
import { Button } from '../button/Button';
import { Cross } from '../icons/icons';

export type ToastProps = ComponentPropsWithRef<'div'> & {
  tone?: 'negative' | 'neutral';
  onClose?: ComponentPropsWithRef<'button'>['onClick'];
};

const styles = cva({
  base: {
    pl: '4',
    pr: '3',
    py: '3',
    fontSize: '4',
    borderWidth: '1px',
    borderStyle: 'solid'
  },
  variants: {
    tone: {
      negative: {
        bg: 'red9',
        color: 'red2',
        borderColor: 'red11',
        boxShadow: '0 3px 5px 0px rgba(255,0,0,0.1)',
        '& button': {
          color: 'red5'
        }
      },
      neutral: {
        bg: 'gray12',
        color: 'gray1',
        borderColor: 'gray12',
        boxShadow: '0 3px 5px 0px rgba(0,0,0,0.05)',
        '& button': {
          color: 'gray6'
        }
      }
    }
  }
});

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, userRef) => {
  const { children, className, tone = 'neutral', onClose, ...rest } = props;
  return (
    <Card
      kind="elevated"
      className={cx(styles({ tone }), className)}
      ref={userRef}
      {...rest}
    >
      <div
        className={css({
          display: 'flex',
          gap: '5',
          justifyContent: 'space-between'
        })}
      >
        <div>{children}</div>
        <Button kind="bare" size="xs" onClick={onClose}>
          <Cross width="12" height="12" />
        </Button>
      </div>
    </Card>
  );
});

Toast.displayName = 'Toast';

export { Toast };
