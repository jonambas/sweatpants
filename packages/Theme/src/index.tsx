import React from 'react';
import { createGlobalStyle, StyleSheetManager, ThemeProvider, StyleSheetManagerProps } from 'styled-components';
import normalize from 'styled-normalize';

interface ThemeProps {
  default: {
    fonts: {
      sans?: string;
      mono?: string;
    };
    fontSize: string;
  };
}

export interface SweatpantsProviderProps {
  children?: React.ReactNode;
  styleSheetManagerProps?: StyleSheetManagerProps;
  theme?: Record<any, any>;
}

const baseTheme = {
  default: {
    fonts: {
      sans:
        "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif",
      mono: "'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace"
    },
    fontSize: '16px'
  }
};

const Global = createGlobalStyle<{ theme: ThemeProps }>`
  ${normalize}
  
  html {
    font-family: ${({ theme }) => theme.default.fonts.sans};
    font-size: ${({ theme }) => theme.default.fontSize};
  }
`;

function SweatpantsProvider(props: SweatpantsProviderProps) {
  const { children, styleSheetManagerProps, theme } = props;

  return (
    <ThemeProvider theme={{ ...baseTheme, ...theme }}>
      <StyleSheetManager {...styleSheetManagerProps}>
        <>
          <Global />
          {children}
        </>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

SweatpantsProvider.displayName = 'SweatpantsProvider';

export { SweatpantsProvider };
