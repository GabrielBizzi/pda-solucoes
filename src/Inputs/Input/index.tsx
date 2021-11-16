import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  iconError?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  icon,
  iconError,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  if (type === 'hidden') {
    return (
      <input
        name={name}
        type={type}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    );
  }

  return (
    <Container error={!!error}>
      <div className="input">
        <input
          name={name}
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        <div className="icon">
          <img src={error ? iconError : icon} alt={name} />
        </div>
      </div>
      {!!error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </Container>
  );
};

export default Input;
