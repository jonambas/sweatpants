'use client';

import { cva, cx } from '@styles/css';
import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
} from 'react';
import { Divider } from './CardDivider';
import { CardContext, CardContextValue } from './Card.context';
import { Slot } from '../slot/Slot';

export type CardProps = ComponentPropsWithRef<'div'> & {
  space?: CardContextValue['space'];
  kind?: CardContextValue['kind'];
  asChild?: boolean;
};

const styles = cva({
  base: {
    display: 'block',
    borderRadius: 'md',
    bg: 'contentBg',
    w: '100%',
  },
  variants: {
    space: {
      none: { padding: '0' },
      tight: { padding: '2' },
      normal: { padding: '5' },
      loose: { padding: '7' },
    },
    kind: {
      elevated: {
        boxShadow: 'md',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'borders',
      },
      neutral: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'borders',
      },
    },
  },
});

const Card = forwardRef<HTMLDivElement, CardProps>((props, userRef) => {
  const {
    asChild,
    children,
    className,
    space = 'normal',
    kind = 'neutral',
    ...rest
  } = props;

  const Element = asChild ? Slot : 'div';

  return (
    <CardContext.Provider value={{ kind, space }}>
      <Element
        ref={userRef}
        className={cx(styles({ space, kind }), className)}
        {...rest}
      >
        {children}
      </Element>
    </CardContext.Provider>
  );
}) as ForwardRefExoticComponent<CardProps> & {
  Divider: typeof Divider;
};

Card.displayName = 'Card';
Card.Divider = Divider;

export { Card };
