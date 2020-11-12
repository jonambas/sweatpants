import React from 'react';
import Button from '@sweatpants/button';
import Theme from '@sweatpants/theme';
import Stack from '@sweatpants/stack';
import { describe, add } from 'libby-react';

describe('Button', () => {
  add('renders correctly', () => (
    <Theme>
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
    </Theme>
  ));
});
