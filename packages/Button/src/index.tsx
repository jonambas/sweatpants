import React from 'react';
import styled from 'styled-components';
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
import {
  polymorphicForwardRef,
  PolymorphicComponentProps
} from '@sweatpants/utils';

const systemProps = [
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
];
const systemPropNames = () =>
  systemProps.reduce(
    (acc, prop) => (prop.propNames ? [...acc, ...prop.propNames] : acc),
    [] as string[]
  );

const system = compose(...systemProps);
const isSystemProp = (name: string) => name && systemPropNames().includes(name);

const buttonReset = `
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
  cursor: pointer;
`;

export type ButtonOwnProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export type ButtonProps<E = 'button'> = PolymorphicComponentProps<
  E,
  ButtonOwnProps
>;

const StyledButton = styled.button.withConfig<ButtonOwnProps & { color?: any }>(
  {
    shouldForwardProp: (prop, defaultValidatorFn) =>
      !isSystemProp(prop) && defaultValidatorFn(prop)
  }
)`
  ${buttonReset}
  ${system}
`;

const Button = polymorphicForwardRef<'button', ButtonOwnProps>(function Button(
  props,
  userRef
) {
  const { as = 'button', children, type = 'button', ...rest } = props;
  return (
    <StyledButton as={as} ref={userRef} type={type} {...rest}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
export { Button, buttonReset };
