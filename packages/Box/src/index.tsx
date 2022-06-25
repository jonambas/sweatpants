import React from 'react';
import styled from 'styled-components';
import {
  polymorphicForwardRef,
  PolymorphicComponentProps
} from '@sweatpants/utils';
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

const system = compose(
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
);

export type BoxOwnProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export type BoxProps<E = 'div'> = PolymorphicComponentProps<E, BoxOwnProps>;

const StyledBox = styled.div<BoxOwnProps & { color?: any }>`
  ${system}
`;

const Box = polymorphicForwardRef<'div', BoxOwnProps>(function Box(
  props,
  userRef
) {
  const { as = 'div', ...rest } = props;
  return <StyledBox as={as} ref={userRef} {...rest} />;
});

Box.displayName = 'Box';
export { Box };
