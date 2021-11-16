import { IconButton } from '@material-ui/core';
import React from 'react';
import { ThemeContext } from 'styled-components';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

interface Props {
  toggleTheme(): void;
  loged?: boolean;
  children?: React.ReactNode;
}

export const ThemeToggle: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = React.useContext(ThemeContext);
  return (
    <>
      <IconButton
        onClick={toggleTheme}
        aria-label="theme"
        className="switchTheme"
      >
        <Brightness4OutlinedIcon
          color={title === 'light' ? 'disabled' : 'primary'}
        />
      </IconButton>
    </>
  );
};
