import React, { SVGAttributes } from 'react';
import { ThemeContext } from 'styled-components';
import { Svg } from './styles';

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  as?: string;
}

const Renner: React.FC<SvgProps> = ({ as, ...rest }) => {
  const { colors } = React.useContext(ThemeContext);
  return (
    <Svg {...rest} id={as} key={as}>
      <ellipse cx="34" cy="33.5" rx="34" ry="33.5" fill={`${colors.logo}`} />
      <path
        d="M35 23.4999C40 3.49998 20.5 14.4999 14 23.4999C13.2 25.4999 14.6667 25.6666 15.5 25.5L19.5 21.5C23.1 18.3 23 20.8333 22.5 22.5L12 52C12 52.8 12.3333 53 12.5 53H24C28 40.6 37.3333 26.5 41.5 21C43.5 19 44.6667 20.1667 45 21C45.4 25.4 48.8333 26.1667 50.5 26C53.7 26.4 56.1667 21.8333 57 19.5C57 13.1 52.6667 11.8333 50.5 12C47.3 12 43.8333 13.9999 42.5 14.9999C40.1 16.1999 36.5 21.1666 35 23.4999Z"
        fill="white"
      />
    </Svg>
  );
};

export default Renner;
