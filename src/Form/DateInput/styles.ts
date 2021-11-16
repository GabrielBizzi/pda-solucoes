import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
  success: boolean;
}

export const Container = styled.div<ContainerProps>`
  .input-wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid #e5e5e5;

    ${props =>
      props.error &&
      css`
        border: 1px solid ${!props.error ? '#e5e5e5' : '#e12325'};
      `}
    ${props =>
      props.success &&
      css`
        border: 1px solid ${!props.success ? '#e5e5e5' : '#1BC5BD'};
      `}
    border-radius: 4px;

    &:hover {
      transition: border 0.5s;
      border: 1px solid #2b2b2b;
    }

    input {
      flex: 1;
      height: 100%;
      line-height: 64px;
      background: transparent;
      padding-left: 16px;
      font-size: 13px;

      &::placeholder {
        font-size: 13px;
        line-height: 45px;
        font-weight: 400;
        color: #b5b5c3;
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
