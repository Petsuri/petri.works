import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PathToChapterTwo: string = '/career/chapter-two';

export default function ChatperTwoLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterTwo}>{t('main.chapter.two')}</Link>;
}
