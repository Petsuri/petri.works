import React from "react";
import GenericChapter from "./GenericChapter";

export default function ChapterTwoPage() {
  return (
    <GenericChapter
      TranslationKey="career.chapter.two"
      FirstParagraphIndex={1}
      LastParagraphIndex={10}
      Headers={[3, 4, 5, 6, 7]}
    />
  );
}
