import styled from 'styled-components';

export const PageChooseQueue = styled.div`
  background-color: var(--color-background-dark);
  width: 100%;
  min-height: 100vh;
  padding: 24px 16px;
`;

export const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    margin-bottom: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 120px;
  justify-content: center;
  gap: 16px;  

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 184px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
