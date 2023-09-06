import {
  Button,
  ButtonGroup,
  Card,
  Stack,
  Text
} from '../../packages/react/src';
import { css } from '@styles/css';

directory('Card', () => {
  add('Default', () => {
    return (
      <Card>
        <Stack>
          <Text element="h1" looksLike="h3">
            Heading
          </Text>
          <Text muted>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
            Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
            felis bibendum ut. Volutpat lacus laoreet non curabitur gravida
            arcu. Adipiscing diam donec adipiscing tristique.
          </Text>
        </Stack>
      </Card>
    );
  });

  add('Elevated Variant', () => {
    return (
      <div className={css({ bg: 'baseBg', padding: '8' })}>
        <Card space="tight" kind="elevated">
          <ButtonGroup size="md" kind="bare" space="tight">
            <Button selected>3m</Button>
            <Button>6m</Button>
            <Button>1y</Button>
            <Button>ytd</Button>
          </ButtonGroup>
        </Card>
      </div>
    );
  });

  add('Space Variants', () => {
    return (
      <div className={css({ display: 'flex', flexDir: 'column', gap: '6' })}>
        <Card space="loose">
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
        <Card space="normal">
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
        <Card space="tight">
          <ButtonGroup size="sm" kind="bare" space="none">
            <Button>Tight</Button>
            <Button>6m</Button>
            <Button>1y</Button>
            <Button>ytd</Button>
          </ButtonGroup>
        </Card>
        <Card space="none">
          <div
            className={css({ display: 'flex', flexDir: 'column', gap: '1' })}
          >
            <Button kind="bare" size="sm">
              None
            </Button>
            <Button kind="bare" size="sm">
              Option
            </Button>
            <Button kind="bare" size="sm">
              Option
            </Button>
            <Button kind="bare" size="sm">
              Option
            </Button>
          </div>
        </Card>
      </div>
    );
  });

  add('Dividers', () => {
    return (
      <Stack>
        <Card kind="elevated" space="normal">
          <Text element="h1" looksLike="h3">
            Heading
          </Text>
          <Card.Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
            Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
            felis bibendum ut. Volutpat lacus laoreet non curabitur gravida
            arcu. Adipiscing diam donec adipiscing tristique.
          </Text>
          <Card.Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
            Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
            felis bibendum ut. Volutpat lacus laoreet non curabitur gravida
            arcu. Adipiscing diam donec adipiscing tristique.
          </Text>
        </Card>
        <Card kind="neutral" space="normal">
          <Text element="h1" looksLike="h3">
            Heading
          </Text>
          <Card.Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
            Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
            felis bibendum ut. Volutpat lacus laoreet non curabitur gravida
            arcu. Adipiscing diam donec adipiscing tristique.
          </Text>
          <Card.Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim. Nibh venenatis cras sed felis eget. At
            consectetur lorem donec massa sapien faucibus et molestie. Sit amet
            mattis vulputate enim. Egestas dui id ornare arcu odio ut sem nulla.
            Lectus vestibulum mattis ullamcorper velit sed. Dolor sit amet
            consectetur adipiscing elit ut aliquam purus. Arcu dui vivamus arcu
            felis bibendum ut. Volutpat lacus laoreet non curabitur gravida
            arcu. Adipiscing diam donec adipiscing tristique.
          </Text>
        </Card>
      </Stack>
    );
  });
});
