import styled from 'styled-components';

export const Container = styled.button`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  background-color: Transparent;
  background-repeat:no-repeat;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  border-radius: 10px;
  border: 1px solid #F4994D; 
  width: 184.58px;
  height: 181.22px;


  img{
    width: 98px;
    height: 108px;
  }

  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;

  }

  @media screen and (min-width: 768px) {
    width: 114px;
    height: 110px;

    img{
      width: 57px;
      height: 52px;
    }
    span{
      font-size: 14px;
    }
  }


`;
