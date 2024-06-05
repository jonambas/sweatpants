import { css } from '@styles/css';
import { Stack, TextField } from '../../packages/react/src';

const Item = () => (
  <div
    className={css({
      height: '2rem',
      width: '10rem',
      bg: 'blue4',
    })}
  />
);
directory('Stack', () => {
  add('Default', () => {
    return (
      <Stack>
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('Space - tight', () => {
    return (
      <Stack space="tight">
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('Space - normal', () => {
    return (
      <Stack space="normal">
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('Space - loose', () => {
    return (
      <Stack space="loose">
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('Direction - row', () => {
    return (
      <Stack direction="row">
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('Align - center', () => {
    return (
      <Stack align="center">
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    );
  });

  add('With Inputs', () => {
    return (
      <Stack space="normal">
        <TextField label="Label" id="id" />
        <TextField label="Label" id="id" />
        <TextField label="Label" id="id" />
        <TextField label="Label" id="id" />
      </Stack>
    );
  });
});
