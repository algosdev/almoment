import twoDigit from "../utils/twoDigit";
export default function (time: Date, isTwoDigit: boolean): string {
  const month = time.getMonth() + 1;
  return isTwoDigit ? twoDigit(month) : `${month}`;
}
