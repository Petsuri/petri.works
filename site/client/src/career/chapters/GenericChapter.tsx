import React from "react";
import { UCaseTypography, PageContainer, ParagraphContainer } from "../../styles/components";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Typography } from "@material-ui/core";

type Props = {
  TranslationKey: string;
  FirstParagrapIndex: number;
  LastParagraphIndex: number;
};

const renderParagraph = (t: TFunction, translationIndex: string, index: number) => {
  return (
    <ParagraphContainer key={index}>
      <Typography variant="body1">{t(translationIndex)}</Typography>
    </ParagraphContainer>
  );
};

export default function GenericChapter(props: Props) {
  const { t } = useTranslation();

  const toParagrapth = renderParagraph.bind(null, t);

  const paragraphIndexes = [];
  for (let index = props.FirstParagrapIndex; index <= props.LastParagraphIndex; index++) {
    paragraphIndexes.push(`${props.TranslationKey}.${index}`);
  }

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t(`${props.TranslationKey}.header`)}</UCaseTypography>
      {paragraphIndexes.map(toParagrapth)}
    </PageContainer>
  );
}
