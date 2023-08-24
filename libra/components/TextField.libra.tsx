import { css } from '@styles/css';
import { TextField } from '../../packages/react/src';

directory('TextField', () => {
  add('Default', () => {
    return <TextField id="test" label="Label" />;
  });

  add('Sizes', () => {
    return (
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '4',
          alignItems: 'flex-start'
        })}
      >
        <TextField id="test" hideLabel label="Label" size="sm" />
        <TextField id="test2" hideLabel label="Label" />
        <TextField id="test3" hideLabel label="Label" size="lg" />
      </div>
    );
  });

  add('Error', () => {
    return (
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: '4',
          alignItems: 'flex-start'
        })}
      >
        <TextField id="test2" label="Label" hasError />
      </div>
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
