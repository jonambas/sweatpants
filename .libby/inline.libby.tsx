import React from 'react';
import { Inline } from '@sweatpants/inline';
import { describe, add } from '@sparkpost/libby-react';

describe('Inline', () => {
  add('renders correctly', () => (

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
  ));
});
