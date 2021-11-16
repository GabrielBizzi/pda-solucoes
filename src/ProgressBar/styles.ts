import styled, { css } from 'styled-components';

interface ContainerProps {
  progress: number;
  breakPointColors?: string[];
  breakPoints?: number[];
  positionTextHorizontaly?: 'left' | 'center' | 'right';
  positionTextVerticaly?: 'top' | 'bottom';
  border?: 'rounded' | 'square';
  animated?: boolean;
}

interface ContainerNaNProps {
  fontSize?: number;
}

export const ContainerNaN = styled.div<ContainerNaNProps>`
  font-size: ${props =>
    (props.fontSize && `${props.fontSize}px`) || (!props.fontSize && '10px')};
  font-weight: 400;
  line-height: 19px;
  color: #b5b5c3;
`;

export const ContainerHalf = styled.div<ContainerProps>`
  position: relative;
  text-align: center;
  width: 100%;

  .progress-bar {
    position: relative;

    svg {
      overflow: hidden;
      width: 250px;
      height: 125px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      circle {
        &:nth-child(1) {
          transition: stroke 0.5s ease-in-out;
          stroke: ${(props: ContainerProps) => {
            const breaks = props.breakPoints || [0, 1, 30, 70, 90];
            const colors = props.breakPointColors || [
              'rgba(216, 216, 216, 1)',
              'rgba(253, 244, 33, 1)',
              'rgba(248, 205, 53, 1)',
              'rgba(55, 239, 39, 0.3)',
              'rgba(55, 239, 39, 1)',
            ];
            let colorIndex = 0;
            if (breaks.length > colors.length) {
              throw new Error(
                'breakPoints array should not be greater than breakPointColors array'
              );
            }
            breaks.forEach((item, index) => {
              if (props.progress >= item) colorIndex = index;
            });
            return colors[colorIndex];
          }};
        }

        &:nth-child(2) {
          stroke-dasharray: 315;
          transition: stroke-dashoffset 0.5s ease-in-out;
          stroke-dashoffset: calc(
            315 - (${props => props.progress} * 315) / 100
          );
        }
      }
    }
    .progress-value {
      letter-spacing: 1px;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -70%);
      position: absolute;

      h2 {
        font-size: 20px;
        color: #999;
        font-weight: 700;
      }

      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
`;

export const ContainerRounded = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  .progress-bar {
    width: 150px;
    height: 150px;
    position: relative;

    svg {
      width: 100%;
      height: 100%;
      position: relative;
      circle {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 10;
        stroke: #000;
        transform: translate(5px, 5px);
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
        stroke-linecap: round;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #f3f3f3;
        }

        &:nth-child(2) {
          ${props =>
            props.animated
              ? css`
                  transition: stroke-dashoffset 0.5s ease-in-out;
                  stroke-dashoffset: calc(
                    440 - (440 * ${props.progress}) / 100
                  );
                `
              : css`
                  stroke-dashoffset: calc(
                    440 - (440 * ${props.progress}) / 100
                  );
                `}
          stroke: ${(props: ContainerProps) => {
            const breaks = props.breakPoints || [0, 1, 30, 70, 90];
            const colors = props.breakPointColors || [
              'rgba(216, 216, 216, 1)',
              'rgba(253, 244, 33, 1)',
              'rgba(248, 205, 53, 1)',
              'rgba(55, 239, 39, 0.3)',
              'rgba(55, 239, 39, 1)',
            ];
            let colorIndex = 0;
            if (breaks.length > colors.length) {
              throw new Error(
                'breakPoints array should not be greater than breakPointColors array'
              );
            }
            breaks.forEach((item, index) => {
              if (props.progress >= item) colorIndex = index;
            });
            return colors[colorIndex];
          }};
        }
      }
    }

    h2 {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      text-align: center;
      color: #111;
    }
  }

  .progress-value {
    padding: 10px 0 0;
    color: #999;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props =>
    (props.positionTextVerticaly &&
      props.positionTextVerticaly === 'top' &&
      'column') ||
    (props.positionTextVerticaly &&
      props.positionTextVerticaly === 'bottom' &&
      'column-reverse') ||
    (!props.positionTextVerticaly && 'column')};
  .progress-value {
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    color: #b5b5c3;

    text-align: ${props =>
      (props.positionTextHorizontaly &&
        props.positionTextHorizontaly === 'left' &&
        'left') ||
      (props.positionTextHorizontaly &&
        props.positionTextHorizontaly === 'center' &&
        'center') ||
      (props.positionTextHorizontaly &&
        props.positionTextHorizontaly === 'right' &&
        'right') ||
      (!props.positionTextHorizontaly && 'left')};
  }

  .progress-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    line-height: 0;
    font-size: 0.75rem;
    background-color: #ebedf3;
    border-radius: ${props =>
      (props.border && props.border === 'square' && '0') ||
      (props.border && props.border === 'rounded' && '7px') ||
      (!props.border && '2px')};
    -webkit-box-shadow: none;
    box-shadow: none;
    height: 0.5rem;

    .progress-bar-value {
      background-color: ${(props: ContainerProps) => {
        const breaks = props.breakPoints || [0, 1, 30, 70, 90];
        const colors = props.breakPointColors || [
          'rgba(216, 216, 216, 1)',
          'rgba(253, 244, 33, 1)',
          'rgba(248, 205, 53, 1)',
          'rgba(55, 239, 39, 0.3)',
          'rgba(55, 239, 39, 1)',
        ];
        let colorIndex = 0;
        if (breaks.length > colors.length) {
          throw new Error(
            'breakPoints array should not be greater than breakPointColors array'
          );
        }
        breaks.forEach((item, index) => {
          if (props.progress >= item) colorIndex = index;
        });
        return colors[colorIndex];
      }};
      width: ${props => `${props.progress}%`};
      ${props =>
        props.animated
          ? css`
              animation: progress 1.5s ease-in-out both;
            `
          : null}
    }
  }

  ${props =>
    props.animated
      ? css`
          @keyframes progress {
            0% {
              width: 0%;
            }

            80% {
              width: ${`${props.progress + 2}%`};
            }

            100% {
              width: ${`${props.progress}%`};
            }
          }
        `
      : null}
`;
