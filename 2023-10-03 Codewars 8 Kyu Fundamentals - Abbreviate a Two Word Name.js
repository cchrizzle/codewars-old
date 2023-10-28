// 10/03/23 Codewars 8 Kyu Fundamentals - Abbreviate a Two Word Name

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    const uppercaseName = name.toUpperCase();
    const nameSplit = uppercaseName.split(' ');
    const firstInitial = nameSplit[0][0];
    const lastInitial = nameSplit[1][0];
    return `${firstInitial}.${lastInitial}`
}
