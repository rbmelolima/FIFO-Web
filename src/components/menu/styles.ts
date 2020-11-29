import styled from 'styled-components';
import { AvatarNavbarContainer, BtnOpen } from '../avatar/styles';


export const Container = styled.div`
  height: 100%;
  max-width: 340px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #EBEBEB;
  overflow-x: hidden;
  padding: 20px 0;
  border-radius: 35px 0px 0px 35px;

  ${BtnOpen} {
    color: #000;
  }

`;

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
`;

export const Close = styled.button`
  width: 40px;
  height: 40px;  
  outline: none;
  border: none;
  background-color: transparent;
  color: #212121;

  position: absolute;
  right: 10px;

  svg {
    color: #212121;
  }
`

export const Welcome = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #FC703C;
  border-radius: 12px;
  max-width: 80%; 
  margin: 16px auto 64px auto;  

  h4 {
    font-size: 24px;
    color: #FD6B35;
    margin-bottom: 12px;
  }

  p {
    font-size: #212121;
  }
`;

export const Separator = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  height: 1px;
  background-color: #FC703C;  
`;

export const BtnListTile = styled.button`
  outline: none;
  border: none;    
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  border-radius: 14px;
  transition: all 0.2s ease-in;
  color: #212121;
  padding: 12px 16px;
  margin-left: 12px;

  &:hover, &active {
    color: #fff;
    background-color: var(--color-primary);
  } 
`;

export const AvatarContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0 12px;

  ${AvatarNavbarContainer} {
    span {
      color: #000;
    }
  }
`;
