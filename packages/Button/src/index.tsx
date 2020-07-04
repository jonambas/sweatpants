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

interface SystemProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface ButtonProps extends SystemProps {
  isExternalLink?: boolean;
}

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !isSystemProp(prop) && defaultValidatorFn(prop)
})`
  ${buttonReset}
  ${system}
`;

export interface ButtonProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  as?: React.ElementType;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
>(function Button(props, ref) {
  const {
    as,
    children,
    className,
    disabled,
    id,
    onClick,
    onFocus,
    onBlur,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOver,
    onMouseOut,
    onMouseUp,
    title,
    type = 'button',
    ...rest
  } = props;
  const userSystemProps = pick(rest);
  return (
    <StyledButton
      as={as}
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseUp={onMouseUp}
      title={title}
      type={type}
      ref={ref}
      {...userSystemProps}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
export default Button;
