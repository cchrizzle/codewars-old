// 10/09/23 Monday Codewars 7 Kyu Fundamentals - Match My Husband

/*
It is 2050 and romance has long gone, relationships exist solely for practicality.

MatchMyHusband is a website that matches busy working women with perfect house husbands. You have been employed by MatchMyHusband to write a function that determines who matches!!

The rules are... a match occurs providing the husband's "usefulness" rating is greater than or equal to the woman's "needs".

The husband's "usefulness" is the SUM of his cooking, cleaning and childcare abilities and takes the form of an array .

usefulness example --> [15, 26, 19]   (15 + 26 + 19) = 60

Every woman that signs up, begins with a "needs" rating of 100. However, it's realised that the longer women wait for their husbands, the more dissatisfied they become with our service. They also become less picky, therefore their needs are subject to exponential decay of 15% per month. https://en.wikipedia.org/wiki/Exponential_decay

Given the number of months since sign up, write a function that returns "Match!" if the husband is useful enough, or "No match!" if he's not.
*/




// 3rd attempt after looking up exponential decay formula - Working!
function match(usefulness, months) {
    const useScore = usefulness.reduce( (acc, c) => acc += c, 0);
    const totalDecay = 100 * (1 - .15)**months;                 // Exponential decay formula: f(x) = a (1 - r)^x : a = initial amount, r = rate of decay, x = time
    return useScore >= totalDecay ? 'Match!' : 'No match!'
}

    // From solutions
    function match(usefulness, months) {
        let total = usefulness.reduce((acc,ele)=>acc+ele)
        let needsRating = 100 * (Math.pow(1 - 0.15, months))        // Math.pow function instead of my **
        return total >= needsRating ? "Match!" : "No match!"
      }





// 1st attempt
function match(usefulness, months) {
    const useScore = usefulness.reduce( (acc, c) => acc += c, 0);
    const totalDecay = 100 - (15 * months);
    return useScore >= totalDecay ? 'Match!' : 'No match!'
}



// 2nd attempt
function match(usefulness, months) {
    const useScore = usefulness.reduce( (acc, c) => acc += c, 0);
    const totalDecay = 100 - (15 * months);
    if(useScore >= totalDecay) {
        return 'Match!';
    } else {
        return 'No match!';
    }
}

