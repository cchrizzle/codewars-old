// 10/21/23 Sunday Codewars 7 Kyu Fundamentals - Anagram Detection

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
*/




// 5th attempt - working
var isAnagram = function(test, original) {
    const testSplit = test.toLowerCase().split('');         // Needed to add .toLowerCase() to account for capitalizations
    const origSplit = original.toLowerCase().split('');

    if (testSplit.length === origSplit.length) {
        let sortTest = testSplit.sort().join();
        let sortOrig = origSplit.sort().join();
        return sortTest === sortOrig;
    }
    return false;
}

    // More efficient version from other solutions
    var isAnagram = function(test, original) {
        var t = test.toLowerCase().split('').sort().join('');
        var o = original.toLowerCase().split('').sort().join('');
        return t === o;
      };




// 1st attempt
var isAnagram = function(test, original) {
    const testSplit = test.split('');
    const origSplit = original.split('');

    if( testSplit.length() === origSplit.length() ) {
        let sortTest = testSplit.sort( (a, b) => a - b );
        let sortOrig = origSplit.sort( (a, b) => a - b );
        return sortTest === sortOrig;
    }
}




// 2nd attempt
var isAnagram = function(test, original) {
    const testSplit = test.split('');
    const origSplit = original.split('');

    if( testSplit.length === origSplit.length ) {       // Made .length into a function in previous try
        let sortTest = testSplit.sort( (a, b) => a - b );
        let sortOrig = origSplit.sort( (a, b) => a - b );
        return sortTest === sortOrig;
    }
}




// 3rd attempt
var isAnagram = function(test, original) {
    const testSplit = test.split('');
    const origSplit = original.split('');

    if( testSplit.length === origSplit.length ) {
        let sortTest = testSplit.sort();
        let sortOrig = origSplit.sort();
        return sortTest === sortOrig;
    }
}




// 4th attempt
var isAnagram = function(test, original) {
    const testSplit = test.split('');
    const origSplit = original.split('');

    if (testSplit.length === origSplit.length) {
        let sortTest = testSplit.sort().join('');       // Need to join when comparing arrays
        let sortOrig = origSplit.sort().join('');
        return sortTest === sortOrig;
    }
    return false;       // Didn't account for else - If lengths don't match, they can't be anagrams
}