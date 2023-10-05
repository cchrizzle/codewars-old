// 10/05/23 Thursday Codewars 7 Kyu Fundamentals - Categorize New Member

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data){
    return data.map(member => member[0] > 54 && member[1] > 7 ? 'Senior' : 'Open');
}




    // Better practice from solutions
    function openOrSenior(data) {
        return data.map( [age, handicap] => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
    }

        /* Explanation in comments:
        
            1. data: Array where each element has the form [age, handicap]
            
            2. data.map( function ): Returns a new array with the function invoked on each element in data. (i.e., transforms data from being [elem0, elem1, elem2, ...] to [function(elem0), function(elem1), function(elem2), ...]
            
            3. Destructuring: JavaScript allows you to destructure arrays. In essence, you are telling JavaScript

                I don't actually want to deal with this array as a whole unit. Let me extract whatever variables I care about from inside the array and directly use THOSE.

                So, destructuring allows you to do neat things like:

                    function(ageAndHandicap) {
                        const [age, handicap] = ageAndHandicap
                        // You've extracted `age` and `handicap` out as variables instead of having to deal with the entire array and using ageAndHandicap[0] and ageAndHandicap[1]
                    }

            4. However, we can go a step further. We can actually destructure ageAndHandicap directly in the argument list as so rather than doing it in the function body:

                    function([age, handicap]) {
                    // We destructured ageAndHandicap directly in the argument list!
                    }


            Tying it all together:

            The naive way of using map here would be data.map(function(element) { return (element[0] > 54 && element[1] > 7) ? 'Senior' : 'Open' }). This reads as

                For each element in data, map it into either 'Senior' or 'Open' according to this function

            Making it an arrow function: data.map((element) => (element[0] > 54 && element[1] > 7) ? 'Senior' : 'Open' })

            Finally, let's instead destructure the argument: data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open' })
            
            And that's how you arrive at this code snippet. Essentially, you are abstracting away the loop by using map, and abstracting away the structure of each element by extracting well-named variables out of it.
            */