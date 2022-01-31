import React from 'react';
import { Link } from '../components';
import { useTranslation } from 'react-i18next';

export const PathToBeingDeveloperPage: string = '/path-to-being-developer';

export default function BeingDeveloperLink() {
  const { t } = useTranslation();

  return <Link to={PathToBeingDeveloperPage} text={t('main.path_to_awesome_developer')} />;
}
