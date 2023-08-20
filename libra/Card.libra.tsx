import { Button, ButtonGroup, Card, Text } from '../packages/react/src';
import { css } from '@styles/css';

directory('Card', () => {
  add('Default', () => {
    return (
      <Card>
        <Text element="h1" looksLike="h3">
          Heading
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit
          amet justo donec enim. Nibh venenatis cras sed felis eget. At
          consectetur lorem donec massa sapien faucibus et molestie. Sit amet
          mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
          Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
          consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
          felis bibendum ut. Volutpat lacus laoreet non curabitur gravida arcu.
          Adipiscing diam donec adipiscing tristique.
        </Text>
      </Card>
    );
  });

  add('White Variant', () => {
    return (
      <div className={css({ bg: 'gray3', padding: '8' })}>
        <Card padding="tight" variant="white">
          <ButtonGroup size="sm" variant="bare">
            <Button>3m</Button>
            <Button>6m</Button>
            <Button>1y</Button>
            <Button>ytd</Button>
          </ButtonGroup>
        </Card>
      </div>
    );
  });

  add('Padding Variants', () => {
    return (
      <div className={css({ display: 'flex', flexDir: 'column', gap: '6' })}>
        <Card padding="loose">
          <Text element="h1" looksLike="h3">
            Loose
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim.
          </Text>
        </Card>
        <Card padding="normal">
          <Text element="h1" looksLike="h3">
            Normal
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim.
          </Text>
        </Card>
        <Card padding="tight">
          <ButtonGroup size="sm" variant="bare">
            <Button>Tight</Button>
            <Button>6m</Button>
            <Button>1y</Button>
            <Button>ytd</Button>
          </ButtonGroup>
        </Card>
        <Card padding="none">
          <div
            className={css({ display: 'flex', flexDir: 'column', gap: '1' })}
          >
            <Button variant="bare" size="sm">
              None
            </Button>
            <Button variant="bare" size="sm">
              Option
            </Button>
            <Button variant="bare" size="sm">
              Option
            </Button>
            <Button variant="bare" size="sm">
              Option
            </Button>
          </div>
        </Card>
      </div>
    );
  });
});
