import React from 'react';
import { system } from 'styled-system';
import styled from 'styled-components';

type Alignment = 'center' | 'left' | 'right';

interface StackItemProps {
  alignment?: Alignment;
  gutter?: string | null;
}

export interface StackProps {
  align?: Alignment;
  children?: React.ReactNode;
  id?: string;
  space?: string;
}

const StackItem = styled.div<StackItemProps>`
  display: flex;
  flex-direction: column;
  ${() =>
    system({
      gutter: {
        property: 'paddingBottom',
        scale: 'space'
      }
    })}
  ${() =>
    system({
      alignment: {
        property: 'alignItems',
        defaultScale: {
          center: 'center',
          left: 'flex-start',
          right: 'flex-end'
        }
      }
    })}
`;

const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(props, ref) {
  const { children, id, align, space } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <div id={id} ref={ref}>
      {items.map((child, i) => (
        <StackItem key={i} alignment={align} gutter={i < items.length - 1 ? space : null}>
          {child}
        </StackItem>
      ))}
    </div>
  );
});

Stack.displayName = 'Stack';
Stack.defaultProps = {
  space: '1rem'
};
export default Stack;
