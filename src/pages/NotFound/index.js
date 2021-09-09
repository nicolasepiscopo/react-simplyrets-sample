import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 59px;
  text-align: center;
`;

export const NotFound = () => (
  <StyledTitle>
    😢 <div>Page not found</div>
  </StyledTitle>
);
