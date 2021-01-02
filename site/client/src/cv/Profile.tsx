import React from "react";
import { Paragraph, UCaseTypography } from "../styles/components";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <>
      <UCaseTypography variant="h3">{t("cv.profile.header")}</UCaseTypography>
      <Paragraph variant="body1">{t("cv.profile.pitch")}</Paragraph>
      <Paragraph variant="body1">{t("cv.profile.technical_decisions")}</Paragraph>
    </>
  );
}
