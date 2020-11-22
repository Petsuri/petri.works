import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToMainPage: string = "/";

export default function MainLink() {
  const { t } = useTranslation();

  return <Link to={PathToMainPage}>{t("main.main_page")}</Link>;
}
