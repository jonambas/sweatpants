import { getYear } from 'date-fns';

export const makeYears = (fromDate?: Date, toDate?: Date) => {
  if (!fromDate || !toDate) {
    return [];
  }

  let year = getYear(fromDate);
  let years = [];

  while (year <= getYear(toDate)) {
    years.push(`${year}`);
    year = year + 1;
  }

  return years.reverse();
};
