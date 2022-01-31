import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterSix: string = '/career/chapter-six';

export default function ChapterSixLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterSix} text={t('main.chapter.six')} />;
}
