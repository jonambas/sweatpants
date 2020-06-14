import React from 'react';
import * as storybook from '@storybook/react';

storybook.configure(require.context('../.stories', true, /\.stories\.js$/), module);
