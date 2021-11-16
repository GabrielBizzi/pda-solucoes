import React from 'react';
import { Tag } from './styles';

interface StatusProps {
  status: string;
}

const TagStatus: React.FC<StatusProps> = ({ status }) => {
  return (
    <Tag status={status} width={90} fontSize={7} paddingY={2} paddingX={6}>
      {status}
    </Tag>
  );
};

export default TagStatus;
