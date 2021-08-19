# Almoment
 ---
##### Lightweight [moment.js](https://www.npmjs.com/package/moment)  alternative

## Installation

```sh
npm install almoment
```
## Usage
```sh
import { format } from "almoment"
const stringDate = "Sun Aug 07 2021 12:18:37 GMT+0500 (Uzbekistan Standard Time)"
const formattedDate = format(stringDate, "DD-MM-YYYY")
console.log(formattedDate)
// Output: 07-08-2021

const formattedTime = format(stringDate, "hh:mm:ss")
console.log(formattedTime)
// Output: 12:18:37

const mixedFormat = format(stringDate, "hh:mm/ss YYYY/MM/DD")
console.log(mixedFormat)
// Output: 12:18/37 2021/08/07
```
It will replace string with value. Value is always two digit (for example August is not '8' but '08'). If you want single digit, pass single letter (for hours - 'h'). Plus if you want to get last 2 digits of year, pass "YY"
| String | definition |
| ------ | ------ |
| hh | hours (to get single digit -'h',  the same for belows) |
| mm | minutes |
| ss | seconds |
| DD | days |
| MM | months |
| YYYY | years (to get last two digits - 'YY')


## License
MIT
