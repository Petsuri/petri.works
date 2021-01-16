import { Link } from "@material-ui/core";
import React from "react";

type OuterLinkProps = {
  readonly href: string;
  readonly text: string;
  readonly openToBlank?: boolean;
};

export default function OuterLink(props: OuterLinkProps) {
  return (
    <Link href={props.href} target={props.openToBlank ? "_blank" : ""} rel="noopener noreferrer">
      {props.text}
    </Link>
  );
}
