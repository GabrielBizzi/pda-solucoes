import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 54px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 1rem 24px;
  border-top: 1px solid ${props => props.theme.colors.line};
  z-index: 99;

  .colorDescription {
    color: ${props => props.theme.colors.description} !important;
    fill: ${props => props.theme.colors.description} !important;
    stroke: ${props => props.theme.colors.description} !important;
    font-size: 12px !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 18px;
  }
`;
