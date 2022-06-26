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

const Box = styled.div<BoxOwnProps>`
  ${system}
`;

Box.displayName = 'Box';
export { Box };
