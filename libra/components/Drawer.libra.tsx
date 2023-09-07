import { Button, Text, Drawer } from '../../packages/react/src';

directory('Drawer', () => {
  add('Default', () => {
    return (
      <Drawer trigger={<Button>Open</Button>}>
        <Text looksLike="h4" element="h2">
          Drawer
        </Text>
      </Drawer>
    );
  });
});
