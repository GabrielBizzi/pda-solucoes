import styled from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 0.5px solid rgba(37, 75, 132, 0.25);
  background: ${props =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.background};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
