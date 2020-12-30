import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  PageContainer,
  UCaseTypography,
  Paragraph,
  UnorderedList,
} from "../styles/components";

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
        <Typography variant="body1">
          {t(`career.what_do_i_need.${translationKey}`)}
        </Typography>
      </li>
    );
  };

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.header")}</UCaseTypography>
      <Paragraph variant="body1">
        {t("career.career_as_software_developer")}
      </Paragraph>

      <UnorderedList>
        {whatDoINeedTranslationsKeys.map(renderWhatDoINeed)}
      </UnorderedList>

      <Paragraph variant="body1">{t("career.good_news")}</Paragraph>
    </PageContainer>
  );
}
