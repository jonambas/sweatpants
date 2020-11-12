import React from 'react';
import Inline from '@sweatpants/inline';
import Theme from '@sweatpants/theme';
import { describe, add } from 'libby-react';

describe('Inline', () => {
  add('renders correctly', () => (
    <Theme>
      <Inline>
        <div>Foo Bar</div>
        <div>Bar</div>
        <div>Baz Foo Bar</div>
        <div>Foo Bar</div>
        <div>Bar</div>
        <div>Foo Bar</div>
        <div>Bar</div>
        <div>Baz Foo Bar</div>
        <div>Foo Bar</div>
        <div>Bar</div>
        <div>Foo Bar</div>
        <div>Bar</div>
        <div>Baz Foo Bar</div>
        <div>Foo Bar</div>
        <div>Bar</div>
      </Inline>
    </Theme>
  ));
});
