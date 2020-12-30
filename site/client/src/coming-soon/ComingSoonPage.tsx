import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Hello } from "@petriworks/api-client";
import { client } from "../ApiClient";
import { PageContainer, UCaseTypography, UnorderedList } from "../styles/components";

export default function ComingSoonPage() {
  const { t } = useTranslation();

  useEffect(() => {
    client()
      .send(new Hello())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("main.coming_soon")}</UCaseTypography>
      <UnorderedList>
        <li>{t("main.coming.pizza")}</li>
        <li>{t("main.coming.hamburger")}</li>
        <li>{t("main.coming.smoking")}</li>
        <li>{t("main.coming.software_development")}</li>
      </UnorderedList>
    </PageContainer >
  );
}
