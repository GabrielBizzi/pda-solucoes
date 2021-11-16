import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
  success: boolean;
}

export const Container = styled.div<ContainerProps>`
  .input-wrapper {
    width: 100%;
    height: 38px;
    display: flex;

    border-radius: 5px;

    input {
      border: 1px solid ${props => props.theme.colors.borderInput};
      flex: 1;
      height: 100%;
      line-height: 64px;
      border-radius: 5px;
      background: ${props => props.theme.colors.input};
      padding-left: 16px;
      font-size: 13px;
      overflow: auto;
      color: ${props => props.theme.colors.placeholderSelected};
      ${props =>
        props.error &&
        css`
          border-color: ${!props.error ? '#2684ff' : '#e12325'};
          box-shadow: 0 0 0 0.5px ${!props.error ? '#2684ff' : '#e12325'};
        `}

      &:focus {
        box-shadow: 0 0 0 0.5px #2684ff;
        border: 0.5px solid #2684ff;
      }

      &::placeholder {
        font-size: 13px;
        line-height: 45px;
        font-weight: 400;
        color: ${props => props.theme.colors.placeholder};
      }
    }

    .icon {
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
      }
    }
  }

  .error {
    text-align: left;
    padding: 4px;

    p {
      font-size: 13px;
      color: #e12325;
    }
  }
`;
