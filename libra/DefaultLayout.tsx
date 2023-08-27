import { FC, PropsWithChildren } from 'react';
import './index.css';
import { css } from '@styles/css';
import { Link, Stack, Text } from '../packages/react/src';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    return (
      <div>
        <Stack>
          <Text element="h1" looksLike="h2">
            @sweatpants/react
          </Text>
          <Text element="p" looksLike="p">
            See{' '}
            <Link
              href="https://github.com/jonambas/sweatpants"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jonambas/sweatpants
            </Link>
            .
          </Text>
        </Stack>
      </div>
    );
  }

  return (
    <div
      className={css({
        padding: '4'
      })}
    >
      {children}
    </div>
  );
};

export default Layout;
