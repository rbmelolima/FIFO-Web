import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    margin-right: 8px;
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: var(--color-primary);
  }

  span {
    font-size: 17.5px;
    color: black;
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }
`;
