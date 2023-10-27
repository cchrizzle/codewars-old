// 10/27/23 Friday Codewars 7 Kyu Fundamentals - Even numbers in an array

// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/




// 3rd attempt - working
function evenNumbers(array, number) {
    let lastEvens = [];
    for(let i = array.length - 1; i >= 0 && lastEvens.length < number; i--) {                   // Had "lastEvens.length <= number" instead of "lastEvens.length < number"
        if(array[i] % 2 === 0) {
            lastEvens.push(array[i]);
        }
    }
    return lastEvens.reverse();
}

    // Better solution from other solutions
    const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);




// 1st attempt
function evenNumbers(array, number) {
    // new array
    let lastEvens = [];
    // last even numbers

    let count = array.length - 1;
    while(lastEvens.length < number) {
        for(let i = array.length - 1; i >= 0; i--) {
            if(array[i] % 2 === 0) {
                lastEvens.push(array[i]);
            }
        }
    }
    return lastEvens.reverse();
}




// 2nd attempt
function evenNumbers(array, number) {
    let lastEvens = [];
    for(let i = array.length - 1; i >= 0 && lastEvens.length <= number; i--) {
        if(array[i] % 2 === 0) {
            lastEvens.push(array[i]);
        }
    }
    return lastEvens.reverse();
}