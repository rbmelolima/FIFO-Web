import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 16px;  
  background-color: var(--color-background);

  .info {
    display: block;
    font-size: 16px;
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div span {
    color: #BA8E69;
    font-size: 24px;
  }

  strong {
    font-size: 16px;
    color: #BA8E69;
  }

  img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin: 0 8px;
  }

  div.divider {
    width: 100%;
    height: 2px;
    background-color: var(--color-primary-light);
  }
`;

export const Divider = styled.div`
  margin-bottom: 12px;
  width: 100%;
  height: 1px;
  background-color: rgba(243, 152, 76, 0.31);
`;

export const Gradiente = styled.div`
  &.active {
    background-image: linear-gradient(180deg, #A8A8D0 0%, #FE662E 100%);
    border-radius: 16px;
    padding: 3px;
    width: 100%;
    margin-bottom: 12px;  
  }  
`;
