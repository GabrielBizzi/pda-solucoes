import styled from 'styled-components';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  .input {
    width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid ${props => (!props.error ? '#60606050' : '#e12325')};
    box-shadow: ${props =>
      !props.error ? '#' : '0px 0px 5px rgba(255,0,0,0.35)'};
    border-radius: 9px;
    transition: all 0.25s ease-in-out;
    background: ${props => props.theme.colors.input};

    &:hover,
    &:focus-within {
      border: 1px solid #60606050;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }

    input {
      flex: 1;
      height: 100%;
      line-height: 64px;
      padding-left: 16px;
      border-radius: 9px;
      font-size: 12px;
      background: ${props => props.theme.colors.input};
      color: ${props => props.theme.colors.placeholder};

      &::placeholder {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 5%;
        color: ${props => props.theme.colors.placeholder};
        opacity: 0.75;
      }
    }

    .icon {
      width: 70px;
      height: 100%;
      padding: 20px 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20px;
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
