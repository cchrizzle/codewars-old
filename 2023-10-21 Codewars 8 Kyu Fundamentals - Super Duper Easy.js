// 10/21/23 Sunday Codewars 8 Kyu Fundamentals - Super Duper Easy

// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x){
    if(typeof x === 'number') {
        return x * 50 + 6;
    }
    return 'Error';
}