import { Grow } from '@material-ui/core';
import React from 'react';

import { WindowContainer } from './styles';

interface PopUpWindowProps {
  title?: string;
  handleSubmit?(): void;
  handleCancel?(): void;
}

const PopUpWindow: React.FC<PopUpWindowProps> = ({
  title,
  handleSubmit,
  handleCancel,
  children,
}) => {
  const handleClickSubmit = React.useCallback(() => {
    if (handleSubmit) {
      handleSubmit();
    }
  }, [handleSubmit]);

  const handleClickCancel = React.useCallback(() => {
    if (handleCancel) {
      setAnimate(prev => prev);
      handleCancel();
    }
  }, [handleCancel]);

  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(prev => !prev);
  }, [setAnimate]);

  return (
    <WindowContainer>
      <Grow in={animate} timeout={500}>
        <div className="popupDelete">
          <div className="popupHead">{!!title && <h5>{title}</h5>}</div>
          <div className="popupBody">
            <p>{children}</p>
          </div>
          <div className="popupFooter">
            <div className="buttons">
              <button
                type="button"
                className="cancel"
                onClick={handleClickCancel}
              >
                Fechar
              </button>
              <button
                type="button"
                className="submit"
                onClick={handleClickSubmit}
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </Grow>
    </WindowContainer>
  );
};

export default PopUpWindow;
