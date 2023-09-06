import { useState } from 'react';
import { Button, Stack, Tab, Tabs } from '../../packages/react/src';
import { css } from '@styles/css';

directory('Tab', () => {
  add('Borders', () => {
    const [selected, setSelected] = useState(0);

    return (
      <Stack space="loose">
        <Tabs>
          <Tab selected={selected === 0} onClick={() => setSelected(0)}>
            Lorem ipsum
          </Tab>
          <Tab selected={selected === 1} onClick={() => setSelected(1)}>
            Lorem ipsum
          </Tab>
          <Tab selected={selected === 2} onClick={() => setSelected(2)}>
            Lorem ipsum
          </Tab>
        </Tabs>
        <Tabs hideBorder>
          <Tab selected={selected === 0} onClick={() => setSelected(0)}>
            Lorem ipsum
          </Tab>
          <Tab selected={selected === 1} onClick={() => setSelected(1)}>
            Lorem ipsum
          </Tab>
          <Tab selected={selected === 2} onClick={() => setSelected(2)}>
            Lorem ipsum
          </Tab>
        </Tabs>
      </Stack>
    );
  });

  add('Sizes', () => {
    const [selected, setSelected] = useState(0);

    return (
      <Stack space="loose">
        <Tabs size="xs">
          <Tab
            size="xs"
            selected={selected === 0}
            onClick={() => setSelected(0)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="xs"
            selected={selected === 1}
            onClick={() => setSelected(1)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="xs"
            selected={selected === 2}
            onClick={() => setSelected(2)}
          >
            Lorem ipsum
          </Tab>
        </Tabs>
        <Tabs size="sm">
          <Tab
            size="sm"
            selected={selected === 0}
            onClick={() => setSelected(0)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="sm"
            selected={selected === 1}
            onClick={() => setSelected(1)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="sm"
            selected={selected === 2}
            onClick={() => setSelected(2)}
          >
            Lorem ipsum
          </Tab>
        </Tabs>
        <Tabs size="md">
          <Tab
            size="md"
            selected={selected === 0}
            onClick={() => setSelected(0)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="md"
            selected={selected === 1}
            onClick={() => setSelected(1)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="md"
            selected={selected === 2}
            onClick={() => setSelected(2)}
          >
            Lorem ipsum
          </Tab>
        </Tabs>
        <Tabs size="lg">
          <Tab
            size="lg"
            selected={selected === 0}
            onClick={() => setSelected(0)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="lg"
            selected={selected === 1}
            onClick={() => setSelected(1)}
          >
            Lorem ipsum
          </Tab>
          <Tab
            size="lg"
            selected={selected === 2}
            onClick={() => setSelected(2)}
          >
            Lorem ipsum
          </Tab>
        </Tabs>
      </Stack>
    );
  });
});
