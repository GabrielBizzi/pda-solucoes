import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  ValueType,
} from 'react-select';
import { useField } from '@unform/core';

import { Container } from './styles';

interface inputErrorProps {
  inputName: string;
  message: string;
}

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  hasChanged?(value: number | null): void;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
}

const Select: React.FC<Props> = ({
  name,
  hasChanged,
  handleInputError,
  messageErrorOnBlur,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  const handleBlur = React.useCallback(
    event => {
      if (!event.target.value) {
        if (!!handleInputError && !!messageErrorOnBlur) {
          handleInputError({
            inputName: name,
            message: messageErrorOnBlur,
          });
        }
      }
    },
    [handleInputError, messageErrorOnBlur, name]
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue: (ref, value) => {
        ref.select.setValue(value);
        clearError();
      },
    });
  }, [fieldName, registerField, rest.isMulti, clearError, handleBlur]);

  const customStyles = {
    option: (provided: object) => ({
      ...provided,
      zIndex: 100,
    }),
  };

  return (
    <Container error={!!error}>
      <ReactSelect
        styles={customStyles}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="sel"
        onBlur={handleBlur}
        onFocus={() => {
          clearError();
        }}
        onChange={(event: ValueType<OptionTypeBase, false>) => {
          if (hasChanged) {
            clearError();
            hasChanged(event?.value);
          }
        }}
        {...rest}
      />
    </Container>
  );
};

export default Select;
