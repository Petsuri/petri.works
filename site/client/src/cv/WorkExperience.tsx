import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { FlexContainer, Paragraph, UCaseTypography, UnorderedList } from "../components";
import { formatPeriod } from "../timeFormatting";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

interface Experience {
  company: string;
  jobTitle: string;
  begin: Date;
  end: Date | null;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

const createExperience = (
  t: TFunction,
  company: string,
  jobTitle: string,
  begin: Date,
  end: Date | null,
  translationKey: string,
  responsibilityKeys: string[],
  achievementKeys: string[]
): Experience => {
  const translationIndex = `cv.experience.${translationKey}.`;
  return {
    company,
    jobTitle,
    begin,
    end,
    description: t(translationIndex + "description"),
    responsibilities: responsibilityKeys.map((key) =>
      t(translationIndex + "responsibilities." + key)
    ),
    achievements: achievementKeys.map((key) => t(translationIndex + "achievements." + key)),
  };
};

const getExperiences = (t: TFunction): Experience[] => {
  const experienses: Experience[] = [];
  experienses.push(
    createExperience(
      t,
      "Alma Media Oyj",
      "Tech Lead",
      new Date(2022, 1, 1),
      null,
      "tech_lead_alma_media",
      [],
      []
    )
  );

  experienses.push(
    createExperience(
      t,
      "Visma Solutions Oy, Visma Sign",
      "Tech Lead",
      new Date(2019, 5, 1),
      new Date(2022, 1, 1),
      "tech_lead_visma_sign",
      ["1", "2", "3", "4"],
      ["1", "2"]
    )
  );

  experienses.push(
    createExperience(
      t,
      "Visma Solutions Oy, Management board",
      "Personnel member",
      new Date(2021, 0, 1),
      new Date(2021, 11, 1),
      "management_board",
      [],
      []
    )
  );

  experienses.push(
    createExperience(
      t,
      "Visma Solutions Oy, Netvisor",
      "Mobile Developer",
      new Date(2017, 5, 1),
      new Date(2019, 5, 1),
      "mobile_developer",
      ["1", "2", "3", "4"],
      ["1"]
    )
  );

  experienses.push(
    createExperience(
      t,
      "Visma Solutions Oy, Netvisor",
      "Software Developer",
      new Date(2014, 4, 1),
      new Date(2017, 5, 1),
      "software_developer",
      ["1", "2", "3"],
      ["1", "2"]
    )
  );

  return experienses;
};

const renderDescriptions = (description: string): JSX.Element => {
  return <Paragraph variant="body1">{description}</Paragraph>;
};

const renderListItems = (items: string[]): JSX.Element => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        );
      })}
    </>
  );
};

const renderResponsibilities = (t: TFunction, responsibilities: string[]): JSX.Element | null => {
  if (responsibilities.length === 0) {
    return null;
  }

  return (
    <>
      <Paragraph variant="subtitle1">{t("cv.experience.responsibilities")}:</Paragraph>
      <UnorderedList>{renderListItems(responsibilities)}</UnorderedList>
    </>
  );
};

const renderAchievements = (t: TFunction, achievements: string[]): JSX.Element | null => {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <>
      <Paragraph variant="subtitle1">{t("cv.experience.achievements")}:</Paragraph>
      <UnorderedList>{renderListItems(achievements)}</UnorderedList>
    </>
  );
};

const renderExperience = (t: TFunction, job: Experience, key: number): JSX.Element => {
  return (
    <Grid key={key} item sm={12}>
      <FlexContainer>
        <UCaseTypography variant="h5" component="h4">
          {job.company}
        </UCaseTypography>
        <UCaseTypography variant="h5" component="h4">
          {formatPeriod(t, job.begin, job.end)}
        </UCaseTypography>
      </FlexContainer>
      <UCaseTypography variant="h6" component="h5">
        {job.jobTitle}
      </UCaseTypography>
      {renderDescriptions(job.description)}
      {renderResponsibilities(t, job.responsibilities)}
      {renderAchievements(t, job.achievements)}
    </Grid>
  );
};

export default function WorkExperience(): JSX.Element {
  const { t } = useTranslation();
  const toExperience = renderExperience.bind(null, t);
  return (
    <>
      <UCaseTypography variant="h3">{t("cv.experience.header")}</UCaseTypography>
      <Grid container spacing={3}>
        {getExperiences(t).map(toExperience)}
      </Grid>
    </>
  );
}
