import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  readonly to: string;
  readonly text: string;
};

export function Link(props: LinkProps) {
  return (
    <MuiLink
      component={RouterLink}
      to={props.to}
      color="inherit"
      variant="inherit"
      fontSize="inherit"
      sx={{
        ':hover': {
          color: 'primary.main',
        },
      }}
    >
      {props.text}
    </MuiLink>
  );
}
