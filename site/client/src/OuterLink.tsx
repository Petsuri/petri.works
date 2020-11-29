import { Link } from "@material-ui/core";
import React from "react";

type OuterLinkProps = {
  href: string;
  text: string;
  openToBlank?: boolean;
};

export default function OuterLink(props: OuterLinkProps) {
  return (
    <Link href={props.href} target={props.openToBlank ? "_blank" : ""}>
      {props.text}
    </Link>
  );
}
