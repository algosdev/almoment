import twoDigit from "../utils/twoDigit";
export default function (time: Date, isTwoDigit: boolean): string {
  const day = time.getDate();
  return isTwoDigit ? twoDigit(day) : `${day}`;
}
