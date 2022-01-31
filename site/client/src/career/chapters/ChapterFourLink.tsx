import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterFour: string = '/career/chapter-four';

export default function ChapterFourLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterFour} text={t('main.chapter.four')} />;
}
