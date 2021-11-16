import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  a {
    color: #000;

    margin-right: 0.4rem;

    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;

    line-height: 18px;

    &:visited {
      color: #000;
    }
  }

  svg {
    transition: all 0.3s;

    opacity: 0;

    margin-left: -10px;
    color: transparent;

    path {
      fill: #fff;
      color: #000;
    }
  }

  &:hover {
    svg {
      opacity: 1;

      margin-left: initial;
    }
  }
`;
