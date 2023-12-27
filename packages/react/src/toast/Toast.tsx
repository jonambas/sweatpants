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
    borderStyle: 'solid',
  },
  variants: {
    tone: {
      negative: {
        bg: { base: 'red11', _dark: 'red7' },
        color: { base: 'red2', _dark: 'white' },
        borderColor: { base: 'red11', _dark: 'red8' },
        boxShadow: 'md',
        '& button': {
          color: { base: 'red5!', _dark: 'red12!' },
          _hover: {
            color: { base: 'red2!', _dark: 'white!' },
          },
        },
      },
      neutral: {
        bg: { base: 'gray12', _dark: 'white' },
        color: 'gray1',
        borderColor: { base: 'gray12', _dark: 'white' },
        boxShadow: 'md',
        '& button': {
          color: 'gray8!',
          _hover: {
            color: 'gray1!',
          },
        },
      },
    },
  },
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
          justifyContent: 'space-between',
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
