import {
  Button,
  Text,
  Dialog,
  Stack,
  DateField,
  Select
} from '../../packages/react/src';

directory('Dialog', () => {
  add('Default', () => {
    return (
      <Dialog trigger={<Button>Open</Button>}>
        <Stack>
          <Text looksLike="h4" element="h2">
            Dialog
          </Text>
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
