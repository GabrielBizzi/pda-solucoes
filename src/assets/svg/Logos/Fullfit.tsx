import React, { SVGAttributes } from 'react';
// import { ThemeContext } from 'styled-components';
import { Svg } from './styles';

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  as?: string;
}

const Fullfit: React.FC<SvgProps> = ({ as, ...rest }) => {
  // const { colors } = React.useContext(ThemeContext);
  return (
    <Svg {...rest} id={as} key={as}>
      <path d="M43 32.5V56" stroke="black" strokeWidth="3" />
      <path d="M37.5 41H48.5" stroke="black" strokeWidth="3" />
      <path
        d="M17.5 2.5C14 2.33333 7 3.5 7 9.5V25"
        stroke="black"
        strokeWidth="3"
      />
      <path d="M7 14.5H17.5" stroke="black" strokeWidth="3" />
      <path
        d="M21 10C20.3333 14.3353 20.6 23.0059 27 23.0059C29.8333 23.295 35.1 21.0984 33.5 10"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M39 2V18.5C39 20.6667 40.3 25 45.5 25"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M48 2V19.5C48.5 21.3333 50.5 25 54.5 25"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M13.5 56V37.5C14.3333 35.5 17.5 31.8 23.5 33"
        stroke="black"
        strokeWidth="3"
      />
      <path d="M13.5 45H23.5" stroke="black" strokeWidth="3" />
      <path d="M31 41V56" stroke="black" strokeWidth="3" />
      <ellipse cx="31" cy="34.5" rx="2" ry="1.5" fill="black" />
      <path
        d="M1.5 68.5C8.83333 64.6667 30.7 59.3 59.5 68.5"
        stroke="black"
        strokeWidth="3"
      />
    </Svg>
  );
};

export default Fullfit;
