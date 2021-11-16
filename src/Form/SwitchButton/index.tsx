import React, { useEffect, useState, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const SwitchButton: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
      setValue: (ref, value) => {
        if (value) {
          setChecked(!!value);
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container onClick={() => setChecked(!checked)} checked={checked}>
      <div className="switch-content">
        <input
          type="checkbox"
          checked={checked}
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          readOnly
          {...rest}
        />
      </div>
    </Container>
  );
};

export default SwitchButton;
