import React from "react";
import { useTranslation } from "react-i18next";
import {
  PageContainer,
  Paragraph,
  ParagraphContainer,
  UCaseTypography,
} from "../styles/components";
import TechnologyItems from "./TechnologyItems";

export default function TechnologiesPage() {
  const { t } = useTranslation();

  const languages = ["C#", "Javascript", "Typescript", "PHP", "VB.NET", "SQL", "HCL", "F#", "C++"];
  const infrastructure = [
    "AWS",
    "GCP",
    "Serverless",
    "Terraform",
    "Kubernetes",
    "Docker",
    "RabbitMQ",
  ];
  const databases = ["SQLServer", "MariaDB", "MySQL", "DynamoDB", "Redis"];
  const backend = [
    "asp.net",
    "Symfony",
    "REST",
    "OpenID",
    "OAuth",
    "RobotFramework",
    "NUnit",
    "PHPUnit",
    "Specflow",
  ];
  const frontend = ["React", "Xamarin.Forms", "Jasmine", "Jest", "Intern"];

  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("technologies.header")}</UCaseTypography>
      <ParagraphContainer>
        <UCaseTypography variant="h4">{t("technologies.languages.title")}</UCaseTypography>
        <Paragraph>{t("technologies.languages.description")}</Paragraph>
        <Paragraph>{t("technologies.languages.learning")}</Paragraph>
        <Paragraph>{t("technologies.languages.profiency")}</Paragraph>
      </ParagraphContainer>
      <TechnologyItems Items={languages} />
      <ParagraphContainer>
        <UCaseTypography variant="h4">{t("technologies.infrastructures.title")}</UCaseTypography>
        <Paragraph>{t("technologies.infrastructures.description")}</Paragraph>
        <Paragraph>{t("technologies.infrastructures.aws")}</Paragraph>
        <Paragraph>{t("technologies.infrastructures.gcp")}</Paragraph>
        <Paragraph>{t("technologies.infrastructures.azure")}</Paragraph>
        <Paragraph>{t("technologies.infrastructures.knowledge")}</Paragraph>
      </ParagraphContainer>
      <TechnologyItems Items={infrastructure} />
      <ParagraphContainer>
        <UCaseTypography variant="h4">{t("technologies.databases.title")}</UCaseTypography>
        <Paragraph>{t("technologies.databases.description")}</Paragraph>
      </ParagraphContainer>
      <TechnologyItems Items={databases} />
      <ParagraphContainer>
        <UCaseTypography variant="h4">{t("technologies.backend.title")}</UCaseTypography>
        <Paragraph>{t("technologies.backend.description")}</Paragraph>
        <Paragraph>{t("technologies.backend.history")}</Paragraph>
      </ParagraphContainer>
      <TechnologyItems Items={backend} />
      <ParagraphContainer>
        <UCaseTypography variant="h4">{t("technologies.frontend.title")}</UCaseTypography>
        <Paragraph>{t("technologies.frontend.achievement")}</Paragraph>
        <Paragraph>{t("technologies.frontend.web")}</Paragraph>
      </ParagraphContainer>
      <TechnologyItems Items={frontend} />
    </PageContainer>
  );
}
