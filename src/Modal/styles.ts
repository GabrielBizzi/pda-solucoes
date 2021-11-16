import { Form } from '@unform/web';
import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled(Form)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background: rgba(14, 14, 14, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .popup,
  .popupDelete {
    max-width: 500px;
    width: 100%;
    height: auto;
    background: ${props => props.theme.colors.background};
    border-radius: 5px;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.title};

    .popupHead {
      h5 {
        padding: 1.5rem;
        font-size: 16px;
        font-weight: 600;
        color: ${props => props.theme.colors.title};
      }

      border-bottom: 1px solid ${props => props.theme.colors.line};
    }

    .popupBody {
      padding: 1.5rem;
    }

    .popupFooter {
      border-top: 1px solid ${props => props.theme.colors.line};

      .buttons {
        padding: 1rem 1.5rem;
        width: 100%;
        display: flex;
        justify-content: end;

        button {
          padding: 6px 16px;
          font-size: 0.875rem;
          min-width: 64px;
          border: 0.5px solid rgba(37, 75, 132, 0.25);
          border-radius: 5px;
          font-weight: 500;
          color: #f9f9f9;
          background: ${props => props.theme.colors.primary};
          transition: background 0.3s;

          & + button {
            margin-left: 16px;
          }

          &.submit {
            background: ${props => props.theme.colors.secundary};
            color: #f9f9f9;
          }
        }
      }
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background: rgba(14, 14, 14, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .popupDelete {
    width: 580px;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-direction: column;

    > p {
      margin-bottom: 1.5rem;
    }

    .buttons {
      margin-left: auto;

      button {
        width: 88px;
        height: 48px;
        border-radius: 4px;
        font-weight: 600;
        color: #989bae;
        background: #e4e6ef;
        transition: background 0.3s;

        &:hover {
          background: ${darken(0.05, '#fff')};
        }

        & + button {
          margin-left: 16px;
        }

        &.submit {
          background: #3699ff;
          color: #fff;

          &:hover {
            background: ${darken(0.05, '#3699ff')};
          }
        }
      }
    }
  }

  .popup {
    max-width: 980px;
    margin: 0 1rem;
    width: 100%;
    background: ${props => props.theme.colors.background};
    border-radius: 7px;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-direction: column;
    height: auto;

    .popupHeader {
      width: 100%;

      border-bottom: 1px solid ${props => props.theme.colors.line};

      display: flex;
      justify-content: space-between;
      align-items: center;

      h5 {
        padding: 1.5rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        color: ${props => props.theme.colors.title};
      }

      .contentRightGrid {
        padding: 1.5rem;
        button {
          padding: 0;
          border-radius: none;
          background: none;
        }
      }
    }

    .informations-line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 0.7rem 0;
      border-bottom: 1px solid ${props => props.theme.colors.line};

      flex-wrap: wrap;

      @media screen and (max-width: 710px) {
        justify-content: flex-start;
      }
    }

    .popUpTable {
      width: 100%;
      height: auto;

      .wrapper {
        width: 100%;

        .wrap {
          overflow-x: clip;
          /* background: ${props => props.theme.colors.background}; */
          .table {
            border-radius: 5px !important;
            box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.07);
            color: ${props => props.theme.colors.textTable} !important;
            border: none;
            transition: color 0.3s !important;
            transition-duration: 0.3s !important;
            border-color: ${props => props.theme.colors.line} !important;
            transition-delay: 0ms !important;
          }
        }
      }

      .MuiBadge-badge {
        color: red;
        margin: 5px -2px;
      }
      .MuiBadge-anchorOriginTopRightRectangle {
        font-size: 20px;
        z-index: initial;
      }

      .labelInput {
        color: ${props => props.theme.colors.title};
        margin: 0 2px 7px 7px;
        font-weight: 400;
        font-size: 13px;
      }

      .MuiBadge-badge {
        color: red;
        margin: 5px -2px;
      }
      .MuiBadge-anchorOriginTopRightRectangle {
        font-size: 20px;
        z-index: initial;
      }

      & .MuiFormControl-marginDense {
        margin: 0;
      }
      & .MuiOutlinedInput-input {
        padding-top: 9px;
        padding-bottom: 9px;
      }
      & .MuiOutlinedInput-root,
      .MuiOutlinedInput-root:focus {
        &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
          border-color: #2684ff;
        }
        border-radius: 5px;
        background: ${props => props.theme.colors.input};
        color: ${props => props.theme.colors.placeholder};
        border: 0.5px solid rgba(37, 75, 132, 0.1);
        outline: none;
      }
      & .MuiInputLabel-root {
        color: ${props => props.theme.colors.placeholder};
      }
      & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-width: 0.5px;
        border-color: #2684ff;
      }

      & .MuiFormControl-marginDense {
        margin: 0;
      }
      & .MuiOutlinedInput-input {
        padding-top: 9px;
        padding-bottom: 9px;
      }
      & .MuiOutlinedInput-root,
      .MuiOutlinedInput-root:focus {
        &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
          border-color: #2684ff;
        }
        border-radius: 5px;
        background: ${props => props.theme.colors.input};
        color: ${props => props.theme.colors.placeholder};
        border: 0.5px solid rgba(37, 75, 132, 0.1);
        outline: none;
      }
      & .MuiInputLabel-root {
        color: ${props => props.theme.colors.placeholder};
      }
      & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-width: 0.5px;
        border-color: #2684ff;
      }
      /* TODO: end modifi */

      .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border: 0.5px solid transparent;
      }
      .MuiOutlinedInput-root:focus .MuiOutlinedInput-notchedOutline {
        box-shadow: 0 0 0 0.5px #2684ff;
      }
      .MuiFormControl-root {
        background: ${props => props.theme.colors.input};
        border-radius: 5px;
      }
      .MuiInput-input {
        padding: 9px;
        border-bottom: none;
        color: ${props => props.theme.colors.placeholder};
      }
      .MuiInput-root {
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.1);
      }
      .MuiInput-root:focus-within {
        box-shadow: 0 0 0 1px #2684ff;
        border-color: transparent;
        .MuiInputBase-input {
        }
      }
      .MuiSvgIcon-root {
        color: ${props => props.theme.colors.placeholder};
        transition: all 0.3s;
      }
      .MuiInput-underline:before {
        content: none;
      }
      .MuiInput-underline:after {
        content: none;
      }

      &
        .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.secundaryButton {
        background: ${props => props.theme.colors.secundary};
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.primaryButton {
        background: ${props => props.theme.colors.primary};
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.secundaryButton {
        background: ${props => props.theme.colors.secundary};
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.primaryButton {
        background: ${props => props.theme.colors.primary};
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }

      .sel--is-disabled {
        &.sel__controle {
          &.sel__control--is-disabled {
            background: ${props => props.theme.colors.disabledInput} !important;
            color: ${props => props.theme.colors.disabledText} !important;
          }
        }
      }

      /* TODO: Control Modal */

      /* .sel__control {
        background: ${props => props.theme.colors.input} !important;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.1) !important;

        .sel__value-container {
          .sel__input {
            color: ${props => props.theme.colors.placeholder};
          }
          .sel__placeholder {
            font-size: 13px;
            color: ${props => props.theme.colors.placeholder};
          }
          .sel__single-value {
            font-size: 13px;
            color: ${props => props.theme.colors.select_text} !important;
          }
        }
      } */

      .sel__menu {
        background: ${props => props.theme.colors.input};
        color: ${props => props.theme.colors.select_text};

        .sel__menu-list {
          font-size: 13px;
          .sel__option {
            color: ${props => props.theme.colors.select_text};
          }
          .sel__option--is-selected {
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.text};
          }

          .sel__option--is-focused {
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.text};
          }
        }
      }
      .labelInput {
        color: ${props => props.theme.colors.title};
        margin-left: 5px;
        margin-bottom: 0.7rem;
        font-weight: 400;
        font-size: 13px;
      }
    }

    .popupFooter {
      display: flex;
      width: 100%;
      border-top: 1px solid ${props => props.theme.colors.line};
      margin-top: 1rem;

      .buttons {
        margin-left: auto;

        button {
          padding: 6px 16px;
          font-size: 0.875rem;
          min-width: 64px;
          border: 0.5px solid rgba(37, 75, 132, 0.25);
          border-radius: 5px;
          font-weight: 500;
          color: #f9f9f9;
          background: ${props => props.theme.colors.primary};
          transition: background 0.3s;

          & + button {
            margin-left: 16px;
          }

          &.submit {
            background: ${props => props.theme.colors.secundary};
            color: #f9f9f9;
          }
        }
      }
    }
  }
`;

export const TableContent = styled.div`
  color: ${props => props.theme.colors.textTable};
  border-radius: 5px;
  padding: 1rem;
`;
