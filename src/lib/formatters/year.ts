export default function (time: Date, isTwoDigit: boolean): string {
  const year = time.getFullYear();
  const yearString = `${year}`;
  return isTwoDigit
    ? year > 1999
      ? yearString.slice(-2)
      : yearString
    : yearString;
}
