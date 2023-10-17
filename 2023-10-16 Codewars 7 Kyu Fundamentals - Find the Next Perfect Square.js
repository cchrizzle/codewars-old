// 10/16/23 Monday Codewars 7 Kyu Fundamentals - Find the Next Perfect Square

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    let squareRoot = Math.sqrt(sq);
    if(squareRoot % 1 !== 0) {
        return -1;
    } else {
        return (squareRoot + 1) ** 2; 
    }
}

    // Alternative from other solutions
    function findNextSquare(sq) {
        return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);                 // Math.pow() function
    }

    // Another alternative
    function findNextSquare(sq) {
        let sqrt = Math.sqrt(sq);
        return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;                     // Number.isInteger() function
    }