import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

interface FixedHeaderProps {
  title: string;
}

const FixedHeader: React.FC<FixedHeaderProps> = ({ title }) => {
  const location = useLocation();
  const path_admin =
    location.pathname === '/modules/admin/' ||
    location.pathname === '/modules/admin' ||
    location.pathname === '/modules/admin/profiles' ||
    location.pathname === '/modules/admin/users' ||
    location.pathname === '/modules/admin/props';
  const path_validation =
    location.pathname === '/modules/validity/' ||
    location.pathname === '/modules/validity' ||
    location.pathname === '/modules/validity/prevision' ||
    location.pathname === '/modules/validity/productivity' ||
    location.pathname === '/modules/validity/pvps' ||
    location.pathname === '/modules/validity/auditory' ||
    location.pathname === '/modules/validity/follow' ||
    location.pathname === '/modules/validity/create';
  return (
    <Container>
      <Breadcrumbs
        separator={
          <NavigateNextIcon className="colorDescription" fontSize="small" />
        }
        aria-label="breadcrumb"
      >
        {path_validation && (
          <Link className="colorDescription" href="/modules/validity">
            Auditoria de Validade
          </Link>
        )}

        {path_admin && (
          <Link className="colorDescription" href="/modules/admin">
            Admin
          </Link>
        )}
        <Typography className="colorDescription">{title}</Typography>
      </Breadcrumbs>
    </Container>
  );
};

export default FixedHeader;
