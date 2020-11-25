import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const InputMaterial  = styled(TextField)`
  margin-bottom: 16px !important;

  fieldset {
    border-color: var(--color-secundary);
    border-width: 2px;
  }

  input, label {
    color: #fff;
    font-size: 14px;
    margin: 0;
  }
`;