import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  border: 1px solid var(--color-primary-normal); 

  width: 100%;
  height: 100%;

  padding: 8px;
  margin: 0 auto;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
  }

  @media screen and (min-width: 576px) {
    img {
      width: 108px;
      height: 108px;
    }

    span {
      font-size: 24px;
    }
  }
`;
