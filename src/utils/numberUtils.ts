export const convertToPersianDigits = (str: string) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
  const englishDigits = '0123456789'

  return str.toString().replace(/[0-9]/g, (digit) => {
    return persianDigits[englishDigits.indexOf(digit)]
  })
}
