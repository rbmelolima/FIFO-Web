import styled from 'styled-components';

export const Main = styled.main`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #222222;
    

    section img{
        width:100%;
        height:700px;
    }


    h2 {
        background-image: linear-gradient(180deg, #FE662E 17.76%, #F59C33 62.55%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 500;
        font-size: 26px;
        line-height: 28px;
        text-align: center;
        
        margin-bottom: 20px;
      }
    
      input {
        margin-bottom: 16px;
        max-width: 460px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    
      button {
        max-width: 300px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
      }

      .formIndex{
          margin-top:100px;
          display:flex;
          flex-direction: column;
          justify-content: center;
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

  img {
    width: 80px;
    height: auto;
  }


  @media screen and (min-width: 748px) {
    padding: 16px 32px;

    img {
      width: 100px;
    }
  }
`;