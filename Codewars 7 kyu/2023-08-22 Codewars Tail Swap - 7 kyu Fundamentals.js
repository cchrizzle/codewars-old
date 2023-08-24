// 8/22/23 Codewars Tail Swap - 7 kyu Fundamentals
/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

function tailSwap(arr) {
    // Split array
    const splitArr = arr.map(item => item.split(':'));      // splitArr = 2 arrays: ['abc', '123'] & ['cde', '456']

    // Splitting each array further
    // Splitting first array
    const splitArr0 = splitArr[0].map(item => item.split(','));     // splitArr0 = ['abc'] & ['123]

    // Splitting second array
    const splitArr1 = splitArr[1].map(item => item.split(','));     // splitArr1 = ['cde'] & ['456'];

    const joinArr0 = `${splitArr0[0]}:${splitArr1[1]}`;
    const joinArr1 = `${splitArr1[0]}:${splitArr0[1]}`;

    const finalArr = [ joinArr0, joinArr1 ];

    return finalArr;
}