// 10/10/23 Tuesday Codewars 8 Kyu Fundamentals - Fake Binary

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


function fakeBin(x){
    let splitX = x.split('');
    let mapSplitX = splitX.map(value => value < 5 ? 0 : 1);
    return mapSplitX.join('');
}
    // Works, trying all in one line


    // Not working
const fakeBin= x => return x.split('').map(value => value < 5? 0 : 1).join('');
    // Fixed to
    const fakeBin = x => x.split('').map(value => value < 5 ? 0 :1).join('');


// 3rd try on minimizing code - Works!
function fakeBin(x){
    return x.split('').map(value => value < 5 ? 0 : 1).join('');
}