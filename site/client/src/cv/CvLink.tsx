import React from 'react';
import { Link } from '../components';
import { useTranslation } from 'react-i18next';

export const PathToCvPage: string = '/cv';

export default function CvLink() {
  const { t } = useTranslation();

  return <Link to={PathToCvPage} text={t('main.cv')} />;
}
