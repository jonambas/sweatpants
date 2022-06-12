import React from 'react';
import { Button } from '@sweatpants/button';
import { SweatpantsProvider } from '@sweatpants/theme';
import { Stack } from '@sweatpants/stack';
import { describe, add } from '@sparkpost/libby-react';

describe('Button', () => {
  add('renders correctly', () => (
    <SweatpantsProvider>
      <Stack space="1rem" align="center">
        <Button bg="#cce3ff" p="1rem">
          Foo Bar
        </Button>
        <Button p="1rem">Bar</Button>
        <Button bg="#cce3ff" p="1rem">
          Baz Foo Bar
        </Button>
        <Button bg="#cce3ff" p="1rem">
          Foo Bar
        </Button>
      </Stack>
    </SweatpantsProvider>
  ));
});
