export const convertToPersianDigits = (str: string) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
  const englishDigits = '0123456789'

  return str.toString().replace(/[0-9]/g, (digit) => {
    return persianDigits[englishDigits.indexOf(digit)]
  })
}

export const convertToPersianDigitsWithSeparator = (num: string | number) => {
  // اول سه‌رقمی جدا می‌کنیم
  const str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // بعدش تبدیل به اعداد فارسی
  return convertToPersianDigits(str)
}
