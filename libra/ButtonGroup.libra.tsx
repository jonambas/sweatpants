import { ButtonGroup, Button } from '../packages/react/src';

directory('ButtonGroup', () => {
  add('None - xs', () => {
    return (
      <ButtonGroup size="xs" variant="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });

  add('Tight - sm', () => {
    return (
      <ButtonGroup spacing="tight" size="sm" variant="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });

  add('Loose - lg', () => {
    return (
      <ButtonGroup spacing="loose" size="lg" variant="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });
});
