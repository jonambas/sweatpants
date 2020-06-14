import React from 'react';
import Stack from '@sweatpants/stack';
import Theme from '@sweatpants/theme';

export default { title: 'Layout|Stack' };

export const stack = () => (
  <Theme>
    <Stack space="1rem" align="center">
      <div>Foo Bar</div>
      <div>Bar</div>
      <div>Baz Foo Bar</div>
      <div>Foo Bar</div>
    </Stack>
  </Theme>
);
