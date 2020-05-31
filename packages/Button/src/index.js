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
  compose
} from 'styled-system';

const systemPropNames = () =>
  [border, color, flexbox, grid, layout, position, shadow, space, typography].reduce(
    (acc, prop) => acc.concat(prop.propNames),
    []
  );

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

const Styled = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !systemPropNames().includes(prop) && defaultValidatorFn(prop)
})`
  ${system}
  border: none;
  border-radius: ${(props) => props.theme.radii.default};
  background: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;

const Button = React.forwardRef(function Button(props, ref) {
  const {
    as,
    children,
    className,
    disabled,
    id,
    isExternalLink,
    href,
    onClick,
    onFocus,
    onBlur,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOver,
    onMouseOut,
    mouseup,
    target,
    title,
    type = 'button',
    rel,
    ...rest
  } = props;

  const systemProps = pick(rest);

  return (
    <Styled
      as={as}
      className={className}
      disabled={disabled}
      id={id}
      href={href}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      mouseup={mouseup}
      target={isExternalLink ? '_blank' : target}
      rel={isExternalLink ? 'noopener noreferrer' : rel}
      title={title}
      type={type}
      ref={ref}
      {...systemProps}
    >
      {children}
    </Styled>
  );
});

Button.displayName = 'Button';
export default Button;
