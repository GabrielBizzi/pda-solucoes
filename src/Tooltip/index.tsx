import React from 'react';
import { Text, TextTooltip, Tooltip, TooltipContainer } from './styles';

interface TooltipProps {
  content: string;
  size?: number;
  position: string;
  characters: number;
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  marginTop?: number;
}

const UseTooltip: React.FC<TooltipProps> = ({
  content,
  size,
  position,
  characters,
  fontSize,
  color,
  lineHeight,
  marginTop,
}) => {
  return (
    <>
      {content.length > characters && (
        <TooltipContainer>
          <TextTooltip color={color} fontSize={size}>
            {content}
          </TextTooltip>
          <Tooltip position={position}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
              style={{ fill: '#dddddd' }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: 'normal' }}
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#DDDDDD">
                  <path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM86,121.83333v0c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667v-28.66667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667v0c3.956,0 7.16667,3.21067 7.16667,7.16667v28.66667c0,3.956 -3.21067,7.16667 -7.16667,7.16667zM89.58333,64.5h-7.16667c-1.978,0 -3.58333,-1.60533 -3.58333,-3.58333v-7.16667c0,-1.978 1.60533,-3.58333 3.58333,-3.58333h7.16667c1.978,0 3.58333,1.60533 3.58333,3.58333v7.16667c0,1.978 -1.60533,3.58333 -3.58333,3.58333z" />
                </g>
              </g>
            </svg>
            <div className="contentHover">{content}</div>
          </Tooltip>
        </TooltipContainer>
      )}
      {content.length < characters && (
        <Text
          marginTop={marginTop}
          lineHeight={lineHeight}
          fontSize={fontSize}
          color={color}
        >
          {content}
        </Text>
      )}
    </>
  );
};

export default UseTooltip;
