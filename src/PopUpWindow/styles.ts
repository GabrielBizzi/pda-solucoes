import styled from 'styled-components';

export const WindowContainer = styled.div`
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
