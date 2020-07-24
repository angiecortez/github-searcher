import styled from 'styled-components';

export const GridUser = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 20px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    padding: 10px;
  }
`;
