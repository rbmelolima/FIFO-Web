import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import React from 'react';
import { InputMaterial } from './styles';

const Input: React.FC<TextFieldProps> = ({ label, ...rest }) => {
  return (
    <InputMaterial
      { ...rest }      
      label={label}
      variant="outlined"
    />
  );
};

export default Input;

