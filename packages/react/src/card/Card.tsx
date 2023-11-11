'use client';

import { cva, cx } from '@styles/css';
import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef
} from 'react';
import { Divider } from './CardDivider';
import { CardContext, CardContextValue } from './Card.context';

export type CardProps = ComponentPropsWithRef<'div'> & {
  space?: CardContextValue['space'];
  kind?: CardContextValue['kind'];
};

const styles = cva({
  base: {
    borderRadius: 'md',
    bg: 'contentBg'
  },
  variants: {
    space: {
      none: { padding: '0' },
      tight: { padding: '2' },
      normal: { padding: '5' },
      loose: { padding: '7' }
    },
    kind: {
      elevated: {
        boxShadow:
          '0 1px 4px 0px rgba(0,0,0,0.12), 0 4px 12px 0px rgba(0,0,0,0.05)',
        borderWidth: { _darkScheme: '1px' },
        borderStyle: { _darkScheme: 'solid' },
        borderColor: { _darkScheme: 'borders' }
      },
      neutral: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'borders'
      }
    }
  }
});

const Card = forwardRef<HTMLDivElement, CardProps>((props, userRef) => {
  const {
    children,
    className,
    space = 'normal',
    kind = 'neutral',
    ...rest
  } = props;

  return (
    <CardContext.Provider value={{ kind, space }}>
      <div
        ref={userRef}
        className={cx(styles({ space, kind }), className)}
        {...rest}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}) as ForwardRefExoticComponent<CardProps> & {
  Divider: typeof Divider;
};

Card.displayName = 'Card';
Card.Divider = Divider;

export { Card };
