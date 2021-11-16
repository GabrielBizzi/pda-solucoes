import React, { InputHTMLAttributes } from 'react';
import { Badge, Fade, Grid, GridSize } from '@material-ui/core';
import { FormHandles } from '@unform/core';
import { Container, Detail, TableContent } from './styles';
import { Input, Select } from '../Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: number;
  label?: string;
  typeInput?: string;
  options?: object[];
  messageErrorOnBlur?: string;
  iconError?: string;
  isRequired?: boolean;
  sm?: boolean | GridSize;
  xl?: boolean | GridSize;
  lg?: boolean | GridSize;
  xs?: boolean | GridSize;
  md?: boolean | GridSize;
}

interface PopUpWindowProps {
  title?: string;
  type: string;
  isTable?: boolean;
  open?: boolean;
  tableContent?(): React.ReactNode;
  modalRefObject?: React.RefObject<FormHandles>;
  interface?: React.ReactPropTypes;
  inputs?: InputProps[];
  handleCreate?(data: object): void;
  handleEdit?(data: object): void;
  handleSubmit?(data: object): void;
  handleCancel?(): void;
}

const Modal: React.FC<PopUpWindowProps> = ({
  title,
  open,
  handleSubmit,
  handleCancel,
  modalRefObject,
  handleCreate,
  handleEdit,
  children,
  inputs,
  type,
  isTable = false,
  tableContent,
}) => {
  const handleClickSubmit = React.useCallback(
    data => {
      if (handleSubmit) {
        handleSubmit(data);
      }
    },
    [handleSubmit]
  );

  const onCreate = React.useCallback(
    data => {
      if (handleCreate) {
        handleCreate(data);
      }
    },
    [handleCreate]
  );

  const onEdit = React.useCallback(
    data => {
      if (handleEdit) {
        handleEdit(data);
      }
    },
    [handleEdit]
  );
  const ownRef = React.useRef<FormHandles>(null);
  const formRef = modalRefObject || ownRef;

  const handleClickCancel = React.useCallback(() => {
    if (handleCancel) {
      handleCancel();
    }
  }, [handleCancel]);

  return (
    <>
      <Fade unmountOnExit mountOnEnter timeout={400} in={open}>
        <Container ref={formRef} onSubmit={handleClickSubmit}>
          <div>
            {type === 'delete' && (
              <div className="popupDelete">
                <div className="popupHead">{!!title && <h5>{title}</h5>}</div>
                <div className="popupBody">
                  <p>{children}</p>
                </div>
                <div className="popupFooter">
                  <div className="buttons">
                    <button
                      type="button"
                      className="cancel"
                      onClick={handleClickCancel}
                    >
                      Fechar
                    </button>
                    <button
                      type="button"
                      className="submit"
                      onClick={handleClickSubmit}
                    >
                      Apagar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {type === 'detail' && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: 'rgba(204, 204, 204)' }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    {isTable && (
                      <div className="wrapper" style={{ display: 'flex' }}>
                        <div className="wrap" style={{ flexGrow: 1 }}>
                          <TableContent>
                            {tableContent && tableContent()}
                          </TableContent>
                        </div>
                      </div>
                    )}
                    {children}
                  </div>

                  <div className="popupFooter">
                    <div className="buttons">
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
            {type === 'create' && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: 'rgba(204, 204, 204)' }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    <Grid
                      container
                      spacing={3}
                      style={{ padding: '1.5rem 1rem', alignItems: 'self-end' }}
                    >
                      {inputs?.map(
                        ({
                          name,
                          label,
                          typeInput = 'text',
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
                            {typeInput === 'select' && (
                              <Select
                                name={name}
                                options={options}
                                placeholder={placeholder}
                              />
                            )}
                            {typeInput === 'text' && (
                              <Input
                                id={name}
                                name={name}
                                type={type || 'text'}
                                placeholder={placeholder}
                                // handleInputError={handleInputError}
                                // iconError={IconError}
                                // iconSuccess={IconSuccess}
                                {...rest}
                              />
                            )}
                          </Grid>
                        )
                      )}
                    </Grid>
                  </div>
                  <div className="popupFooter">
                    <div className="buttons">
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                      <button
                        type="submit"
                        className="submit"
                        onClick={onCreate}
                      >
                        Criar
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
            {type === 'edit' && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: 'rgba(204, 204, 204)' }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    <Grid
                      container
                      spacing={3}
                      style={{ padding: '1.5rem 1rem', alignItems: 'self-end' }}
                    >
                      {inputs?.map(
                        ({
                          name,
                          label,
                          typeInput = 'text',
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
                            {typeInput === 'select' && (
                              <Select
                                name={name}
                                options={options}
                                placeholder={placeholder}
                              />
                            )}
                            {typeInput === 'text' && (
                              <Input
                                id={name}
                                name={name}
                                type={type || 'text'}
                                placeholder={placeholder}
                                // handleInputError={handleInputError}
                                // iconError={IconError}
                                // iconSuccess={IconSuccess}
                                {...rest}
                              />
                            )}
                          </Grid>
                        )
                      )}
                    </Grid>
                  </div>

                  <div className="popupFooter">
                    <div className="buttons">
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                      <button type="submit" className="submit" onClick={onEdit}>
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
          </div>
        </Container>
      </Fade>
    </>
  );
};

export default Modal;
