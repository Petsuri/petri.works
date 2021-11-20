import React from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, UCaseTypography } from "../../components";
import { GenericParagraphs } from "./GenericParagraphs";

export default function ChapterFivePage() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.chapter.five.header")}</UCaseTypography>
      <GenericParagraphs
        TranslationKey="career.chapter.five"
        FirstParagraphIndex={1}
        LastParagraphIndex={10}
        Headers={[]}
        ListItems={[]}
      />
    </PageContainer>
  );
}
