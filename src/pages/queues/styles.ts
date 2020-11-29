import styled from 'styled-components';
import doodle from '../../assets/doodles/doodle-queue-desktop.svg'

export const Page = styled.div`
  background-color: var(--color-background);
  width: 100%;
  min-height: 95vh;
  padding: 64px 16px;

  @media screen and (min-width: 748px) {
    background-image: url('${doodle}');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }   
`;
