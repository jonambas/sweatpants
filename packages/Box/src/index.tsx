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
import styled from 'styled-components';

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

export interface BoxProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

const Box = styled.div<BoxProps>`
  ${system}
`;

Box.displayName = 'Box';
export default Box;
