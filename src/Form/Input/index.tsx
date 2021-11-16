import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface inputErrorProps {
  inputName: string;
  message: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  width?: number | string;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  handleInputError,
  messageErrorOnBlur,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue: (ref, value) => {
        ref.value = value;
        setSuccess(false);
        clearError();
      },
    });
  }, [fieldName, registerField, clearError]);

  const handleBlur = useCallback(
    event => {
      if (!event.target.value) {
        if (!!handleInputError && !!messageErrorOnBlur) {
          handleInputError({
            inputName: name,
            message: messageErrorOnBlur,
          });
        }
      } else setSuccess(true);
    },
    [handleInputError, messageErrorOnBlur, name]
  );

  return (
    <Container error={!!error} success={success}>
      <div className="input-wrapper">
        <input
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          onFocus={() => {
            clearError();
            setSuccess(false);
          }}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default Input;
