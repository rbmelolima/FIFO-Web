import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 390px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background: #FFFFFF;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
    border-radius: 35px 0px 0px 35px;

    .menu-avatar{
        padding-left:10px;
        padding-bottom:20px;
        border-bottom: 1px solid #E69250;
    }

    .menu-option{
        padding-top:20px;
        padding-bottom:20px;
        border-bottom: 1px solid #E69250;
        padding-left:20px
    }

    .menu-option a{
        font-size:22px;
    
    }

    .menu-option-active-container{
        padding-left:10px;
    }

    .menu-option-active{
        background-color:#FE662E;
        padding:10px 150px 10px 10px;
        border-radius: 15px;
    }
   

    a {
       
        text-decoration: none;
        font-size: 25px;
        
       
        transition: 0.3s;
    }

    

    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 45px;
        margin-left: 50px;
        font-weight:light;
        color:#36357E;
       
    }

   
      
`;