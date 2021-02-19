import React from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, UCaseTypography } from "../styles/components";

export default function TechnologiesPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("technologies.header")}</UCaseTypography>
    </PageContainer>
  );
}
