import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  gap: 16px;

  @media screen and (min-width: 465px) {
    grid-template-columns: repeat(3, 1fr);  
  }

  @media screen and (min-width: 748px) {
    grid-template-columns: repeat(4, 1fr);  
  }
  
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-primary-light);

  @media screen and (min-width: 748px) {
    padding: 16px 32px;
  }

  button#btn-menu {
    outline: none;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: auto;
    }
  }
`;

export const Page = styled.div`
  background-color: var(--color-background);
  width: 100%;
  min-height: 100vh;
  padding: 64px 16px;
`;

export const Main = styled.main`
  max-width: fit-content;
  width: 100%;
  margin: 0 auto;
`;

export const ChooseQueue = styled.section`
  h5 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 24px;
  }
`;

export const QueueStatus = styled.section`
  margin-top: 64px;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-bottom: 24px;
  }

  footer {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary);
    margin-top: 16px;
    margin-bottom: 40px;
    text-align: center;
  }

  button {
    margin: 0 auto;
    width: 220px;
  }
`;