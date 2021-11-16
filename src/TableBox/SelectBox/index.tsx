import React, { useCallback, useState } from 'react';
import { BiCheck } from 'react-icons/bi';

import { Container } from './styles';

interface TableSelectBoxProps {
  disabled?: boolean;
  select?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TableSelectBox: React.FC<TableSelectBoxProps> = ({
  disabled = false,
  select,
  onClick,
}) => {
  const [selected, setSelected] = useState(
    select !== undefined ? select : false
  );

  const handleSelected = useCallback(
    event => {
      if (disabled) {
        return;
      }
      setSelected(oldState => !oldState);

      if (onClick) onClick(event);
    },
    [onClick, disabled]
  );

  return (
    <Container onClick={handleSelected} selected={selected}>
      {selected && <BiCheck size={16} color="fff" />}
    </Container>
  );
};

export default TableSelectBox;
