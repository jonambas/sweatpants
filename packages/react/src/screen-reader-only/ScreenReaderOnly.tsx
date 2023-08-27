import { css } from '@styles/css';
import { FC, PropsWithChildren } from 'react';

import { Slot } from '../slot/Slot';

const ScreenReaderOnly: FC<PropsWithChildren<{ asChild?: boolean }>> = (
  props
) => {
  const { asChild = false, children, ...rest } = props;

  const Element = asChild ? Slot : 'span';
  return (
    <Element
      {...rest}
      className={css({
        clip: 'rect(1px, 1px, 1px, 1px)',
        clipPath: 'inset(50%)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute'
      })}
    >
      {children}
    </Element>
  );
};

export { ScreenReaderOnly };
