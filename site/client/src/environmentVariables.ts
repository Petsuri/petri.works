export const getApiUri = (): string => {
  if (process.env.REACT_APP_API_HOST === undefined) {
    throw new Error('REACT_APP_API_HOST environment variable must be defined');
  }

  return process.env.REACT_APP_API_HOST;
}

export const getAdminSiteUri = (): string => {
 if (process.env.REACT_APP_ADMIN_SITE_HOST === undefined) {
    throw new Error('REACT_APP_ADMIN_SITE_HOST environment variable must be defined');
  }

  return process.env.REACT_APP_ADMIN_SITE_HOST;
}