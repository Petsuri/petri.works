import { Grid, Typography } from "@material-ui/core";
import { UCaseTypography } from "../components";
import React from "react";
import OuterLink from "../components/OuterLink";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

interface Skill {
  header: string;
  description: JSX.Element;
}

const createSkill = (t: Function, translationKey: string, postElement?: JSX.Element): Skill => {
  const translationIndex = `cv.skills.${translationKey}.`;
  return {
    header: t(translationIndex + "name"),
    description: (
      <>
        {t(translationIndex + "description")}
        {postElement}
      </>
    ),
  };
};

const getListOfSkills = (t: TFunction): Skill[] => {
  const listOfSkills: Skill[] = [];
  listOfSkills.push(createSkill(t, "architecture"));
  listOfSkills.push(
    createSkill(
      t,
      "solid",
      <>
        <OuterLink
          href="https://github.com/petsuri/SolidPrinciplesWorkshop"
          openToBlank={true}
          text=" SOLID"
        />
        .
      </>
    )
  );
  listOfSkills.push(createSkill(t, "ddd"));
  listOfSkills.push(createSkill(t, "design_patterns"));
  listOfSkills.push(createSkill(t, "unit_testing"));
  listOfSkills.push(createSkill(t, "coaching_mentoring"));

  return listOfSkills;
};

export default function Skills() {
  const { t } = useTranslation();

  const renderSkill = (skill: Skill, key: number) => {
    return (
      <Grid key={key} item sm={6}>
        <div>
          <UCaseTypography variant="h5" component="h4">
            {skill.header}
          </UCaseTypography>
          <Typography variant="body1">{skill.description}</Typography>
        </div>
      </Grid>
    );
  };

  return (
    <>
      <UCaseTypography variant="h3">{t("cv.skills.header")}</UCaseTypography>
      <Grid container spacing={3}>
        {getListOfSkills(t).map(renderSkill)}
      </Grid>
    </>
  );
}
