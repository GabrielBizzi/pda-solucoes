import styled from 'styled-components';

interface ContainerProps {
  checked: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 40px;
  height: 18px;
  background: ${props => (props.checked ? '#8be0c8' : '#DADADA')};
  transition: background 0.5s;
  border-radius: 7px;
  position: relative;
  margin-top: 12px;
  margin-bottom: 4px;
  margin-left: 12px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: ${props => (props.checked ? 'calc(100% - 12px)' : '-12px')};
    transition: left 0.3s;
    transform-origin: center;
    transform: translate3d(0, -50%, 0);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #17c191;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
