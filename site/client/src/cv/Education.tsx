import { Grid } from "@material-ui/core";
import React from "react";
import {
  FlexContainer,
  Paragraph,
  UCaseTypography,
} from "../styles/components";
import { formatPeriod } from "../timeFormatting";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

interface School {
  name: string;
  location: string;
  description: string;
  begin: Date;
  end: Date;
}

const createSchool = (
  t: TFunction,
  translationKey: string,
  begin: Date,
  end: Date
): School => {
  const translationIndex = `cv.education.school.${translationKey}.`;
  return {
    name: t(translationIndex + "name"),
    location: t(translationIndex + "location"),
    begin: begin,
    end: end,
    description: t(translationIndex + "description"),
  };
};

const getSchools = (t: TFunction): School[] => {
  const schools: School[] = [];
  schools.push(
    createSchool(t, "saimaa", new Date(2009, 7, 1), new Date(2014, 5, 1))
  );
  schools.push(
    createSchool(t, "juncheng", new Date(2012, 6, 1), new Date(2012, 11, 1))
  );
  schools.push(
    createSchool(t, "btbu", new Date(2011, 7, 1), new Date(2012, 5, 1))
  );

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
  const { t } = useTranslation();

  return (
    <>
      <UCaseTypography variant="h3">{t("cv.education.header")}</UCaseTypography>
      <Grid container spacing={3}>
        {getSchools(t).map(renderSchools)}
      </Grid>
    </>
  );
}
