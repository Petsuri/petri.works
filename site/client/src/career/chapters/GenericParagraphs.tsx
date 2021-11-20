import React from "react";
import { UCaseTypography, ParagraphContainer, UnorderedList } from "../../components";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Typography } from "@material-ui/core";

export type ChapterProps = {
  readonly TranslationKey: string;
  readonly FirstParagraphIndex: number;
  readonly LastParagraphIndex: number;
  readonly Headers: number[];
  readonly ListItems: ChapterListItem[];
};

export type ChapterListItem = {
  readonly ParagraphIndex: number;
  readonly LastItemIndex: number;
};

type Paragraph = {
  readonly Index: number;
  readonly ParagraphKey: string;
  readonly HeaderKey: string | null;
  readonly ListItems: ChapterListItem | null;
};

const createParagraphInfos = (props: ChapterProps): Array<Paragraph> => {
  const { TranslationKey, FirstParagraphIndex, LastParagraphIndex, Headers, ListItems } = props;

  const paragraphs = Array<Paragraph>();
  for (let index = FirstParagraphIndex; index <= LastParagraphIndex; index++) {
    const hasHeader = Headers.includes(index);
    const headerKey = hasHeader ? `${TranslationKey}.paragraph_headers.${index}` : null;
    const paragrapKey = `${TranslationKey}.paragraphs.${index}`;
    const listItems = ListItems.find((value) => value.ParagraphIndex === index) || null;
    paragraphs.push({
      Index: index,
      HeaderKey: headerKey,
      ParagraphKey: paragrapKey,
      ListItems: listItems,
    });
  }

  return paragraphs;
};

const renderListTems = (
  t: TFunction,
  translationKey: string,
  paragaphIndex: number,
  listItems: ChapterListItem | null
) => {
  if (listItems === null) {
    return null;
  }

  const items = Array<JSX.Element>();
  for (let listItemIndex = 1; listItemIndex <= listItems.LastItemIndex; listItemIndex++) {
    items.push(
      <li>{t(`${translationKey}.paragraph_list_items.${paragaphIndex}.${listItemIndex}`)}</li>
    );
  }

  return <UnorderedList>{items}</UnorderedList>;
};

const renderParagraph = (
  t: TFunction,
  translationKey: string,
  paragraph: Paragraph,
  index: number
) => {
  const header = (headerKey: string | null) => {
    if (headerKey === null) {
      return null;
    }

    return <UCaseTypography variant="h4">{t(headerKey)}</UCaseTypography>;
  };

  return (
    <ParagraphContainer key={index}>
      {header(paragraph.HeaderKey)}
      <Typography variant="body1">{t(paragraph.ParagraphKey)}</Typography>
      {renderListTems(t, translationKey, paragraph.Index, paragraph.ListItems)}
    </ParagraphContainer>
  );
};

export function GenericParagraphs(props: ChapterProps) {
  const { t } = useTranslation();

  const toParagrapth = renderParagraph.bind(null, t).bind(null, props.TranslationKey);

  const paragraphs = createParagraphInfos(props);
  return <>{paragraphs.map(toParagrapth)}</>;
}
