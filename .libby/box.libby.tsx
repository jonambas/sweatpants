import React from 'react';
import { Box } from '@sweatpants/box';
import { describe, add } from '@sparkpost/libby-react';

describe('Box', () => {
  add('renders correctly', () => (
    <>
      <Box bg="#cce3ff" p="1rem" mb="1rem" borderRadius="8px">
        Foo Bar
      </Box>
      <Box as="a" href="#" color="purple" fontStyle="italic">
        As a link
      </Box>
    </>
  ));
});
