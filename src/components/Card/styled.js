import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 315px;
  height: 280px;
  border-radius: 4px;
  object-fit: cover;
`;

export const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 17.87px;
  right: 23.92px;
  padding: 0;
  margin: 0;
`;

export const StyledDetails = styled.div`
  font-family: ${({ theme }) => theme.textFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.textPrimaryColor};
`;

export const StyledPrice = styled.div`
  font-family: ${({ theme }) => theme.textFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 24px;
  /* identical to box height, or 92% */

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.textPrimaryColor};
`;

export const StyledAddress = styled.address`
  font-family: ${({ theme }) => theme.textFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 32px;
  /* identical to box height, or 213% */

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.textPrimaryColor};
`;

export const StyledDate = styled.div`
  font-family: ${({ theme }) => theme.textFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height, or 229% */

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.textSecondaryColor};
`;

export const StyledCard = styled.div`
  width: 315px;
  position: relative;
`;

export const StyledHeart = styled.img`
  width: 39.17px;
  height: 35.94px;
`;
