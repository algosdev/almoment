export default function (str: number): string {
  return str < 10 ? `0${str}` : `${str}`;
}
