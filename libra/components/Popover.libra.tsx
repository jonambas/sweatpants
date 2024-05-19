import { useState } from 'react';
import { Button, Popover, Text } from '../../packages/react/src';

directory('Popover', () => {
  add('Default', () => {
    return (
      <Popover defaultOpen>
        <Popover.Trigger>
          <Button>Open</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Text>Content</Text>
        </Popover.Content>
      </Popover>
    );
  });

  add('Controlled', () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <Button>Open</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Text>
            Content
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Text>
        </Popover.Content>
      </Popover>
    );
  });
});
