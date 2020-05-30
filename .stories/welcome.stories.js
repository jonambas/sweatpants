import React from 'react';
import Box from '@swtch-ui/box';
import Button from '@swtch-ui/button';
import Stack from '@swtch-ui/stack';
import Inline from '@swtch-ui/inline';

export default { title: 'testing' };

export const testRoom = () => (
  <Box>
    <Stack space="5rem" align="center">
      <Box>
        <Button width="100" color="#000" size="100px">
          Test
        </Button>
      </Box>
      <Box>
        <Button width="100" color="#000" size="100px">
          Test
        </Button>
      </Box>
      <Box>
        <Button width="100" color="#000" size="100px">
          Test
        </Button>
      </Box>
    </Stack>
    <Box my="4rem"></Box>
    <Inline>
      <Button color="#000">Test</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">df</Button>
      <Button color="#000">asdf</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">asdfasdfasdf</Button>
      <Button color="#000">sdafasdf</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">adsfas</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">adf</Button>
      <Button color="#000">Test</Button>
      <Button color="#000">fsd</Button>
      <Button color="#000">dadsfadfs</Button>
      <Button color="#000">Test</Button>
    </Inline>
  </Box>
);
