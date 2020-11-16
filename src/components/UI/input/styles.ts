import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .material-textfield {
    position: relative;  
    width: 462.65px;
  }

  label {
    position: absolute;
    font-size: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-background);
    color: white;
    padding: 0 0.3rem;
    margin: 0 0.5rem;    
    pointer-events: none;
  }

  input {
    font-size: 1rem;
    outline: none;
    border: 4px solid #36357E;
    border-radius: 10px;
    padding: 1rem 0.7rem;
    color: white;
    background-color: transparent ;
    transition: 0.1s ease-out;
  }

  input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(.9);
  }
`;