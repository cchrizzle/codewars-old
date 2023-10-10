// 10/10/23 Tuesday Codewars 7 Kyu Fundamentals - Ones and Zeros

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
*/




// Couldn't figure out, from answers
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);       // parseInt converts strings to numbers

    /* From solutions explanation
    The parseInt function converts strings to numbers, and it takes a second argument specifying the base in which the string representation is:

    2 would be passed to specify binary radix (the base in mathematical numeral systems).

    let binary = arr.join('')
    parseInt(binary, 2);
    */






// 1st attempt
const binaryArrayToNumber = arr => {
    const reverseArray = arr.reverse();
    reverseArray.map()
  };