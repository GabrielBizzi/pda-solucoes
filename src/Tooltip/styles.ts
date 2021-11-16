import styled from 'styled-components';

interface FontSizeProps {
  fontSize?: number;
  color?: string;
}

interface TextStyleProps {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  marginTop?: number;
}

interface PositionTooltipProps {
  position: string;
}

export const TextTooltip = styled.p<FontSizeProps>`
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color || '#b5b5c3'} !important;
`;

export const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Tooltip = styled.span<PositionTooltipProps>`
  width: 32px;
  height: 32px;

  border-radius: 8px;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  margin-left: 0.5rem;

  .contentHover {
    min-width: 200px;
    width: 100%;

    display: none;

    position: absolute;
    // bottom: 40px;

    ${props =>
      (props.position === 'top' && 'bottom: 40px !important;') ||
      (props.position === 'bottom' && 'top: 40px !important;') ||
      (props.position === 'left' && 'left: -210px !important;') ||
      (props.position === 'right' && 'left: 43px !important;')}

    background: #ffffff;
    box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.1);

    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #a3a3a3;
    text-align: center;

    transition: all 0.3s;

    padding: 8px 16px;
    border-radius: 4px;

    z-index: 9999;

    &:after {
      content: '';

      position: absolute;

      top: ${props =>
        (props.position === 'top' && '90%') ||
        (props.position === 'bottom' && '-17px') ||
        (props.position === 'left' && '50%') ||
        (props.position === 'right' && '50%')};

      left: ${props =>
        (props.position === 'top' && '50%') ||
        (props.position === 'bottom' && '50%') ||
        (props.position === 'right' && '-17px')};

      right: ${props => props.position === 'left' && '-17px'};

      transform: translateY(
        ${props =>
          (props.position === 'left' && '-50%') ||
          (props.position === 'right' && '-50%')}
      );
      transform: translateX(
        ${props =>
          (props.position === 'top' && '-50%') ||
          (props.position === 'bottom' && '-50%')}
      );

      border-color: ${props =>
        (props.position === 'top' &&
          '#ffffff transparent transparent transparent') ||
        (props.position === 'bottom' &&
          'transparent transparent #ffffff transparent') ||
        (props.position === 'left' &&
          'transparent transparent transparent #ffffff') ||
        (props.position === 'right' &&
          'transparent #ffffff transparent transparent')};

      border-width: 10px;
      border-style: solid;

      display: none;
      transition: 0.3s;
    }
  }

  &:hover {
    background: #f2f2f2;

    .contentHover {
      display: block;

      &:after {
        display: block;
      }
    }
  }
`;

export const Text = styled.p<TextStyleProps>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: ${props => props.fontSize || '13'}px;
  line-height: ${props => props.lineHeight || '19'}px;
  color: ${props => props.color || '#b5b5c3'} !important;
  margin-top: ${props => props.marginTop || '0'}px;
`;
