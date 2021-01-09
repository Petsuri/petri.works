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

  const whatDoINeedTranslationsKeys = [
    "where_to_start",
    "degree",
    "what_programming_language",
    "getting_first_job",
    "advancing_in_career",
  ];

  const renderWhatDoINeed = (translationKey: string, index: number) => {
    return (
      <li key={index}>
        <Typography variant="body1">{t(`career.what_do_i_need.${translationKey}`)}</Typography>
      </li>
    );
  };

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.header")}</UCaseTypography>

      <ParagraphContainer>
        <Paragraph variant="body1">{t("career.career_as_software_developer")}</Paragraph>

        <ParagraphContainer>
          <UnorderedList>{whatDoINeedTranslationsKeys.map(renderWhatDoINeed)}</UnorderedList>
        </ParagraphContainer>

        <Paragraph variant="body1">{t("career.good_news")}</Paragraph>
      </ParagraphContainer>

      <Subscribe apiClient={client()} />

    </PageContainer>
  );
}
