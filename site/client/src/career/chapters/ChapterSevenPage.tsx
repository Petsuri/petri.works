import React from "react";
import GenericChapterPage from "./GenericChapterPage";

export default function ChapterSevenPage() {
  return (
    <GenericChapterPage
      TranslationKey="career.chapter.seven"
      FirstParagraphIndex={1}
      LastParagraphIndex={5}
      Headers={[]}
      ListItems={[
        { ParagraphIndex: 3, LastItemIndex: 3 },
      ]}
    />
  );
}
