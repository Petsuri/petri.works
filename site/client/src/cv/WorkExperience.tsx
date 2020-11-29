import { Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  FlexContainer,
  Paragraph,
  UCaseTypography,
  UnorderedList,
} from "../styles/components";
import { formatPeriod } from "../timeFormatting";

interface Experience {
  company: string;
  jobTitle: string;
  begin: Date;
  end: Date | null;
  descriptions: string[];
  responsibilities: string[];
  achievements?: string[];
}

const getExperiences = (): Experience[] => {
  const experienses: Experience[] = [];
  experienses.push({
    company: "Visma Solutions Oy, Visma Sign",
    jobTitle: "Tech Lead",
    begin: new Date(2019, 5, 1),
    end: null,
    descriptions: [
      "Strong focus on return on investment on what we are building and what way to best benefit business. Leading technical development of Visma Sign with daily hands-on coding.",
    ],
    responsibilities: [
      "Defining coding standards",
      "Architecture of the whole system",
      "Improving collaboration with all functions within Visma Sign",
      "Taking ownership of system development from subcontractor to Visma Solutions Oy",
    ],
  });

  experienses.push({
    company: "Visma Solutions Oy, Netvisor",
    jobTitle: "Mobile Developer",
    begin: new Date(2017, 5, 1),
    end: new Date(2019, 5, 1),
    descriptions: [
      "Started mobile development in Netvisor. For first 1,5 years was the only developer working on Netvisor mobile. This made me learn to be fast decision maker and focus on what actually matters for the business.",
    ],
    responsibilities: [
      "Defining and implementing architecture for Netvisor mobile app",
      "Netvisor API development for supporting mobile use cases",
      "Acting as a mentor for our junior software developers in Netvisor",
      "Hosted workshops about unit testing, SOLID principles and domain driven design",
    ],
    achievements: ["Employee of the year, 2018"],
  });

  experienses.push({
    company: "Visma Solutions Oy, Netvisor",
    jobTitle: "Software Developer",
    begin: new Date(2014, 4, 1),
    end: new Date(2017, 5, 1),
    descriptions: [
      "Worked independently at the start. Made a lot of design decisions for features what we were implementing. After moving towards teams, worked as mentor and coach for our team.",
    ],
    responsibilities: [
      "Designing and making integrations with other Software systems, for example Netvisor ID, Visma Scanner and Visma Webshop",
      "Worked in 'technical council' as chairman for improving Netvisor's technical base",
      "Acting as mentor for new developers",
    ],
    achievements: [
      "Employee of the year, 2016",
      "Started monthly/biweekly knowledge sharing sessions",
    ],
  });

  return experienses;
};

const renderDescriptions = (descriptions: string[]): JSX.Element => {
  return (
    <>
      {descriptions.map((description) => {
        return <Paragraph variant="body1">{description}</Paragraph>;
      })}
    </>
  );
};

const renderListItems = (items: string[]): JSX.Element => {
  return (
    <>
      {items.map((item) => {
        return (
          <li>
            <Typography variant="body1">{item}</Typography>
          </li>
        );
      })}
    </>
  );
};

const renderResponsibilities = (responsibilities: string[]): JSX.Element => {
  return (
    <>
      <Paragraph variant="subtitle1">Responsibilities:</Paragraph>
      <UnorderedList>{renderListItems(responsibilities)}</UnorderedList>
    </>
  );
};

const renderAchievements = (
  achievements: string[] | undefined
): JSX.Element | null => {
  if (achievements === undefined) {
    return null;
  }

  return (
    <>
      <Paragraph variant="subtitle1">Achievements:</Paragraph>
      <UnorderedList>{renderListItems(achievements)}</UnorderedList>
    </>
  );
};

const renderExperience = (job: Experience): JSX.Element => {
  return (
    <Grid item sm={12}>
      <FlexContainer>
        <UCaseTypography variant="h5">{job.company}</UCaseTypography>
        <UCaseTypography variant="h5">
          {formatPeriod(job.begin, job.end)}
        </UCaseTypography>
      </FlexContainer>
      <UCaseTypography variant="h6">{job.jobTitle}</UCaseTypography>
      {renderDescriptions(job.descriptions)}
      {renderResponsibilities(job.responsibilities)}
      {renderAchievements(job.achievements)}
    </Grid>
  );
};

export default function WorkExperience(): JSX.Element {
  return (
    <>
      <UCaseTypography variant="h3">Experience</UCaseTypography>
      <Grid container spacing={3}>
        {getExperiences().map(renderExperience)}
      </Grid>
    </>
  );
}
