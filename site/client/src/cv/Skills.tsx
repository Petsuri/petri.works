import { Grid, Typography } from "@material-ui/core";
import { UCaseTypography } from "../styles/components";
import React from "react";
import OuterLink from "../OuterLink";

interface Skill {
  header: string;
  description: JSX.Element;
}

const getListOfSkills = (): Skill[] => {
  const listOfSkills: Skill[] = [];
  listOfSkills.push({
    header: "Software architecture",
    description: (
      <>
        From monoliths to event-driven architectures. Making decisions which the
        best suite business needs.
      </>
    ),
  });
  listOfSkills.push({
    header: "Solid principles",
    description: (
      <>
        Advocate for good design practices and making code flexible. Hold
        workshops about
        <OuterLink
          href="https://github.com/petsuri/SolidPrinciplesWorkshop"
          openToBlank={true}
          text=" SOLID"
        />
        .
      </>
    ),
  });
  listOfSkills.push({
    header: "Domain driven design",
    description: (
      <>
        When products are complex with bigger teams of maintaining them, my
        skills of DDD with microservice patterns will bring simplicity to
        design.
      </>
    ),
  });
  listOfSkills.push({
    header: "Software design patterns",
    description: (
      <>
        Strong skills in software design patterns allowing me to make decisions
        best serving business and customer needs. Doesn't under- or
        overengineer.
      </>
    ),
  });
  listOfSkills.push({
    header: "Unit testing",
    description: (
      <>
        Skills to take the lead of defining good practices, patterns and
        priciples of unit testing. Passionate about writing high quality tests.
      </>
    ),
  });
  listOfSkills.push({
    header: "Coaching and mentoring",
    description: (
      <>
        Always willing to share knowledge, mentor and coach others to succeed.
        Successfully created practices for knowledge sharing in earlier
        positions.
      </>
    ),
  });

  return listOfSkills;
};

export default function Skills() {
  const renderSkill = (skill: Skill) => {
    return (
      <Grid item sm={6}>
        <div>
          <UCaseTypography variant="h5">{skill.header}</UCaseTypography>
          <Typography variant="body1">{skill.description}</Typography>
        </div>
      </Grid>
    );
  };

  return (
    <>
      <UCaseTypography variant="h3">Skills</UCaseTypography>
      <Grid container spacing={3}>
        {getListOfSkills().map(renderSkill)}
      </Grid>
    </>
  );
}
