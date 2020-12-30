import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToBeingDeveloperPage: string = "/path-to-being-developer";

export default function BeingDeveloperLink() {
  const { t } = useTranslation();

  return (
    <Link to={PathToBeingDeveloperPage}>
      {t("main.path_to_being_developer")}
    </Link>
  );
}
