// 10/09/23 Monday Codewars 7 Kyu Fundamentals - Colour Association

/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

// Had to look at solutions:
const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))       // Brackets and parenthesis wrong





// 1st try
function colourAssociation(array){
    return array.map( ([{color, association}]) => [{color: association}]);
}
    // Failed: "expected [ [ { color: undefined } ], [ { color: undefined } ] ] to deeply equal [ { white: 'goodness' }, { blue: 'tranquility' } ]"




// 2nd try
function colourAssociation(array){
    return array.map( ([{array[0], array[1]}]) => [{array[0]: array[1]}])
}
    /* Failed:
    "/workspace/node/test.js:3
    return array.map( ([{array[0], array[1]}]) => [{array[0]: array[1]}])
    ^

    SyntaxError: Unexpected token '['
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1088:15)
    at Module._compile (node:internal/modules/cjs/loader:1123:27)
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
    at async exports.handler (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run.js:370:5)"
*/