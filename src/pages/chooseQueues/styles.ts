import styled from 'styled-components';




export const WrapperButton = styled.div`
   
    padding: 4.5px;
    border-radius: 14px;
    background: linear-gradient(
      180deg,
      #f4994d 0%,
      #f4994d 0.01%,
      rgba(244, 153, 77, 0.307222) 99.98%,
      rgba(244, 153, 77, 0) 99.99%,
      #786247 100%
    );
    width: min-content;
    margin: 0 auto;
    margin-top: 16px;

.div-wrapper-button{
  display:flex;
  justify-content: space-between;
  background-color: var(--color-background-dark);
  width: 508px;
  padding: 4px;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 10px;
  outline: none;
  border: none;
}

.box-button{
  padding: 4.5px;
  border-radius: 14px;
  width: min-content;
}

.active-box-button {
    background: linear-gradient(
      180deg,
      #f4994d 0%,
      #f4994d 0.01%,
      rgba(244, 153, 77, 0.307222) 99.98%,
      rgba(244, 153, 77, 0) 99.99%,
      #786247 100%
    );
  }



  button {
    background-color: var(--color-background-dark);
    width: 224.89px;
    padding: 4px 12px;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }

  h4{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
  }

 
  @media screen and (max-width: 576px) {
    h4{
      font-size: 14px;
     }
     .div-wrapper-button{
      width: 248px;
     }
  
     button{
      width: 109.77px;
     }
  }
  


`;









export const PageChooseQueue = styled.div`
  background-color: var(--color-background-dark);
  width: 100%;
  min-height: 100vh;
  padding: 24px 16px;
`;

export const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    margin-bottom: 24px;
  }

  .title-choice-button{
    font-size:28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500; 
    text-align: center;
    color: #FDDCAE;
    margin:0;
  }
  @media screen and (max-width: 576px) {
    .title-choice-button{
      font-size:20px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 120px;
  justify-content: center;
  gap: 16px;  

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 184px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
