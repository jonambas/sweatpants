import { Text } from '../packages/react/src';
import { css } from '@styles/css';

directory('Text', () => {
  add('Looks Like', () => {
    return (
      <div className={css({ display: 'flex', gap: '4', flexDir: 'column' })}>
        <Text looksLike="h1">Lorem ipsum</Text>
        <Text looksLike="h2">Lorem ipsum</Text>
        <Text looksLike="h3">Lorem ipsum</Text>
        <Text looksLike="h4">Lorem ipsum</Text>
        <Text looksLike="h5">Lorem ipsum</Text>
        <Text looksLike="h6">Lorem ipsum</Text>
        <Text looksLike="p">Lorem ipsum</Text>
        <Text looksLike="em">Lorem ipsum</Text>
        <Text looksLike="strong">Lorem ipsum</Text>
      </div>
    );
  });

  add('Element', () => {
    return (
      <div className={css({ display: 'flex', gap: '4', flexDir: 'column' })}>
        <Text element="h1" looksLike="h3">
          Lorem ipsum doddlor sit amet, consectetur adipiscing elit.
        </Text>
        <Text element="p" looksLike="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit
          amet justo donec ddenim. Nibh venenatis cras sed felis eget. At
          consectetur lorem donec massa sapien faucibus et molestie. Sit amet
          mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
          Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
          consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
          felis bibendum ut. Volutpat lacus laoreet non curabitur gravida arcu.
          Adipiscing diam donec adipiscing tristique.
        </Text>
      </div>
    );
  });
});
