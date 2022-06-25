import React from 'react';
import { system } from 'styled-system';
import styled from 'styled-components';
import {
  polymorphicForwardRef,
  PolymorphicComponentProps
} from '@sweatpants/utils';

type Alignment = 'center' | 'left' | 'right';

interface StackItemProps {
  alignment?: Alignment;
  gutter?: string | null;
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

export type StackOwnProps = {
  align?: Alignment;
  id?: string;
  space?: string;
};

export type StackProps<E = 'div'> = PolymorphicComponentProps<E, StackOwnProps>;

const Stack = polymorphicForwardRef<'div', StackOwnProps>(function Stack(
  props,
  userRef
) {
  const { as: Elem = 'div', children, id, align, space = '1rem' } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <Elem id={id} ref={userRef}>
      {items.map((child, i) => (
        <StackItem
          key={i}
          alignment={align}
          gutter={i < items.length - 1 ? space : null}
        >
          {child}
        </StackItem>
      ))}
    </Elem>
  );
});

Stack.displayName = 'Stack';
export { Stack };
