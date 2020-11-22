import styled from 'styled-components';

export const Container = styled.div`
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
    font-size: 16px;
    color: var(--color-primary);
  }

  span {
    font-size: 14px;
    color: black;
    display: flex;
    align-items: center;
    color: #fff;

    svg {
      margin-left: 8px;
    }
  }
`;
