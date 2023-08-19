import { FC, PropsWithChildren } from 'react';
import './index.css';
import { css } from '@styles/css';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={css({
        fontFamily: 'sans',
        padding: '4'
      })}
    >
      {children}
    </div>
  );
};

export default Layout;
