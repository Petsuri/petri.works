import { Grid } from "@mui/material";
import React from "react";
import OuterLink from "../components/OuterLink";
import { UCaseTypography } from "../components";
import TechnologiesLink from "./TechnologiesLink";

export default function PersonalInformation() {
  return (
    <>
      <UCaseTypography variant="h3">Petri Miikki</UCaseTypography>
      <UCaseTypography variant="h4">Tech Lead</UCaseTypography>
      <UCaseTypography variant="h5">
        <Grid container spacing={2}>
          <Grid item>
            <OuterLink openToBlank={true} href="https://github.com/petsuri" text="Github" />
          </Grid>
          <Grid item>
            <OuterLink
              openToBlank={true}
              href="https://linkedin.com/in/petri-miikki-073775163"
              text="LinkedIn"
            />
          </Grid>
        </Grid>
      </UCaseTypography>
      <UCaseTypography variant="h5">
        <TechnologiesLink />
      </UCaseTypography>
      <UCaseTypography variant="h5">
        <OuterLink href="mailto:miikinpetri@gmail.com" text="miikinpetri@gmail.com" />
      </UCaseTypography>
    </>
  );
}
