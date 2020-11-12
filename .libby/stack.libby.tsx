import React from 'react';
import Stack from '@sweatpants/stack';
import Box from '@sweatpants/box';
import Theme from '@sweatpants/theme';
import { describe, add } from 'libby-react';

describe('Stack', () => {
  add('renders correctly', () => (
    <Theme>
      <Stack space="1rem" align="center">
        <Box bg="#cce3ff" p="1rem">
          Foo Bar
        </Box>
        <Box bg="#cce3ff" p="1rem">
          Bar
        </Box>
        <Box bg="#cce3ff" p="1rem">
          Baz Foo Bar
        </Box>
        <Box bg="#cce3ff" p="1rem">
          Foo Bar
        </Box>
      </Stack>
    </Theme>
  ));
});
