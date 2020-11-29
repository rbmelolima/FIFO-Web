import styled from 'styled-components';

export const Page = styled.div`
  background-color: var(--color-background);
  width: 100%;
  min-height: 100vh;
  padding: 64px 16px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }   
`;
