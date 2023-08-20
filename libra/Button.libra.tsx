import { Button } from '../packages/react/src';
import { css } from '@styles/css';

directory('Button', () => {
  add('Default', () => {
    return <Button>Click Me</Button>;
  });

  add('Sizes', () => {
    return (
      <div className={css({ display: 'flex', gap: '4' })}>
        <div>
          <Button size="xs">Click Me</Button>
        </div>
        <div>
          <Button size="sm">Click Me</Button>
        </div>
        <div>
          <Button size="md">Click Me</Button>
        </div>
        <div>
          <Button size="lg">Click Me</Button>
        </div>
      </div>
    );
  });

  add('Variants', () => {
    return (
      <div className={css({ display: 'flex', gap: '4' })}>
        <div>
          <Button variant="neutral">Click Me</Button>
        </div>
        <div>
          <Button variant="primary">Click Me</Button>
        </div>
        <div>
          <Button variant="destructive">Click Me</Button>
        </div>
        <div>
          <Button variant="bare">Click Me</Button>
        </div>
      </div>
    );
  });

  add('Bare on background', () => {
    return (
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        <div className={css({ padding: '4', bg: 'green5' })}>
          <Button size="md" variant="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'red5' })}>
          <Button size="md" variant="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'gray4' })}>
          <Button size="md" variant="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'gray1' })}>
          <Button size="md" variant="bare">
            Click Me
          </Button>
        </div>
      </div>
    );
  });

  add('Disabled', () => {
    return (
      <div className={css({ display: 'flex', gap: '4' })}>
        <div>
          <Button disabled variant="neutral">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled variant="primary">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled variant="destructive">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled variant="bare">
            Click Me
          </Button>
        </div>
      </div>
    );
  });

  add('Slot as anchor', () => {
    return (
      <Button asChild variant="primary">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Link to google.com
        </a>
      </Button>
    );
  });
});
