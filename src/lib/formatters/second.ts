import twoDigit from "../utils/twoDigit";
export default function (time: Date, isTwoDigit: boolean): string {
  const minute = time.getSeconds();
  return isTwoDigit ? twoDigit(minute) : `${minute}`;
}
