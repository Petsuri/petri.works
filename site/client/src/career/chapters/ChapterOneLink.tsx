import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToChapterOne: string = "/career/chapter-one";

export default function CvLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterOne}>{t("main.career.chapters.one.header")}</Link>;
}
