// 10/03/23 Wednesday Codewars 7 Kyu Fundamentals - SillyCASE

/*
Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  

*/

function sillycase(silly) {
    const splitSilly = silly.split('');
    const splitSillyFirstHalf = splitSilly.slice(0, Math.ceil(splitSilly.length / 2)).join('').toLowerCase();
    const splitSillySecondHalf = splitSilly.slice(Math.ceil(splitSilly.length / 2), splitSilly.length).join('').toUpperCase();      // Can define "Math.ceil(splitSilly.length / 2)"
    return `${splitSillyFirstHalf}${splitSillySecondHalf}`
}


    // More efficient from solutions
    function sillycase(silly) {
        var c = Math.round(silly.length / 2);
        return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
      }