import {
  Button,
  Text,
  Drawer,
  Stack,
  DateField,
  Select
} from '../../packages/react/src';

directory('Drawer', () => {
  add('Default', () => {
    return (
      <Drawer trigger={<Button>Open</Button>} title="Drawer">
        <Stack>
          <DateField id="date" />
          <Select id="select">
            <Select.Item value="foo">Foo</Select.Item>
            <Select.Item value="bar">Bar</Select.Item>
          </Select>
          <Button>Button</Button>
        </Stack>
      </Drawer>
    );
  });
});
