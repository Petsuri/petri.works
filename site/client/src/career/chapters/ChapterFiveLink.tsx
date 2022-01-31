import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterFive: string = '/career/chapter-five';

export default function ChapterFourLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterFive} text={t('main.chapter.five')} />;
}
