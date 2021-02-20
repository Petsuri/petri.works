import React from "react";
import GenericChapterPage from "./GenericChapterPage";

export default function ChapterTwoPage() {
  return (
    <GenericChapterPage
      TranslationKey="career.chapter.two"
      FirstParagraphIndex={1}
      LastParagraphIndex={10}
      Headers={[3, 4, 5, 6, 7]}
      ListItems={[]}
    />
  );
}
