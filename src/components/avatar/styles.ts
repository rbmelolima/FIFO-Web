import styled from 'styled-components';

export const AvatarNavbarContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin-right: 8px;    
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 20px;
    color: var(--color-primary);
    margin-bottom: 4px;
  }

  span {
    font-size: 16px;    
    display: flex;
    align-items: center;
    color: #fff;

    svg {
      margin-left: 8px;
    }
  }
`;
