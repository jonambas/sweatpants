import { differenceInYears, format, subYears } from 'date-fns';

export const makeYears = () => {
  const floorDate = new Date(2005, 0, 0);
  const limit = Math.abs(differenceInYears(new Date(), floorDate)) + 1;
  return new Array(limit).fill(null).map((_, i) => {
    return format(subYears(new Date(), i), 'YYY');
  });
};
