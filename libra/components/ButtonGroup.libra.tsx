import { ButtonGroup, Button } from '../../packages/react/src';

directory('ButtonGroup', () => {
  add('Space None', () => {
    return (
      <ButtonGroup kind="neutral" space="none">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });

  add('Space Tight', () => {
    return (
      <ButtonGroup space="tight" kind="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });

  add('Space Normal', () => {
    return (
      <ButtonGroup space="normal" kind="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });

  add('Space Loose', () => {
    return (
      <ButtonGroup space="loose" kind="neutral">
        <Button>Click</Button>
        <Button>Click</Button>
        <Button>Click</Button>
      </ButtonGroup>
    );
  });
});
