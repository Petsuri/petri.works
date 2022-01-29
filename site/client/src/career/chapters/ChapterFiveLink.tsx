import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PathToChapterFive: string = '/career/chapter-five';

export default function ChapterFourLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterFive}>{t('main.chapter.five')}</Link>;
}
