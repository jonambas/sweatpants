import { css } from '@styles/css';
import { Toast, Stack } from '../../packages/react/src';

directory('Toast', () => {
  add('Default', () => {
    return <Toast onClose={() => {}}>Toast</Toast>;
  });

  add('Tone', () => {
    return (
      <Stack>
        <Toast tone="negative" onClose={() => {}}>
          Negative
        </Toast>
        <Toast tone="neutral" onClose={() => {}}>
          Neutral
        </Toast>
      </Stack>
    );
  });
  add('Without onClose', () => {
    return (
      <Stack>
        <Toast tone="negative">Negative</Toast>
        <Toast tone="neutral">Neutral</Toast>
      </Stack>
    );
  });
});
