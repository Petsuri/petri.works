import React from "react";
import GenericChapter from "./GenericChapter";

export default function ChapterOnePage() {
  return (
    <GenericChapter
      TranslationKey="career.chapter.one"
      FirstParagraphIndex={1}
      LastParagraphIndex={19}
      Headers={[2, 6, 10, 15, 19]}
    />
  );
}
