// 8/22/23 Codewars Selective fear of numbers - 7 kyu Fundamentals

/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/


var AmIAfraid = function(day, num) {
    let dayLCase = day.toLowerCase();
    if( (dayLCase === 'monday' && num === 12) || (dayLCase === 'tuesday' && num > 95) || (dayLCase === 'wednesday' && num === 34) || (dayLCase === 'thursday' && num === 0) || (dayLCase === 'friday' && num % 2 === 0) || (dayLCase === 'saturday' && num === 56) || (dayLCase === 'sunday' && ( (num === -666) || (num === 666) ) ) ) {
        return true;
    } else {
        return false;
    }
}
