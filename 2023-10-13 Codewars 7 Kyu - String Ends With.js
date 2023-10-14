// 10/13/23 Friday Codewars 7 Kyu - String Ends With?

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/






// 6th attempt - working
function solution(str, ending){
    let compareStr = str.split('').slice(-ending.length).join('');
    if(ending.length === 0) {
        return true;
    } else if(compareStr === ending) {
        return true;
    } else {
        return false;
    }
}

    // Better answer from solutions:
    function solution(str, ending){
        return str.endsWith(ending);
    }

    // As arrow function
    const solution = (str, ending) => str.endsWith(ending);




// 1st attempt
function solution(str, ending){
    let splitStr = str.split('');
    let splitEnding = ending.split('');
    if(splitStr[-(ending.length)] = splitEnding) {
        return true;
    } else {
        return false;
    }
}




// 2nd attempt
function solution(str, ending){
    let splitStr = str.split('');
    let splitEnding = ending.split('');
    if(splitStr.slice(-ending.length) = splitEnding) {
        return true;
    } else {
        return false;
    }
}




// 3rd attempt
function solution(str, ending){
    let splitStr = str.split('').slice(-ending.length);
    let splitEnding = ending.split('');
    if(splitStr = splitEnding) {
        return true;
    } else {
        return false;
    }
}
    // Expected solution('sumo', 'omo') to return false: expected true to equal false


    

// 4th attempt
function solution(str, ending){
    let compareStr = str.split('').slice(-ending.length).join('');
    if(compareStr = ending) {
        return true;
    } else {
        return false;
    }
}




// 5th attempt
function solution(str, ending){
    let compareStr = str.split('').slice(-ending.length).join('');
    if(compareStr === ending) {                                         // USED ASSIGNMENT INSTEAD OF COMPARISON -_-
        return true;
    } else {
        return false;
    }
}

    // Expected solution('abc', '') to return true: expected false to equal true