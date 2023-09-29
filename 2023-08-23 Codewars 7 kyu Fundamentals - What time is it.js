// 8/23/23 Codewars What time is it? - 7 kyu Fundamentals

/*
Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Try not to use built-in Date/Time libraries.
Examples

"07:05:45PM"  -->  "19:05:45"
"12:00:01AM"  -->  "00:00:01"
"11:46:47PM"  -->  "23:46:47"
*/

var getMilitaryTime = function(input) {
    let splitInput = input.split(':');

    let hours = parseInt(splitInput[0]);
    let minutes = splitInput[1];
    let seconds = splitInput[2].slice(0,2);
    let amOrPm = splitInput[2].slice(2,4);
  
    if( (amOrPm.toLowerCase() === 'pm') && (hours !== 12) ) {
        hours += 12;
    } else if( (amOrPm.toLowerCase() === 'am') && (hours === 12) ) {
        hours = 0;
    }

    return `${hours.toString().padStart(2,0)}:${minutes}:${seconds}`;
}