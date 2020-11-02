import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  placeholder: string;

  options: Array<{
    value: string,
    label: string;
  }>;
}

export interface OptionsSelect {
  options: {
    value: string,
    label: string;
  };
}

const Select: React.FC<SelectProps> = ({ label, name, options, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={ name }> { label } </label>
      <select id={ name } value="" { ...rest }>
        <option value="" disabled hidden> { placeholder } </option>
        {
          options.map((item) => {
            return (
              <option key={ item.value } value={ item.value }>
                { item.label }
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

export default Select;