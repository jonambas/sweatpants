import React from 'react';
import { Inline } from '@sweatpants/inline';
import { SweatpantsProvider } from '@sweatpants/theme';
import { describe, add } from '@sparkpost/libby-react';

describe('Inline', () => {
  add('renders correctly', () => (
    <SweatpantsProvider>
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
    </SweatpantsProvider>
  ));
});
