import React from 'react';
import styled from 'styled-components';
import { hidden } from './utils';

const StyledScreenReaderOnly = styled.span`
  ${hidden}
`;

const ScreenReaderOnly = React.forwardRef(function ScreenReaderOnly(props, ref) {
  const { children, as, id } = props;
  return (
    <StyledScreenReaderOnly id={id} as={as}>
      {children}
    </StyledScreenReaderOnly>
  );
});

ScreenReaderOnly.defaultProps = {
  as: 'span'
};

ScreenReaderOnly.displayName = 'ScreenReaderOnly';

export { hidden };
export default ScreenReaderOnly;
