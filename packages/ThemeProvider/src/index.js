import React from 'react';
import { createGlobalStyle, StyleSheetManager, ThemeProvider } from 'styled-components';
import normalize from 'styled-normalize';
import defaultTheme from './theme';

const Global = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: ${(props) => props.theme.fontSizes.default};
    font-family: ${(props) => props.theme.fonts.sans};
  }
`;

function SwtchProvider(props) {
  const { children, styleSheetManagerProps, theme } = props;

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <StyleSheetManager {...styleSheetManagerProps}>
        <div>
          <Global />
          {children}
        </div>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default SwtchProvider;
