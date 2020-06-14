import React from 'react';
import styled from 'styled-components';

export const visuallyHidden: string = `
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

export interface ScreenReaderOnlyProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  id?: string;
}

const StyledScreenReaderOnly = styled.span`
  ${visuallyHidden}
`;

const ScreenReaderOnly = React.forwardRef<HTMLElement, ScreenReaderOnlyProps>(
  function ScreenReaderOnly(props, ref) {
    const { children, as, id } = props;
    return (
      <StyledScreenReaderOnly id={id} as={as} ref={ref}>
        {children}
      </StyledScreenReaderOnly>
    );
  }
);

ScreenReaderOnly.defaultProps = {
  as: 'span'
};

ScreenReaderOnly.displayName = 'ScreenReaderOnly';

export default ScreenReaderOnly;
