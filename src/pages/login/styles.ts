import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 40px 16px;
 
  @media screen and (min-width: 450px){
    padding: 40px 128px;
  }    
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: var(--color-primary-normal);
  font-size: 24px;

  @media screen and (min-width: 450px){
    font-size: 64px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 14px;
  color: var(--color-primary-light);
  max-width: 220px;

  @media screen and (min-width: 450px){
    font-size: 36px;
    max-width: 840px;
  }
`;

export const Subtitle = styled.h4`
  color: var(--color-primary-normal);
  font-size: 14px;
  margin-bottom: 24px;

  @media screen and (min-width: 450px){
    font-size: 36px;
  }
`;


export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: var(--color-primary-light);
  display: block;
  margin-bottom: 16px;

  @media screen and (min-width: 450px){
    font-size: 24px;
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  background-color: transparent;
  outline: none;
  border: 3px solid;
  border-color: var(--color-primary-light);
  border-radius: 10px;

  color: #fff;
  font-size: 16px;

  max-width: 208px;

  ::placeholder{
    color: #fff;  
    font-size: 16px;
  }

  @media screen and (min-width: 450px){
    max-width: 506px;    
    font-size: 36px;

    ::placeholder{
      font-size: 36px;
    }
  }
`;


export const Submit = styled.button``;