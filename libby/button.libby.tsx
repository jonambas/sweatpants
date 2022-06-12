import React from 'react';
import { Button } from '@sweatpants/button';
import { Stack } from '@sweatpants/stack';
import { describe, add } from '@sparkpost/libby-react';

describe('Button', () => {
  add('renders correctly', () => (
    <Stack space="1rem" align="left">
      <Button bg="#cce3ff" p="1rem" onClick={() => { }}>
        Foo Bar
      </Button>
      <Button>Unstyled</Button>
      <Button bg="#cce3ff" p="1rem">
        Baz Foo Bar
      </Button>
      <Button bg="#cce3ff" p="1rem">
        Foo Bar
      </Button>
    </Stack>
  ));
});
