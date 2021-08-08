import day from "./formatters/day";
import hour from "./formatters/hour";
import minute from "./formatters/minute";
import month from "./formatters/month";
import second from "./formatters/second";
import year from "./formatters/year";
const loopKeys = [
  {
    format: "ss",
    func: (date: Date) => second(date, true),
  },
  {
    format: "s",
    func: (date: Date) => second(date, true),
  },
  {
    format: "mm",
    func: (date: Date) => minute(date, true),
  },
  {
    format: "m",
    func: (date: Date) => minute(date, true),
  },
  {
    format: "hh",
    func: (date: Date) => hour(date, true),
  },
  {
    format: "h",
    func: (date: Date) => hour(date, true),
  },
  {
    format: "DD",
    func: (date: Date) => day(date, true),
  },
  {
    format: "D",
    func: (date: Date) => day(date, true),
  },
  {
    format: "MM",
    func: (date: Date) => month(date, true),
  },
  {
    format: "M",
    func: (date: Date) => day(date, true),
  },
  {
    format: "YYYY",
    func: (date: Date) => year(date, false),
  },
  {
    format: "YY",
    func: (date: Date) => year(date, true),
  },
];
export const format = (str: string | number | Date, format: string): string => {
  let result = format || "DD-MM-YYYY";
  const date = new Date(str);
  for (const key of loopKeys) {
    result = result.replace(key.format, key.func(date));
  }
  return result;
};
