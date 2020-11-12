import React from 'react';
import ScreenReaderOnly from '@sweatpants/screenreaderonly';
import { describe, add } from 'libby-react';

describe('ScreenReaderOnly', () => {
  add('renders visually hidden correctly', () => (
    <>
      <ScreenReaderOnly>
        <div>This is hidden</div>
      </ScreenReaderOnly>
      <div>This is not hidden</div>
    </>
  ));
});
