import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  background-color: var(--color-background);
  border-bottom: 1px solid #824A21;

  @media screen and (min-width: 748px) {
    padding: 16px 32px;    
  }

  img.logo {
    width: 80px;
    height: auto;
  }  

  .group button:first-child{     
    margin-right: 32px;
  }
`;
