import { useState } from 'react';
import { Button, ButtonGroup, Card } from '../../packages/react/src';
import { css } from '@styles/css';

directory('Button', () => {
  add('Default', () => {
    return <Button>Click Me</Button>;
  });

  add('Sizes', () => {
    return (
      <Card>
        <div
          className={css({
            display: 'flex',
            gap: '4',
            alignItems: 'flex-start',
          })}
        >
          <Button size="xs">Click Me</Button>
          <Button size="sm">Click Me</Button>
          <Button size="md">Click Me</Button>
          <Button size="lg">Click Me</Button>
        </div>
      </Card>
    );
  });

  add('kinds', () => {
    return (
      <Card>
        <div className={css({ display: 'flex', gap: '4' })}>
          <Button kind="neutral">Click Me</Button>
          <Button kind="primary">Click Me</Button>
          <Button kind="destructive">Click Me</Button>
          <Button kind="bare">Click Me</Button>
        </div>
      </Card>
    );
  });

  add('Bare on background', () => {
    return (
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        <div className={css({ padding: '4', bg: 'green5' })}>
          <Button size="md" kind="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'red5' })}>
          <Button size="md" kind="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'gray4' })}>
          <Button size="md" kind="bare">
            Click Me
          </Button>
        </div>
        <div className={css({ padding: '4', bg: 'gray1' })}>
          <Button size="md" kind="bare">
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
          <Button disabled kind="neutral">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled kind="primary">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled kind="destructive">
            Click Me
          </Button>
        </div>
        <div>
          <Button disabled kind="bare">
            Click Me
          </Button>
        </div>
      </div>
    );
  });

  add('Slot as anchor', () => {
    return (
      <Button asChild kind="primary">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Link to google.com
        </a>
      </Button>
    );
  });

  add('Selected', () => {
    const [selected, setSelected] = useState(0);

    return (
      <Card>
        <div className={css({ display: 'flex', gap: '4' })}>
          <ButtonGroup space="none">
            <Button selected kind="neutral">
              Click Me
            </Button>
            <Button kind="neutral">Click Me</Button>
            <Button kind="neutral">Click Me</Button>
          </ButtonGroup>
          <ButtonGroup space="tight">
            <Button
              selected={selected === 0}
              onClick={() => setSelected(0)}
              kind="bare"
            >
              Click Me
            </Button>
            <Button
              selected={selected === 1}
              onClick={() => setSelected(1)}
              kind="bare"
            >
              Click Me
            </Button>
          </ButtonGroup>
        </div>
      </Card>
    );
  });
});
