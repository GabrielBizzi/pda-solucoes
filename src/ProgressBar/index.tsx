import React, { CSSProperties, memo } from 'react';

import {
  Container,
  ContainerNaN,
  ContainerRounded,
  ContainerHalf,
} from './styles';

interface ProgressBarProps {
  value: number;
  breakPoints?: number[];
  breakPointColors?: string[];
  type: 'linear' | 'rounded' | 'half' | 'number';
  label?: string;
  hiddenLabel?: boolean;
  border?: 'rounded' | 'square';
  animated?: boolean;
  positionTextHorizontaly?: 'left' | 'center' | 'right';
  positionTextVerticaly?: 'top' | 'bottom';
  style?: CSSProperties;
  fontSize?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  breakPointColors,
  breakPoints,
  type,
  label,
  hiddenLabel,
  border,
  animated,
  positionTextHorizontaly,
  positionTextVerticaly,
  style,
  fontSize,
}) => {
  return (
    <>
      {type === 'linear' && (
        <Container
          breakPoints={breakPoints}
          breakPointColors={breakPointColors}
          progress={value}
          style={style}
          animated={animated}
          border={border}
          positionTextVerticaly={positionTextVerticaly}
          positionTextHorizontaly={positionTextHorizontaly}
        >
          <div className="progress-value">
            <span>{`${Number(value).toFixed(0)}%`}</span>
            {!hiddenLabel && (
              <>
                {label ? (
                  <span>
                    {'  '}
                    {label}
                  </span>
                ) : (
                  <span> Progresso</span>
                )}
              </>
            )}
          </div>
          <div className="progress-bar">
            <div className="progress-bar-value" />
          </div>
        </Container>
      )}
      {type === 'number' && (
        <ContainerNaN fontSize={fontSize}>
          {`${Number(value).toFixed(0)}%`}
        </ContainerNaN>
      )}
      {type === 'rounded' && (
        <ContainerRounded animated={animated} progress={value}>
          <div className="progress-bar">
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <h2>{`${Number(value).toFixed(0)}%`}</h2>
          </div>
          <div className="progress-value">
            {!hiddenLabel && (
              <>
                {label ? (
                  <span>
                    {'  '}
                    {label}
                  </span>
                ) : (
                  <span> Progresso</span>
                )}
              </>
            )}
          </div>
        </ContainerRounded>
      )}
      {type === 'half' && (
        <ContainerHalf progress={value}>
          <div className="progress-bar">
            <svg>
              <g fill="none" stroke="#ddd">
                <circle cx="125" cy="125" r="100" strokeWidth="10" />
                <circle cx="125" cy="125" r="100" strokeWidth="10" />
              </g>
            </svg>
            <div className="progress-value">
              <h2>{`${Number(value).toFixed(0)}%`}</h2>

              {!hiddenLabel && (
                <>
                  {label ? (
                    <span>
                      {'  '}
                      {label}
                    </span>
                  ) : (
                    <span> Progresso</span>
                  )}
                </>
              )}
            </div>
          </div>
        </ContainerHalf>
      )}
    </>
  );
};

export default memo(ProgressBar);
