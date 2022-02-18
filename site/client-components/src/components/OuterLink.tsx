import React from 'react';
import { Link } from '@mui/material';

type OuterLinkProps = {
  readonly href: string;
  readonly text: string;
  readonly openToBlank?: boolean;
  readonly onclick?: () => void;
};

export function OuterLink(props: OuterLinkProps) {
  return (
    <Link
      color="inherit"
      variant="inherit"
      fontSize="inherit"
      underline="always"
      href={props.href}
      target={props.openToBlank ? '_blank' : ''}
      rel="noopener noreferrer"
      sx={{
        ':hover': {
          color: 'primary.main',
        },
      }}
      onClick={props.onclick}
    >
      {props.text}
    </Link>
  );
}
