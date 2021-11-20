import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToChapterSeven: string = "/career/chapter-seven";

export default function ChapterSevenLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterSeven}>{t("main.chapter.seven")}</Link>;
}
