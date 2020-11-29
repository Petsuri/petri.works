import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Skills from "./Skills";
import { TextContainer, WhiteDivider } from "../styles/components";
import Profile from "./Profile";
import PersonalInformation from "./PersonalInformation";
import WorkExperience from "./WorkExperience";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "1rem",
  },
}));

export default function CvPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <TextContainer>
          <PersonalInformation />
        </TextContainer>
        <WhiteDivider />
        <TextContainer>
          <Profile />
        </TextContainer>
        <WhiteDivider />
        <TextContainer>
          <Skills />
        </TextContainer>
        <WhiteDivider />
        <TextContainer>
          <WorkExperience />
        </TextContainer>
      </Container>
    </div>
  );
}
