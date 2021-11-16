import styled from 'styled-components';

interface SelectProps {
  error: boolean;
}

export const Container = styled.div<SelectProps>`
  width: 100%;

  .sel__control {
    transition: none;
    border-radius: 5px;
    border: 0.5px solid
      ${props => (!props.error ? props.theme.colors.borderInput : '#e12325')} !important;

    box-shadow: ${props => (!props.error ? '' : '0 0 0 0.5px #e12325')};
    background: ${props => props.theme.colors.input};

    .sel__value-container {
      .sel__placeholder {
        font-size: 13px;
        color: ${props => props.theme.colors.placeholder};
      }
      .sel__single-value {
        font-size: 13px;
        color: ${props => props.theme.colors.placeholderSelected} !important;
      }
    }
  }
`;
