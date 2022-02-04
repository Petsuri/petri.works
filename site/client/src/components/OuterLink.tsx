import { Link } from '@mui/material';
import React from 'react';

type OuterLinkProps = {
  readonly href: string;
  readonly text: string;
  readonly openToBlank?: boolean;
};

export default function OuterLink(props: OuterLinkProps) {
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
    >
      {props.text}
    </Link>
  );
}
