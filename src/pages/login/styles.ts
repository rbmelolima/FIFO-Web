import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 40px 16px;
 
  @media screen and (min-width: 748px){
    padding: 40px 128px;
  }    
`;

export const Title = styled.h1`
  color: var(--color-primary-normal);
  font-size: 24px;

  @media screen and (min-width: 748px){
    font-size: 64px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--color-primary-light);

  @media screen and (min-width: 748px){
    font-size: 36px;
  }
`;

export const Subtitle = styled.h4`
  color: var(--color-primary-normal);

  font-size: 14px;

  @media screen and (min-width: 748px){
    font-size: 36px;
  }
`;
