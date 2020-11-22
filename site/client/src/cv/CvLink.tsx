import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const PathToCvPage: string = "/cv";

export default function CvLink() {
    const { t } = useTranslation();

    return <Link to={PathToCvPage}>{t("main.cv")}</Link>;
}