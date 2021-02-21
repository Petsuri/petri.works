import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToTechnologiesPage: string = "/cv/technologies";

export default function TechnologiesLink() {
  const { t } = useTranslation();

  return <Link to={PathToTechnologiesPage}>{t("main.technologies")}</Link>;
}
