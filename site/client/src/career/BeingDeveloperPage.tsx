import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  PageContainer,
  UCaseTypography,
  Paragraph,
  UnorderedList,
  ParagraphContainer,
} from "../styles/components";
import { client } from "../ApiClient";
import Subscribe from "./Subscribe";

export default function BeingDeveloperPage() {
  const { t } = useTranslation();

  const basics = ["coding", "design", "unit_tests", "katas", "motivation_and_ambition"];

  const buildingWebsite = ["domain", "infrastructure", "frontend", "backend", "pipeline"];

  const followingTopics = [
    "decisions",
    "productivity",
    "responsibility",
    "architectures",
    "test_automation",
    "micro",
  ];

  const renderListItem = (listKey: string, translationKey: string, index: number) => {
    return (
      <li key={index}>
        <Typography variant="body1">
          {t(`career.mentoring.${listKey}.${translationKey}`)}
        </Typography>
      </li>
    );
  };

  const renderBasic = renderListItem.bind(null, "basics");
  const renderBuildingWebsite = renderListItem.bind(null, "building_website");
  const renderFollowingTopic = renderListItem.bind(null, "following_topics");

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.header")}</UCaseTypography>

      <ParagraphContainer>
        <ParagraphContainer>
          <Paragraph variant="body1">{t("career.mentoring.program_synopsis")}</Paragraph>
        </ParagraphContainer>

        <Paragraph variant="body1">{t("career.mentoring.what_we_will_start_with")}</Paragraph>

        <ParagraphContainer>
          <UnorderedList>{basics.map(renderBasic)}</UnorderedList>
        </ParagraphContainer>

        <Paragraph variant="body1">{t("career.mentoring.what_to_learn_after_basics")}</Paragraph>
        <ParagraphContainer>
          <UnorderedList>{buildingWebsite.map(renderBuildingWebsite)}</UnorderedList>
        </ParagraphContainer>

        <Paragraph variant="body1">
          {t("career.mentoring.we_will_also_touch_following_topics")}
        </Paragraph>

        <ParagraphContainer>
          <UnorderedList>{followingTopics.map(renderFollowingTopic)}</UnorderedList>
        </ParagraphContainer>

        <Paragraph variant="body1">{t("career.mentoring.what_this_requires")}</Paragraph>

        <ParagraphContainer>
          <Paragraph variant="body1">{t("career.good_news")}</Paragraph>
        </ParagraphContainer>
      </ParagraphContainer>

      <Subscribe apiClient={client()} />
    </PageContainer>
  );
}
