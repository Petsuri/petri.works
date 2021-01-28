import React from "react";
import { UCaseTypography, PageContainer, ParagraphContainer } from "../../styles/components";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Typography } from "@material-ui/core";

type ChapterProps = {
  readonly TranslationKey: string;
  readonly FirstParagraphIndex: number;
  readonly LastParagraphIndex: number;
  readonly Headers: Array<number>;
};

type Paragraph = {
  readonly Index: number;
  readonly ParagraphKey: string;
  readonly HeaderKey: string | null;
}

const createParagraphInfos = (props: ChapterProps): Array<Paragraph> => {
  const { TranslationKey, FirstParagraphIndex, LastParagraphIndex, Headers } = props;

  const paragraphs = Array<Paragraph>();
  for (let index = FirstParagraphIndex; index <= LastParagraphIndex; index++) {

    const hasHeader = Headers.includes(index);
    const headerKey = hasHeader ? `${TranslationKey}.paragraph_headers.${index}` : null;
    const paragrapKey = `${TranslationKey}.paragraphs.${index}`;
    paragraphs.push({
      Index: index,
      HeaderKey: headerKey,
      ParagraphKey: paragrapKey,
    });
  }

  return paragraphs;
}

const renderParagraph = (t: TFunction, paragraph: Paragraph, index: number) => {

  const header = (headerKey: string | null) => {
    if (headerKey === null) {
      return null;
    }

    return <UCaseTypography variant="h4">{t(headerKey)}</UCaseTypography>;
  }

  return (
    <ParagraphContainer key={index}>
      {header(paragraph.HeaderKey)}
      <Typography variant="body1">{t(paragraph.ParagraphKey)}</Typography>
    </ParagraphContainer>
  );
};

export default function GenericChapter(props: ChapterProps) {
  const { t } = useTranslation();

  const toParagrapth = renderParagraph.bind(null, t);

  const paragraphs = createParagraphInfos(props);
  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t(`${props.TranslationKey}.header`)}</UCaseTypography>
      {paragraphs.map(toParagrapth)}
    </PageContainer>
  );
}
