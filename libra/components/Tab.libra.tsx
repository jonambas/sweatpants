import { useState } from 'react';
import { Stack, Tab, Tabs } from '../../packages/react/src';

directory('Tab', () => {
  add('Borders', () => {
    return (
      <Stack space="loose">
        <Tabs>
          <Tab value="1">Lorem ipsum</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
        <Tabs hideBorder>
          <Tab value="1">Lorem ipsum</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
      </Stack>
    );
  });

  add('Sizes', () => {
    return (
      <Stack space="loose">
        <Tabs size="xs" defaultValue="1">
          <Tab value="1">Automatic</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
        <Tabs size="sm" defaultValue="1">
          <Tab value="1">Automatic</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
        <Tabs size="md" defaultValue="1" activation="manual">
          <Tab value="1">Manual</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
        <Tabs size="lg" defaultValue="1" activation="manual">
          <Tab value="1">Manual</Tab>
          <Tab value="2">Lorem ipsum</Tab>
          <Tab value="3">Lorem ipsum</Tab>
        </Tabs>
      </Stack>
    );
  });

  add('Controlled', () => {
    const [value, setValue] = useState('2');
    return (
      <Tabs
        size="xs"
        value={value}
        onValueChange={(v) => setValue(v)}
        activation="manual"
      >
        <Tab value="1">Lorem ipsum</Tab>
        <Tab value="2">Lorem ipsum</Tab>
        <Tab value="3">Lorem ipsum</Tab>
      </Tabs>
    );
  });
});
