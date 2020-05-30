import React from 'react';
import styled from 'styled-components';
import { system } from 'styled-system';

// Negates children padding top
// Overflow: auto is set here to prevent margin collapse
// If this becomes flakey, padding-top: 1px is also an option
const OuterWrapper = styled('div')`
  &:before {
    display: block;
    content: '';
    ${system({
      gutter: {
        property: 'marginTop',
        scale: 'space',
        transform: (value, scale = []) => `-${scale[value] || value}`
      }
    })}
  }
`;

// Negates children padding left and aligns content
const InnerWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  ${system({
    gutter: {
      property: 'marginLeft',
      scale: 'space',
      transform: (value, scale = []) => `-${scale[value] || value}`
    }
  })}
  ${system({
    align: {
      property: 'justifyContent',
      defaultScale: {
        center: 'center',
        left: 'flex-start',
        right: 'flex-end'
      }
    }
  })}
`;

const Child = styled.div`
  padding-top: ${(props) => props.pt};
  padding-left: ${(props) => props.pl};
`;

const Inline = React.forwardRef(function Inline(props, ref) {
  const { children, align, space } = props;
  const items = React.Children.toArray(children);

  return (
    <OuterWrapper gutter={space} ref={ref}>
      <InnerWrapper gutter={space} align={align}>
        {items.map((child, i) => (
          <Child key={i} pt={space} pl={space}>
            {child}
          </Child>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
});

Inline.displayName = 'Inline';
Inline.defaultProps = {
  space: '1rem'
};
export default Inline;
