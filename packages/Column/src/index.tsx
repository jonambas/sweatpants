import React, { ReactNode } from 'react';
import { system, width } from 'styled-system';
import styled from 'styled-components';

////////////
// Utils
////////////

function negativeVal(value: any, scale?: any) {
  if (!scale) {
    return `-${value}`;
  }
  return `-${scale[value]}`;
}

function getChildren(name: string, children: React.ReactNode, userProps: object) {
  return React.Children.map(children, (child) => {
    // TODO find out why this isnt working
    if (
      // @ts-ignore
      (React.isValidElement(child) && child.type.name === name) ||
      // @ts-ignore
      child.type.displayName === name
    ) {
      // @ts-ignore
      return React.cloneElement(child, userProps);
    }

    return null;
  });
}

////////////
// Columns
////////////

export interface ColumnsProps {
  align?: string | string[];
  alignY?: string | string[];
  children: React.ReactNode;
  reverse?: boolean;
  space?: string | number | (string | number)[];
}

interface WrapperProps {
  gutter?: string | number | (string | number)[];
  reverse?: boolean;
}

const ColumnsWrapper = styled.div<WrapperProps>`
  display: flex;
  ${system({
    gutter: {
      property: 'marginLeft',
      scale: 'space',
      transform: negativeVal
    }
  })}
  ${system({
    reverse: {
      property: 'flexDirection',
      defaultScale: {
        true: 'row-reverse',
        false: 'row'
      }
    }
  })}
`;

const Columns = React.forwardRef<
  HTMLDivElement,
  ColumnsProps & React.HTMLAttributes<HTMLDivElement>
>(function (props, ref) {
  const { children, space = '1rem', reverse, ...rest } = props;

  const items = getChildren('Column', children, { space });

  return (
    <ColumnsWrapper ref={ref} gutter={space} reverse={reverse} {...rest}>
      {items}
    </ColumnsWrapper>
  );
});

Columns.displayName = 'Columns';

////////////
// Column
////////////

export interface ColumnProps {
  children?: React.ReactNode;
  space?: string | number | (string | number)[];
  width?: string;
}

interface ItemProps {
  gutter?: string | number | (string | number)[];
  width?: string;
}

const ColumnWrapper = styled.div<ItemProps>`
  flex: ${(props) => (!props.width ? '1' : '')};
  width: ${(props) => (props.width === 'content' ? 'auto' : '')};

  ${system({
    gutter: {
      property: 'paddingLeft',
      scale: 'space'
    }
  })}
`;

const Column = React.forwardRef<HTMLDivElement, ColumnProps & React.HTMLAttributes<HTMLDivElement>>(
  function (props, ref) {
    const { children, space, width } = props;

    return (
      <ColumnWrapper gutter={space} width={width} ref={ref}>
        {children}
      </ColumnWrapper>
    );
  }
);

Column.displayName = 'Column';

export { Columns, Column };
