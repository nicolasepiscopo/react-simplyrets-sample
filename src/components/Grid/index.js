import styled from 'styled-components';

export const Grid = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 18.5px 29px;
  margin: auto;

  @media (max-width: 375px) {
    padding: 17px;
  }
`;

export const GridItem = styled.li`
  margin: 17px;
`;
