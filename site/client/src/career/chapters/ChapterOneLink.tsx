import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterOne: string = '/career/chapter-one';

export default function ChapterOneLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterOne} text={t('main.chapter.one')} />;
}
