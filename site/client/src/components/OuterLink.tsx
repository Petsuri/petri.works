import { Link } from "@mui/material";
import React from "react";

type OuterLinkProps = {
  readonly href: string;
  readonly text: string;
  readonly openToBlank?: boolean;
};

export default function OuterLink(props: OuterLinkProps) {
  return (
    <Link
      color="inherit"
      underline="always"
      href={props.href}
      target={props.openToBlank ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      {props.text}
    </Link>
  );
}
