import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: -webkit-sticky;
  position: sticky;
  height: 103px;
  padding: 32px 60px;
  top: -1px;
  z-index: 999;

  background: #f4f4f4;
  border-radius: 1px;

  @media (max-width: 375px) {
    height: 63px;
    padding: 17px 10.5px 17px 12.5px;
  }
`;

export const StyledHeaderText = styled.div`
  position: absolute;
  width: 294.93px;
  height: 40px;

  font-family: ${({ theme }) => theme.textFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  /* identical to box height, or 143% */

  color: ${({ theme }) => theme.textPrimaryColor};

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
