import { ScreenReaderOnly } from '../../packages/react/src';

directory('ScreenReaderOnly', () => {
  add('Default', () => {
    return <ScreenReaderOnly>Content</ScreenReaderOnly>;
  });
});
