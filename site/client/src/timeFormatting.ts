const formatDate = (date: Date): string => {
  return `${date.getMonth() + 1} / ${date.getFullYear()}`;
};

export const formatPeriod = (begin: Date, end: Date | null): string => {
  if (end === null) {
    return formatDate(begin) + " - Present";
  }

  return formatDate(begin) + " - " + formatDate(end);
};
