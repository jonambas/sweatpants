import { css, cva, cx } from '@styles/css';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { CardContextValue, useCardContext } from './Card.context';

export type CardDividerProps = ComponentPropsWithRef<'div'> & {
  children?: never;
};

const styles = cva({
  base: { position: 'relative', height: '1px' },
  variants: {
    kind: {
      elevated: {
        bg: 'gray4'
      },
      neutral: {
        bg: 'gray5'
      }
    },
    space: {
      none: { marginY: '0' },
      tight: {
        marginY: '2',
        marginLeft: '-2',
        width: 'calc(100% + token(spacing.4) * 2)'
      },
      normal: {
        marginY: '5',
        left: '-5',
        width: 'calc(100% + token(spacing.5) * 2)'
      },
      loose: {
        marginY: '7',
        left: '-7',
        width: 'calc(100% + token(spacing.9) * 2)'
      }
    }
  }
});

const Divider = forwardRef<HTMLDivElement, CardDividerProps>(
  (props, userRef) => {
    const { className, ...rest } = props;
    const context = useCardContext();

    return (
      <div ref={userRef} className={cx(styles(context), className)} {...rest} />
    );
  }
);

Divider.displayName = 'Card.Divider';

export { Divider };
