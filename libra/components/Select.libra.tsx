import { css } from '@styles/css';
import { Card, Select } from '../../packages/react/src';

directory('Select', () => {
  add('Sizes', () => {
    return (
      <Card>
        <div className={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
          <Select value={'test'} size="sm" label="Label" id="t1">
            <Select.Item value="test">test</Select.Item>
          </Select>
          <Select value={'test'} label="Label" id="t2">
            <Select.Item value="test">test</Select.Item>
          </Select>
          <Select defaultValue="test" size="lg" label="Label" id="t3">
            <Select.Item value="test">test</Select.Item>
            <Select.Item value="test2">test2</Select.Item>
            <Select.Item value="test3">test3</Select.Item>
            <Select.Item value="test4">test4</Select.Item>
            <Select.Item value="test5">test5</Select.Item>
            <Select.Item value="test6">test6</Select.Item>
            <Select.Item value="test7">test7</Select.Item>
          </Select>
        </div>
      </Card>
    );
  });

  add('Hide Chevron', () => {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Select hideChevron hideLabel defaultValue="test" label="Label" id="t1">
          <Select.Item value="test">test</Select.Item>
          <Select.Item value="test2">test 2</Select.Item>
          <Select.Item value="test3">test 3</Select.Item>
          <Select.Item value="test4">test 4</Select.Item>
        </Select>
      </div>
    );
  });

  add('Bare Kind', () => {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Select
          kind="bare"
          hideChevron
          hideLabel
          defaultValue="test"
          label="Label"
          id="t0"
          size="sm"
        >
          <Select.Item value="test">test</Select.Item>
          <Select.Item value="test2">test 2</Select.Item>
          <Select.Item value="test3">test 3</Select.Item>
          <Select.Item value="test4">test 4</Select.Item>
        </Select>
        <Select
          kind="bare"
          hideChevron
          hideLabel
          defaultValue="test"
          label="Label"
          id="t1"
        >
          <Select.Item value="test">test</Select.Item>
          <Select.Item value="test2">test 2</Select.Item>
          <Select.Item value="test3">test 3</Select.Item>
          <Select.Item value="test4">test 4</Select.Item>
        </Select>
        <Select
          kind="bare"
          hideChevron
          hideLabel
          defaultValue="test"
          label="Label"
          id="t2"
          size="lg"
        >
          <Select.Item value="test">test</Select.Item>
          <Select.Item value="test2">test 2</Select.Item>
          <Select.Item value="test3">test 3</Select.Item>
          <Select.Item value="test4">test 4</Select.Item>
        </Select>
      </div>
    );
  });

  add('Error', () => {
    return (
      <div className={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
        <Select hasError value={'test'} size="sm" label="Label" id="t1">
          <Select.Item value="test">test</Select.Item>
        </Select>
        <Select hasError value={'test'} label="Label" id="t2">
          <Select.Item value="test">test</Select.Item>
        </Select>
        <Select hasError defaultValue="test" size="lg" label="Label" id="t3">
          <Select.Item value="test">test</Select.Item>
          <Select.Item value="test2">test2</Select.Item>
          <Select.Item value="test3">test3</Select.Item>
          <Select.Item value="test4">test4</Select.Item>
          <Select.Item value="test5">test5</Select.Item>
          <Select.Item value="test6">test6</Select.Item>
          <Select.Item value="test7">test7</Select.Item>
        </Select>
      </div>
    );
  });
});
