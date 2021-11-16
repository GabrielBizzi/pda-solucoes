/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import { ThemeContext } from 'styled-components';

// import SearchIcon from '../../assets/svg/search.svg';
// import IconError from '../../assets/images/input-error.png';
// import IconSuccess from '../../assets/images/input-success.png';

import {
  Badge,
  Button,
  Divider,
  Grid,
  GridSize,
  Grow,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Container, Title, Footer } from './styles';

import { Input, SwitchButton, Select } from '../Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelPlacement?: string;
  width?: number;
  label?: string;
  type?: string;
  options?: object[];
  messageErrorOnBlur?: string;
  iconError?: string;
  sm?: boolean | GridSize;
  xl?: boolean | GridSize;
  lg?: boolean | GridSize;
  xs?: boolean | GridSize;
  md?: boolean | GridSize;
  isRequired?: boolean;
}

interface HiddenInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelPlacement?: string;
  width?: number;
  label?: string;
  type?: string;
  options?: object[];
  required?: boolean;
  messageErrorOnBlur?: string;
  iconError?: string;
  sm?: boolean | GridSize;
  xl?: boolean | GridSize;
  lg?: boolean | GridSize;
  xs?: boolean | GridSize;
  md?: boolean | GridSize;
  isRequired?: boolean;
}

interface SearchBoxProps {
  inputs: InputProps[];
  hiddenInputs?: HiddenInputProps[];
  buttons?: boolean;
  advancedSearch?: boolean;
  importButton?(): void;
  createButton?(): void;
  searchBoxRef?: React.RefObject<FormHandles>;
  titleButtonOnCreate?: string;
  handleSubmit?(data: object): void;
  handleSubmitWithCancel?(data: object): void;
  submitButton?: boolean;
  handleCreate?(data: object): void;
  hiddenChildren?(): void;
  cancelSubmit?: boolean;
  children?: React.ReactNode;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  inputs,
  hiddenInputs,
  advancedSearch = false,
  buttons = true,
  importButton,
  searchBoxRef,
  submitButton = false,
  handleSubmit,
  handleSubmitWithCancel,
  cancelSubmit = false,
  createButton,
  titleButtonOnCreate,
  children,
  hiddenChildren,
}) => {
  const { colors } = React.useContext(ThemeContext);

  const ownRef = useRef<FormHandles>(null);
  const formRef = searchBoxRef || ownRef;
  const [visible, setVisible] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (filterRef?.current?.contains(e.target)) {
      return;
    }

    setVisible(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputError = useCallback(
    ({ inputName, message }) => {
      if (formRef) {
        formRef.current?.setFieldError(inputName, message);
      }
    },
    [formRef]
  );

  const clearInputs = useCallback(
    data => {
      if (handleSubmitWithCancel) {
        handleSubmitWithCancel(data);
        inputs.map(input => formRef.current?.setFieldValue(input.name, ''));
        hiddenInputs?.map(input =>
          formRef.current?.setFieldValue(input.name, '')
        );
      } else {
        inputs.map(input => formRef.current?.setFieldValue(input.name, ''));
        hiddenInputs?.map(input =>
          formRef.current?.setFieldValue(input.name, '')
        );
      }
    },
    [inputs, formRef, hiddenInputs, handleSubmitWithCancel]
  );

  const onSubmit = useCallback(
    data => {
      if (handleSubmit) {
        handleSubmit(data);
      }
    },
    [handleSubmit]
  );

  const openModal = useCallback(() => {
    if (createButton) {
      createButton();
    }
  }, [createButton]);

  const openModalImport = useCallback(() => {
    if (importButton) {
      importButton();
    }
  }, [importButton]);

  // const closeClick = () => {
  //   const el = document.getElementById('filterBox');
  //   if (el?.classList.contains('active')) {
  //     el.classList.remove('active');
  //   }
  // };

  return (
    <Container ref={formRef} onSubmit={onSubmit}>
      <Title padding={advancedSearch ? '0.5rem' : '1.3rem'}>
        <h1>Pesquisar</h1>
        <div className="containerFilter">
          {buttons && createButton && (
            <Button
              className="secundaryButton filter-Btn-Create"
              variant="contained"
              style={{ whiteSpace: 'nowrap' }}
              onClick={openModal}
            >
              {!!titleButtonOnCreate && titleButtonOnCreate}
            </Button>
          )}
          {advancedSearch && (
            <div className="filter-row" ref={filterRef}>
              <Tooltip title="Busca avançada" className="filter-Btn-Create">
                <IconButton
                  className="primaryButton filter filter-id filterBtn"
                  style={{ padding: '8px' }}
                  onClick={() => setVisible(!visible)}
                  aria-label="Filtro"
                >
                  <FilterListRoundedIcon
                    className="filter-id"
                    color="inherit"
                  />
                </IconButton>
              </Tooltip>

              <Grow in={visible}>
                <div id="filterBox" className="filter-box">
                  <div className="filter-header">
                    <h1>Pesquisa Avançada</h1>
                  </div>
                  <Grid
                    style={{ padding: '1.5rem 1rem', alignItems: 'self-end' }}
                    container
                    spacing={3}
                    className="filter-content"
                  >
                    {hiddenInputs?.map(
                      ({
                        name,
                        label,
                        type = 'text',
                        options,
                        placeholder,
                        sm,
                        xl,
                        lg,
                        xs,
                        md,
                        isRequired,
                        ...rest
                      }) => (
                        <Grid
                          item
                          xl={xl}
                          lg={lg}
                          xs={xs}
                          md={md}
                          sm={sm}
                          key={name.toString()}
                        >
                          {!!label && isRequired ? (
                            <Badge badgeContent="*">
                              <p className="labelInput">{label}</p>
                            </Badge>
                          ) : (
                            <p className="labelInput">{label}</p>
                          )}
                          {type === 'select' && (
                            <Select
                              name={name}
                              options={options}
                              placeholder={placeholder}
                              handleInputError={handleInputError}
                            />
                          )}
                          {type === 'switch' && (
                            <SwitchButton name={name} {...rest} />
                          )}
                          {type === 'text' && (
                            <Input
                              id={name}
                              name={name}
                              type={type || 'text'}
                              placeholder={placeholder}
                              handleInputError={handleInputError}
                              // iconError={IconError}
                              // iconSuccess={IconSuccess}
                              {...rest}
                            />
                          )}
                        </Grid>
                      )
                    )}
                    {hiddenChildren && hiddenChildren()}
                  </Grid>
                </div>
              </Grow>
            </div>
          )}
        </div>
      </Title>
      <Divider style={{ background: colors.line }} />
      <Grid
        style={{ padding: '1.5rem 1rem', alignItems: 'self-end' }}
        container
        spacing={3}
      >
        {inputs.map(
          ({
            name,
            label,
            type = 'text',
            options,
            placeholder,
            sm,
            xl,
            lg,
            xs,
            md,
            isRequired,
            ...rest
          }) => (
            <Grid
              item
              xl={xl}
              lg={lg}
              xs={xs}
              md={md}
              sm={sm}
              key={name.toString()}
            >
              {!!label && isRequired ? (
                <Badge badgeContent="*">
                  <p className="labelInput">{label}</p>
                </Badge>
              ) : (
                <p className="labelInput">{label}</p>
              )}
              {type === 'select' && (
                <Select
                  name={name}
                  options={options}
                  placeholder={placeholder}
                  handleInputError={handleInputError}
                />
              )}
              {type === 'switch' && <SwitchButton name={name} {...rest} />}
              {type === 'text' && (
                <Input
                  id={name}
                  name={name}
                  type={type || 'text'}
                  placeholder={placeholder}
                  handleInputError={handleInputError}
                  // iconError={IconError}
                  // iconSuccess={IconSuccess}
                  {...rest}
                />
              )}
            </Grid>
          )
        )}
        {children}
      </Grid>
      {buttons && (
        <>
          <Divider style={{ background: colors.line }} />
          <Footer>
            {/* <Button
              className="primaryButton buttonFooter"
              onClick={clearInputs}
              type="button"
              variant="contained"
            >
              Limpar
            </Button> */}
            {importButton && (
              <Button
                type="button"
                variant="contained"
                style={{ background: colors.default }}
                className="secundaryButton buttonFooter"
                onClick={openModalImport}
              >
                importar
              </Button>
            )}

            <Button
              className="primaryButton buttonFooter"
              type="submit"
              variant="contained"
              style={
                submitButton
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }
            >
              Pesquisar
            </Button>
            {cancelSubmit && (
              <Button
                className="primaryButton buttonFooter"
                onClick={clearInputs}
                type="button"
                variant="contained"
              >
                Cancelar
              </Button>
            )}
          </Footer>
        </>
      )}
    </Container>
  );
};

export default SearchBox;
