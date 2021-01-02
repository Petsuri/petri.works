import React from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, UCaseTypography, UnorderedList } from "../styles/components";
export default function ComingSoonPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("main.coming_soon")}</UCaseTypography>
      <UnorderedList>
        <li>{t("main.coming.pizza")}</li>
        <li>{t("main.coming.hamburger")}</li>
        <li>{t("main.coming.smoking")}</li>
        <li>{t("main.coming.software_development")}</li>
      </UnorderedList>
    </PageContainer>
  );
}
