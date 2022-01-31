import React from 'react';
import { Link } from '../../components';
import { useTranslation } from 'react-i18next';

export const PathToChapterTwo: string = '/career/chapter-two';

export default function ChatperTwoLink() {
  const { t } = useTranslation();

  return <Link to={PathToChapterTwo} text={t('main.chapter.two')} />;
}
