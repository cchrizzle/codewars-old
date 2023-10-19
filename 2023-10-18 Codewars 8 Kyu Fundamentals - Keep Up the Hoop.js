// 10/18/23 Wednesday Codewars 8 Kyu Fundamentals - Keep Up the Hoop

// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

// PREP
// Parameters: n - how many times // n >= 10 - "Great, now move on to tricks" // n > 10 - "Keep at it until you get it"

// Return

// Examples

// Pseudocode
// if statements
    // n >= 10: return "Great, now move on to tricks"
if(n >= 10) {
    return 'Great, now move on to tricks';
    // n > 10: return "Keep at it until you get it"
} else {
    return 'Keep at it until you get it';
}

function hoopCount (n) {
    if(n >= 10) {
        return 'Great, now move on to tricks';
    } else {
        return 'Keep at it until you get it';
    }
}

    // More condensed version from other solutions
    function hoopCount(n) {
        return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
    }



// As arrow function ternary: - Submitted this version
const hoopCount = n => n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';

    // More condensed version from other solutions
    const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';