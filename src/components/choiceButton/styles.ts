import styled from 'styled-components';

export const WrapperButton = styled.div`
.gradient-box-button {
    padding: 4.5px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      #f4994d 0%,
      rgba(241, 113, 6, 0) 63.54%,
      #786247 99.97%,
      rgba(244, 153, 77, 0.307222) 99.98%
    );
    width: min-content;
    margin: 0 auto;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin-top: 16px;
  }

  button {
    background-color: var(--color-background-dark);
    width: 168px;
    padding: 4px 12px;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }
    


`;