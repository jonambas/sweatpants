import React from 'react';
import { Box, BoxOwnProps } from '@sweatpants/box';
import { describe, add } from '@sparkpost/libby-react';
import styled from 'styled-components';

const Nested = styled(Box)<BoxOwnProps>``;

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

  add('nested component', () => (
    <Nested
      as="a"
      display="block"
      p="1rem"
      mb="1rem"
      borderRadius="8px"
      border="test"
    >
      Foo Bar
    </Nested>
  ));
});
