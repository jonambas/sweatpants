import { FC, PropsWithChildren, useEffect } from 'react';
import './index.css';
import { css } from '@styles/css';
import { Link, Stack, Text, useColorScheme } from '../packages/react/src';

const styles = css({
  p: '8',
  bg: 'appBg',
  minH: '100vh'
});

const Layout: FC<PropsWithChildren<{ scheme?: 'light' | 'dark' }>> = ({
  children,
  scheme
}) => {
  const [, setPrefers] = useColorScheme({ setHtmlAttribute: true });

  useEffect(() => {
    if (scheme) {
      setPrefers(scheme);
    }
  }, [scheme]);

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

  return <div className={styles}>{children}</div>;
};

export default Layout;
