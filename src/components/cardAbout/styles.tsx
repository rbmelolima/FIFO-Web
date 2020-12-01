import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    
    align-items: flex-start;
    background: #292828;
    border-radius: 50px;
    height: 400px;
    width: 45%;
    margin-top:20px;
    padding:60px;
    
    font-family: 'Metrophobic', sans-serif;
    h2{ 
        background-image: linear-gradient(180deg, #FE662E 17.76%, #F59C33 62.55%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size:3.0vw;
       
       
    }

    p{
        color:white;
        font-size:2.0vw;
        max-width:500px;
    }

    @media screen and (max-width: 700px) {
        h2{
            font-size:4.5vw;
        }
        
        p{
            font-size:3.5vw;
        }
    }

    @media screen and (max-width: 400px) {
        h2{
            font-size:6.5vw;
        }
        
        p{
            font-size:5.5vw;
        }
    }



  
`;