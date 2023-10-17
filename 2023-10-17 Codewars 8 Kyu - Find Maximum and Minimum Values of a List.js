// 10/17/23 Tuesday Codewars 8 Kyu - Find Maximum and Minimum Values of a List

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes

    You may consider that there will not be any empty arrays/vectors.

*/

// PREP
// Parameters: maximum of array, minimum of array; will always have values in array; 

// Return: max of array, min of array


// Examples

// Pseudocode

// 2nd attempt - WORKING: moved global "sortedList" to local for each function
var min = function(list){
    const sortedList = list.sort( (a, b) => a-b);
    return list[0];
}
  
  var max = function(list){
    const sortedList = list.sort( (a, b) => a-b);
    return list[list.length-1];
}

    // More efficient example from other solutions
    const min = (list) => Math.min(...list);                    // Spread operator
    const max = (list) => Math.max(...list);
        // Spread Operator explanation from comments: "It's called the spread operator in this context. It takes all the values in the array and 'spreads' them out as arguments to the function. Math.max/min require individual numbers as arguments so you can't just pass in the array itself. Math.max(...[1,2,3]) becomes Math.max(1,2,3)."





// 1st attempt
const sortedList = list.sort( (a, b) => a-b);
var min = function(list){
    return list[0];
}

var max = function(list){
    return list[list.length-1];
}

    /* Didn't work:
    ReferenceError: list is not defined
    at Object.<anonymous> (/workspace/node/test.js:2:20)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async importModuleDynamicallyWrapper (node:internal/vm/module:438:15)
    at async formattedImport (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:9:14)
    at async exports.requireOrImport (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:42:28)
    at async exports.loadFilesAsync (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
    at async singleRun (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at async exports.handler (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run.js:370:5)
    */