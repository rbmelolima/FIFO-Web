import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import React from 'react';
import { InputMaterial } from './styles';

const Input: React.FC<TextFieldProps> = ({ label, placeholder, ...rest }) => {
  return (
    <InputMaterial
      { ...rest }
      label={ label }
      placeholder={ placeholder }
      variant="outlined"
    />
  );
};

export default Input;

