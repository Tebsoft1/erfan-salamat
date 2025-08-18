import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true }); 

/**
 * تبدیل تاریخ میلادی به جلالی با اعداد فارسی
 * @param date 
 * @param format 
 */
export const convertToPersianDate = (
  date: Date | string | number | null | undefined,
  format: string = "jYYYY/jMM/jDD"
): string => {
  if (!date) return "-";
  return moment(date).format(format);
};
