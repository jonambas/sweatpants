import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Download,
  Plus,
  Stack,
} from '../../packages/react/src';
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

  add('Kinds', () => {
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

  add('Icons', () => {
    return (
      <Stack>
        <Card>
          <Stack>
            <Stack direction="row">
              <Button size="lg" kind="neutral" iconOnly>
                <Plus />
              </Button>
              <Button size="lg" kind="primary" iconOnly>
                <Plus />
              </Button>
              <Button size="lg" kind="destructive" iconOnly>
                <Plus />
              </Button>
              <Button size="lg" kind="bare" iconOnly>
                <Plus />
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="md" kind="neutral" iconOnly>
                <Plus />
              </Button>
              <Button size="md" kind="primary" iconOnly>
                <Plus />
              </Button>
              <Button size="md" kind="destructive" iconOnly>
                <Plus />
              </Button>
              <Button size="md" kind="bare" iconOnly>
                <Plus />
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="sm" kind="neutral" iconOnly>
                <Plus />
              </Button>
              <Button size="sm" kind="primary" iconOnly>
                <Plus />
              </Button>
              <Button size="sm" kind="destructive" iconOnly>
                <Plus />
              </Button>
              <Button size="sm" kind="bare" iconOnly>
                <Plus />
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="xs" kind="neutral" iconOnly>
                <Plus />
              </Button>
              <Button size="xs" kind="primary" iconOnly>
                <Plus />
              </Button>
              <Button size="xs" kind="destructive" iconOnly>
                <Plus />
              </Button>
              <Button size="xs" kind="bare" iconOnly>
                <Plus />
              </Button>
            </Stack>
          </Stack>
        </Card>
        <Card>
          <Stack>
            <Stack direction="row">
              <Button size="lg" kind="neutral">
                <Download /> With Text
              </Button>
              <Button size="lg" kind="primary">
                <Download /> With Text
              </Button>
              <Button size="lg" kind="destructive">
                <Download /> With Text
              </Button>
              <Button size="lg" kind="bare">
                <Download /> With Text
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="md" kind="neutral">
                <Download /> With Text
              </Button>
              <Button size="md" kind="primary">
                <Download /> With Text
              </Button>
              <Button size="md" kind="destructive">
                <Download /> With Text
              </Button>
              <Button size="md" kind="bare">
                <Download /> With Text
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="sm" kind="neutral">
                <Download /> With Text
              </Button>
              <Button size="sm" kind="primary">
                <Download /> With Text
              </Button>
              <Button size="sm" kind="destructive">
                <Download /> With Text
              </Button>
              <Button size="sm" kind="bare">
                <Download /> With Text
              </Button>
            </Stack>
            <Stack direction="row">
              <Button size="xs" kind="neutral">
                <Download /> With Text
              </Button>
              <Button size="xs" kind="primary">
                <Download /> With Text
              </Button>
              <Button size="xs" kind="destructive">
                <Download /> With Text
              </Button>
              <Button size="xs" kind="bare">
                <Download /> With Text
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>
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
