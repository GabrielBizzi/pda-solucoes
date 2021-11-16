import styled from 'styled-components';

interface TagStatusProps {
  status: string;
  width: number;
  fontSize: number;
  paddingX: number;
  paddingY: number;
}

export const Tag = styled.p<TagStatusProps>`
  width: ${props => props.width}%;
  font-size: ${props => props.fontSize}pt;

  color: ${props =>
    (props.status === 'pendente' && '#dc3545') ||
    (props.status === 'yellow' && '#ffa800') ||
    (props.status === 'finalizado', 'ok' && '#50cd89') ||
    (props.status === 'emandamento' && '#ffa700')};

  background: ${props =>
    (props.status === 'pendente' && '#fff5f8') ||
    (props.status === 'yellow' && '#fff4de') ||
    (props.status === 'finalizado', 'ok' && '#e8fff3') ||
    (props.status === 'emandamento' && '#fff8dd')};

  border-radius: 6px;

  padding: ${props => props.paddingY}px ${props => props.paddingX}px;

  text-transform: uppercase;
`;
