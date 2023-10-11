// 10/11/23 Wednesday Codewars 8 Kyu Fundamentals - A Needle in the Haystack

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Note: In COBOL, it should return "found the needle at position 6"
*/

// 3rd attempt - Working
function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === 'needle') {
            return `found the needle at position ${[i]}`
        }
    }
}


    // Better answer from solutions:
    function findNeedle(haystack) {
        return "found the needle at position " + haystack.indexOf("needle");
    }




// 1st attempt
function findNeedle(haystack) {
    array.forEach(value => value === 'needle' ? const needleIndex = value.index) 
}

// 2nd attempt
function findNeedle(haystack) {
    haystack.for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === 'needle') {
            return `found the needle at position ${[i]}`
        }
    }
}

