import { Grid } from "@material-ui/core";
import React from "react";
import {
  FlexContainer,
  Paragraph,
  UCaseTypography,
} from "../styles/components";
import { formatPeriod } from "../timeFormatting";

interface School {
  name: string;
  location: string;
  description: string;
  begin: Date;
  end: Date;
}

const getSchools = (): School[] => {
  const schools: School[] = [];

  schools.push({
    name: "Saimaa University of Applied Sciences",
    location: "Lappeenranta, Finland",
    begin: new Date(2009, 7, 1),
    end: new Date(2014, 5, 1),
    description: "Bachelor of applied sciences",
  });

  schools.push({
    name: "Beijing Juncheng Language School",
    location: "Beijing, China",
    begin: new Date(2012, 6, 1),
    end: new Date(2012, 11, 1),
    description: "Intensive Chinese learning course for half a year",
  });

  schools.push({
    name: "Beijing Business and Technology University",
    location: "Beijing, China",
    begin: new Date(2011, 7, 1),
    end: new Date(2012, 5, 1),
    description:
      "Studying Chinese and business as part of my studies in Saimaa University of Applied Sciences",
  });

  return schools;
};

const renderSchools = (school: School): JSX.Element => {
  return (
    <Grid item sm={12}>
      <FlexContainer>
        <UCaseTypography variant="h5">{school.name}</UCaseTypography>
        <UCaseTypography variant="h5">
          {formatPeriod(school.begin, school.end)}
        </UCaseTypography>
      </FlexContainer>
      <UCaseTypography variant="h6">{school.location}</UCaseTypography>
      <Paragraph>{school.description}</Paragraph>
    </Grid>
  );
};

export default function Education(): JSX.Element {
  return (
    <>
      <UCaseTypography variant="h3">Education</UCaseTypography>
      <Grid container spacing={3}>
        {getSchools().map(renderSchools)}
      </Grid>
    </>
  );
}
