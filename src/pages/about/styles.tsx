import styled from 'styled-components';


export const Container = styled.div`
  background-color: var(--color-background);
  section:nth-child(n+2) img{
     width:90%;
   }

   section:nth-child(n+2) .container_section_elements_img{
     display:flex;
     align-items: center;
     justify-content: center;
   }

   @media screen and (max-width: 700px) {
      section:nth-child(2n+1){
        display:flex;
        flex-direction:column-reverse;
       
      }

      section:nth-child(2n+1) .container_section_elements{
        padding-left:20px;
      }

      section:nth-child(2n) .container_section_elements{
        padding-right:20px;
      }

   }
   

`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
 
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

export const Main = styled.div`

  width: 100%;  

  .container_right{
    border-radius: 50px 0 0px 50px;
  }

  .container_left{
    border-radius: 0px 50px 50px 0px;
  }

`;

export const Section = styled.section`
  width: 100%;
  display:flex;
  
 
  padding-top:30px;
  margin-bottom:100px;

  .container_section_elements{
    width:50%;
  }

  .container_section_elements_img{
    width:50%;
  }

  .container_section_elements_img img{
    width:100%;
  }

  .container_section_elements div{
    width:100%;
  }

  @media screen and (max-width: 700px) {
    display:block;
    margin-bottom:20px;

    .container_section_elements_img{
      width:100%;
    }

    .container_section_elements{
      width:100%;
      margin-bottom:20px;
    }
  }
`;


export const FormIndex = styled.div`
  
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding:50px;
  
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

  h2 {
    color:#fe662e;
    font-weight: 500;
    font-size: 26px;
    line-height: 28px;
    text-align: center;
    
    margin-bottom: 50px;
  }


`;