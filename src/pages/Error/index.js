import styled from 'styled-components';

const StyledError = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.textErrorColor};
  font-weight: bold;
`;

export const Error = () => (
  <StyledError>Internal Error. Try again later.</StyledError>
);
