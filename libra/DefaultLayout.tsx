import { FC, PropsWithChildren } from 'react';
import './index.css';
import { css } from '@styles/css';
import { ColorSchemeProvider, Link, Stack, Text } from '../packages/react/src';

const styles = css({
  p: '8',
  bg: 'baseBg',
  minH: '100vh'
});

const Layout: FC<PropsWithChildren<{ scheme?: 'light' | 'dark' }>> = ({
  children,
  scheme
}) => {
  if (!children) {
    return (
      <div className={styles}>
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
    <ColorSchemeProvider defaultScheme={scheme} setHtmlAttribute>
      <div className={styles}>{children}</div>
    </ColorSchemeProvider>
  );
};

export default Layout;
