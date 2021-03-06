import React from 'react';
import styled from 'styled-components';
import { padding, PaddingProps, system } from 'styled-system';

type Gutter = {
  gutter?: string | number | (string | number)[];
};

type Align = {
  align?: 'center' | 'left' | 'right';
};

export interface InlineProps extends Align {
  id?: string;
  space?: string | number | (string | number)[];
  children?: React.ReactNode;
}

function negativeVal(value: any, scale?: any) {
  if (!scale) {
    return `-${value}`;
  }
  return `-${scale[value]}`;
}

// Negates children padding top
// Overflow: auto is set here to prevent margin collapse
// If this becomes flakey, padding-top: 1px is also an option
const OuterWrapper = styled('div')<Gutter>`
  &:before {
    display: block;
    content: '';
    ${system({
      gutter: {
        property: 'marginTop',
        scale: 'space',
        transform: negativeVal
      }
    })}
  }
`;

// Negates children padding left and aligns content
const InnerWrapper = styled.div<Gutter & Align>`
  display: flex;
  flex-wrap: wrap;
  ${system({
    gutter: {
      property: 'marginLeft',
      scale: 'space',
      transform: negativeVal
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

////////////////////

const Child = styled.div<PaddingProps>`
  ${padding}
`;

////////////////////

const Inline = React.forwardRef<HTMLDivElement, InlineProps>(function Inline(props, ref) {
  const { children, id, align, space = '1rem' } = props;
  const items = React.Children.toArray(children);

  return (
    <OuterWrapper
      id={id}
      gutter={space}
      //
      ref={ref}
    >
      <InnerWrapper
        gutter={space}
        align={align}
        //
      >
        {items.map((child, i) => (
          <Child
            //
            key={i}
            pt={space}
            pl={space}
          >
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
