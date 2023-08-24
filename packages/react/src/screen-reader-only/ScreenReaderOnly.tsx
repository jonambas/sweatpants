import { css } from '@styles/css';
import { FC, PropsWithChildren } from 'react';

const ScreenReaderOnly: FC<PropsWithChildren> = (props) => {
  return (
    <span
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
      {props.children}
    </span>
  );
};

export { ScreenReaderOnly };
