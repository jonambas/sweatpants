import { Tooltip, Button } from '../../packages/react/src';

directory('Tooltip', () => {
  add('Default', () => {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content size="md">Tooltip</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content size="sm">Tooltip</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content hideArrow size="sm">
            Tooltip
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  });
});
