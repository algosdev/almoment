import twoDigit from "../utils/twoDigit";
export default function (time: Date, isTwoDigit: boolean): string {
  const hour = time.getHours();
  return isTwoDigit ? twoDigit(hour) : `${hour}`;
}
