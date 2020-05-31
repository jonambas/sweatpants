import React from 'react';
import * as storybook from '@storybook/react';
// import { setDefaults } from '@storybook/addon-info';
// import { setOptions } from '@storybook/addon-options';
import Box from '@sweatpants/box';
import ThemeProvider from '@sweatpants/theme';

// setOptions({
//   theme: {
//     brandTitle: 'Matchbox',
//     brandUrl: 'https://github.com/SparkPost/matchbox/'
//   },
//   hierarchySeparator: /\//,
//   hierarchyRootSeparator: /\|/
// });

// // addon-info
// setDefaults({
//   inline: true,
//   header: false
// });

storybook.addDecorator((storyFn) => (
  <ThemeProvider>
    <Box p="4rem">{storyFn()}</Box>
  </ThemeProvider>
));
storybook.configure(require.context('../.stories', true, /\.stories\.js$/), module);
