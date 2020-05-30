import React from 'react';
import { system } from 'styled-system';
import styled from 'styled-components';

const Child = styled.div`
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

const Stack = React.forwardRef(function Stack(props, ref) {
  const { children, align, space } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <div>
      {items.map((child, i) => (
        <Child key={i} alignment={align} gutter={i < items.length - 1 ? space : null}>
          {child}
        </Child>
      ))}
    </div>
  );
});

Stack.displayName = 'Stack';
Stack.defaultProps = {
  space: '1rem'
};
export default Stack;
