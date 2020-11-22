import React from 'react';
import { useTranslation } from "react-i18next";

export default function CvPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t("cv.coming_soon")}
        </div>
    );
}