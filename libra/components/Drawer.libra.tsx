import { Button, Text, Drawer, Stack } from '../../packages/react/src';

directory('Drawer', () => {
  add('Default', () => {
    return (
      <Drawer trigger={<Button>Open</Button>}>
        <Stack>
          <Text looksLike="h4" element="h2">
            Drawer
          </Text>
          <Button>Button</Button>
        </Stack>
      </Drawer>
    );
  });
});
