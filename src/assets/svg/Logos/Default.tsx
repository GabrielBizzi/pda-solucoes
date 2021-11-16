import React, { SVGAttributes } from 'react';
// import { ThemeContext } from 'styled-components';
import { Svg } from './styles';
import DefaultImg from '../../images/logo.png';

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  as?: string;
}

const Default: React.FC<SvgProps> = ({ as, ...rest }) => {
  // const { colors } = React.useContext(ThemeContext);
  return <img className="defaultImg" src={DefaultImg} alt={as} />;
};

export default Default;
