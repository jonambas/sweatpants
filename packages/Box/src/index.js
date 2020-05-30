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
  compose
} from 'styled-system';
import styled from 'styled-components';

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

const Box = styled.div`
  ${system}
`;

Box.displayName = 'Box';
export default Box;
