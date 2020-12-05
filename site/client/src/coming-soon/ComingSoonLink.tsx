import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PathToComingSoonPage: string = "/coming-soon";

export default function ComingSoonLink() {
  const { t } = useTranslation();

  return <Link to={PathToComingSoonPage}>{t("main.coming_soon")}</Link>;
}
