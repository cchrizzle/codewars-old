// 10/10/23 Tuesday Codewars 7 Kyu Fundamentals - Sum of a Sequence

// https://www.codewars.com/kata/586f6741c66d18c22800010a/javascript

/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2                 // get to 2 within 2/2 steps
2,6,2 --> 12 (2 + 4 + 6)    // get to 
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

This is the first kata in the series:

    Sum of a sequence (this kata)
    Sum of a Sequence [Hard-Core Version]
*/

// Own notes for this confusing prompt

// Sum of sequence of numbers: [begin, end, step]
// begin > end : 0 : 