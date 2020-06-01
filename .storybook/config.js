import React from 'react';
import * as storybook from '@storybook/react';
import Box from '@sweatpants/box';
import ThemeProvider from '@sweatpants/theme';

storybook.addDecorator((storyFn) => (
  <ThemeProvider theme={{ space: { 100: '2rem' } }}>
    <Box p="4rem">{storyFn()}</Box>
  </ThemeProvider>
));
storybook.configure(require.context('../.stories', true, /\.stories\.js$/), module);
