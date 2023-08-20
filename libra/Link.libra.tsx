import { Link, Text } from '../packages/react/src';

directory('Link', () => {
  add('Default', () => {
    return (
      <>
        <Text>
          Lorem ipsum dolor <Link href="#">link click me</Link> sit amet conscet
        </Text>
        <Text>
          Lorem ipsum dolor{' '}
          <Link inheritColor href="#">
            link click me inherited color
          </Link>{' '}
          sit amet conscet
        </Text>
      </>
    );
  });

  add('Slot as button', () => {
    return (
      <>
        <Text>
          Lorem ipsum dolor{' '}
          <Link asChild>
            <button>button click me</button>
          </Link>{' '}
          sit amet conscet
        </Text>
      </>
    );
  });
});
