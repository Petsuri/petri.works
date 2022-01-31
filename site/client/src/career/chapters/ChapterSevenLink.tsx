import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterSeven: string = '/career/chapter-seven';

export default function ChapterSevenLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterSeven} text={t('main.chapter.seven')} />;
}
