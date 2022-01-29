import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PathToChapterThree: string = '/career/chapter-three';

export default function ChatperThreeLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterThree}>{t('main.chapter.three')}</Link>;
}
