import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <div className="material-textfield">
        <input type="text" id={ name } { ...rest } />
        <label htmlFor={ name }> { label } </label>
      </div>
    </Container>
  );
};

export default Input;