import React from 'react';
import styled from 'styled-components';
import { pick } from '@styled-system/props';
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

//////////////////////
// Utils
//////////////////////

const systemProps = [border, color, flexbox, grid, layout, position, shadow, space, typography];
const systemPropNames = () =>
  systemProps.reduce(
    (acc, prop) => (prop.propNames ? [...acc, ...prop.propNames] : acc),
    [] as string[]
  );

const system = compose(...systemProps);
const isSystemProp = (name: string) => name && systemPropNames().includes(name);

export const buttonReset = `
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  width: auto;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

//////////////////////
// Component
//////////////////////

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !isSystemProp(prop) && defaultValidatorFn(prop)
})`
  ${buttonReset}
  ${system}
`;

type SystemProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

const Button = React.forwardRef<
  HTMLButtonElement,
  SystemProps & React.ComponentPropsWithoutRef<'button'>
>(function Button(props, userRef) {
  const { children, title, type = 'button', ...rest } = props;
  return (
    <StyledButton ref={userRef} {...rest}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
export default Button;
