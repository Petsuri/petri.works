import React from "react";
import { UCaseTypography, PageContainer } from "../../components/common";
import { useTranslation } from "react-i18next";
import { GenericParagraphs, ChapterProps } from "./GenericParagraphs";

export default function GenericChapterPage(props: ChapterProps) {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t(`${props.TranslationKey}.header`)}</UCaseTypography>
      <GenericParagraphs
        TranslationKey={props.TranslationKey}
        FirstParagraphIndex={props.FirstParagraphIndex}
        LastParagraphIndex={props.LastParagraphIndex}
        Headers={props.Headers}
        ListItems={props.ListItems}
      />
    </PageContainer>
  );
}
