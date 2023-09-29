// 9/22/23 Codewars Sum Mixed Array - 8 kyu Fundamentals

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    const xNumbers = x.map(value => Number(value));
    let xNumbersSum = xNumbers.reduce( (acc, c) => acc + c, 0);
    return xNumbersSum;
}