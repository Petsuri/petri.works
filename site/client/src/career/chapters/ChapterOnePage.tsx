import React from "react";
import GenericChapterPage from "./GenericChapterPage";

export default function ChapterOnePage() {
  return (
    <GenericChapterPage
      TranslationKey="career.chapter.one"
      FirstParagraphIndex={1}
      LastParagraphIndex={19}
      Headers={[2, 6, 10, 15, 19]}
    />
  );
}
