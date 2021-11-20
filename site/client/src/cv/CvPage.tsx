import React from "react";
import Skills from "./Skills";
import { TextContainer, WhiteDivider, PageContainer } from "../components";
import Profile from "./Profile";
import PersonalInformation from "./PersonalInformation";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function CvPage() {
  return (
    <PageContainer>
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
      <WhiteDivider />
      <TextContainer>
        <Education />
      </TextContainer>
    </PageContainer>
  );
}
