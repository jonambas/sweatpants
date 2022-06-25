import React from 'react';
import styled from 'styled-components';
import {
  polymorphicForwardRef,
  PolymorphicComponentProps
} from '@sweatpants/utils';

const visuallyHidden: string = `
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  word-wrap: normal !important;
`;

export type ScreenReaderOnlyOwnProps = {
  id?: string;
};

export type ScreenReaderOnlyProps<E = 'div'> = PolymorphicComponentProps<
  E,
  ScreenReaderOnlyOwnProps
>;

const StyledScreenReaderOnly = styled.span`
  ${visuallyHidden}
`;

const ScreenReaderOnly = polymorphicForwardRef<'div', ScreenReaderOnlyOwnProps>(
  function ScreenReaderOnly(props, ref) {
    const { children, as = 'span', id } = props;
    return (
      <StyledScreenReaderOnly id={id} as={as} ref={ref}>
        {children}
      </StyledScreenReaderOnly>
    );
  }
);

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
export { ScreenReaderOnly, visuallyHidden };
