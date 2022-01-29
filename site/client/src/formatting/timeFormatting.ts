const formatDate = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatPeriod = (t: Function, begin: Date, end: Date | null): string => {
  if (end === null) {
    return formatDate(begin) + ' - ' + t('cv.present');
  }

  return formatDate(begin) + ' - ' + formatDate(end);
};
