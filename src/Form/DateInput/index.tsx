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
  iconError?: string;
  iconSuccess?: string;
  width?: number | string;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
}

const DateInput: React.FC<InputProps> = ({
  name,
  iconSuccess,
  iconError,
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
        // console.log(value);
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
      <div
        className="input-wrapper"
        style={{
          paddingRight: success || error ? 0 : '8px',
        }}
      >
        <input
          name={name}
          type="date"
          ref={inputRef}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
          onFocus={() => {
            clearError();
            setSuccess(false);
          }}
          {...rest}
        />
        {error ? (
          <div className="icon">
            <img src={iconError} alt={name} />
          </div>
        ) : (
          success && (
            <div className="icon">
              <img src={iconSuccess} alt={name} />
            </div>
          )
        )}
      </div>
      {!!error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </Container>
  );
};

export default DateInput;
