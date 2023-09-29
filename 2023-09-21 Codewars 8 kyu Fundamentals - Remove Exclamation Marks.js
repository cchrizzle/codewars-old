// 9/21/23 Codewars Remove exclamation marks - 8 kyu fundamentals

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let sSplit = s.split('');
    let noExclamationMarks = [];
    sSplit.forEach(letter => {
        if(letter !== '!') {
            noExclamationMarks.push(letter);
        }
    })
    
    return noExclamationMarks.join('');
}