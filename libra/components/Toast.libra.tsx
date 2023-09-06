import { css } from '@styles/css';
import { Toast, Stack } from '../../packages/react/src';

directory('Toast', () => {
  add('Default', () => {
    return <Toast>Toast</Toast>;
  });

  add('Tone', () => {
    return (
      <Stack>
        <Toast tone="positive">Positive</Toast>
        <Toast tone="negative">Negative</Toast>
        <Toast tone="neutral">Neutral</Toast>
        <Toast tone="caution">Caution</Toast>
      </Stack>
    );
  });
});
