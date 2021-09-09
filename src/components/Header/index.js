import { StyledHeader, StyledHeaderText } from './styled';

export const Header = ({ title }) => (
  <StyledHeader data-testid="header">
    <StyledHeaderText>{title}</StyledHeaderText>
  </StyledHeader>
);
