import React from 'react';
import ScreenReaderOnly from '@sweatpants/screenreaderonly';

export default { title: 'Layout|ScreenReaderOnly' };

export const visuallyHidden = () => (
  <>
    <ScreenReaderOnly>
      <div>This is hidden</div>
    </ScreenReaderOnly>
    <div>This is not hidden</div>
  </>
);
