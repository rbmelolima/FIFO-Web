import styled from 'styled-components';

export const AvatarNavbarContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin-right: 8px;    
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 20px;
    color: var(--color-primary);
    margin-bottom: 4px;
  }  

  select {
    font-size: 16px;
    width: 100px;    
    padding: 0;    
    background: transparent;
    outline: none;
    border: none;
    color: #fff;
  }

  select option {
    background-color: var(--color-background);
    color: #fff;    
  }  
`;


export const BtnOpen = styled.button`
  font-size: 16px;    
  display: flex;
  align-items: center;
  color: #fff;
  background: transparent;
  outline: none;
  border: none;

  svg {
    margin-left: 8px;
  }  
`;

export const GroupButtons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 12px;
  }  

  button:hover,
  button:active {
    color: #fff;
    background-color: var(--color-primary);
  }
`;
