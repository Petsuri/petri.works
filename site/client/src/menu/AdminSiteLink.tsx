import React from 'react';
import { useTranslation } from 'react-i18next';
import OuterLink from '../components/OuterLink';
import { getAdminSiteUri } from "../environmentVariables";

const AdminSiteLink = () => {
  const { t } = useTranslation();
  const adminUri = getAdminSiteUri();
  return (
    <OuterLink
              openToBlank={false}
              href={adminUri}
              text={t('main.admin_site')}
            />
  )
}

export default AdminSiteLink;