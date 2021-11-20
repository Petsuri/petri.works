import React from "react";
import GenericChapterPage from "./GenericChapterPage";

export default function ChapterSixPage() {
  return (
    <GenericChapterPage
      TranslationKey="career.chapter.six"
      FirstParagraphIndex={1}
      LastParagraphIndex={8}
      Headers={[4]}
      ListItems={[
        { ParagraphIndex: 5, LastItemIndex: 6 },
        { ParagraphIndex: 6, LastItemIndex: 4 },
      ]}
    />
  );
}
