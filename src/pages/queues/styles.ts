import styled from 'styled-components';


export const GridContainer = styled.div`

`;

export const Grid = styled.div`
display: flex;
flex-wrap: wrap;

  
  
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
  display:flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;;
  }
  
  
`;

export const ChooseQueue = styled.section`
  min-width:40%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
 
  h5 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 24px;
  }
`;

export const QueueStatus = styled.section`
  min-width:45%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #C07744;
  padding-left: 30px;
  display:none;
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