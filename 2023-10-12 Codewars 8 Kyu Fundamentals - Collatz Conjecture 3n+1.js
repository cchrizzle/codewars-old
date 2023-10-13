// 10/12/23 Thursday Codewars 8 Kyu Fundamentals - Collatz Conjecture 3n+1

// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript

/*
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1

#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

#References

    Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
*/





// PREP

// Parameters: any positive number. End goal is to get number to  1 and count how many times the method was used to do so. If even: number / 2 ; if odd: 3*number + 1

// Returns

// Examples

// Pseudocode
    // while number is not 1
    // let turns = 0;
    // while(n !== 1) {
    //     // even numbers
    //     if(n % 2 === 0) {
    //         n /= 2;
    //         turns += 1;
    //     // odd numbers
    //     } else {
    //         (n *= 3) + 1;
    //         turns += 1;
    //     }
    // }
    // return turns;





// 2nd attempt - working
var hotpo = function(n){
    let turns = 0;
    while(n !== 1) {
        // even numbers
        if(n % 2 === 0) {
            n /= 2;
            turns += 1;
        // odd numbers
        } else {
            n = n * 3 + 1;      // Was trying to use *= notation but it wouldn't work
            turns += 1;
        }
    }
    return turns;
}




// 1st attempt
var hotpo = function(n){
    let turns = 0;
    while(n !== 1) {
        // even numbers
        if(n % 2 === 0) {
            n /= 2;
            turns += 1;
        // odd numbers
        } else {
            (n *= 3) + 1;
            turns += 1;
        }
    }
    return turns;
}


