import './index.css';
import { css } from '@styles/css';
import {
  Card,
  ColorSchemeProvider,
  Link,
  Stack,
  Text
} from '../packages/react/src';
import type { LibraLayout } from '@sweatpants/libra';

const styles = css({
  p: '8',
  bg: 'baseBg',
  minH: '100vh'
});

const Layout: LibraLayout = ({ children, scheme }) => {
  if (!children) {
    return (
      <ColorSchemeProvider scheme={scheme} setHtmlAttribute>
        <div className={styles}>
          <Card>
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
          </Card>
        </div>
      </ColorSchemeProvider>
    );
  }

  return (
    <ColorSchemeProvider scheme={scheme} setHtmlAttribute>
      <div className={styles}>{children}</div>
    </ColorSchemeProvider>
  );
};

export default Layout;
