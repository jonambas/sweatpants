import { css } from '@styles/css';
import { Card, Stack, TextField } from '../../packages/react/src';

directory('TextField', () => {
  add('Default', () => {
    return <TextField placeholder="placeholder" id="test" label="Label" />;
  });

  add('Sizes', () => {
    return (
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '4'
        })}
      >
        <Card>
          <Stack>
            <TextField
              placeholder="placeholder"
              id="test"
              hideLabel
              label="Label"
              size="sm"
            />
            <TextField id="test2" hideLabel label="Label" />
            <TextField id="test3" hideLabel label="Label" size="lg" />
          </Stack>
        </Card>
        <div>
          <Stack>
            <TextField
              placeholder="placeholder"
              id="test"
              hideLabel
              label="Label"
              size="sm"
            />
            <TextField id="test2" hideLabel label="Label" />
            <TextField id="test3" hideLabel label="Label" size="lg" />
          </Stack>
        </div>
      </div>
    );
  });

  add('Error', () => {
    return (
      <Card>
        <TextField id="test2" label="Label" hasError />
      </Card>
    );
  });

  add('Prefix & Suffix', () => {
    return (
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '4',
          alignItems: 'flex-start'
        })}
      >
        <TextField id="test2" size="sm" label="Label" prefix={'$'} />
        <TextField id="test2" label="Label" prefix={'$'} />
        <TextField
          id="test2"
          size="lg"
          align="right"
          label="Label"
          suffix={'%'}
        />
      </div>
    );
  });
});
