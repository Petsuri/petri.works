import React from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, UCaseTypography } from "../../styles/components";
import { GenericParagraphs } from "./GenericParagraphs";

export default function ChapterThreePage() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.chapter.three.header")}</UCaseTypography>
      <GenericParagraphs
        TranslationKey="career.chapter.three"
        FirstParagraphIndex={1}
        LastParagraphIndex={11}
        Headers={[4, 7]}
        ListItems={[
          { ParagraphIndex: 8, LastItemIndex: 10 },
          { ParagraphIndex: 9, LastItemIndex: 5 },
        ]}
      />
    </PageContainer>
  );
}
