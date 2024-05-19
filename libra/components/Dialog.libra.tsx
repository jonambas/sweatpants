import {
  Button,
  Dialog,
  Stack,
  DateField,
  Select,
} from '../../packages/react/src';

directory('Dialog', () => {
  add('Default', () => {
    return (
      <Dialog trigger={<Button>Open</Button>} title="Dialog">
        <Stack>
          <DateField id="date" />
          <Select id="select">
            <Select.Item value="foo">Foo</Select.Item>
            <Select.Item value="bar">Bar</Select.Item>
          </Select>
          <Button>Button</Button>
        </Stack>
      </Dialog>
    );
  });
});
