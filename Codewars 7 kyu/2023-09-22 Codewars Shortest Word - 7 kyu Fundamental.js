// 9/22/23 Codewars Shortest Word - 7 kyu Fundamentals
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    s.forEach(word => {
        word.split('');

    })
}


    // from solutions
    function findShorts(s) {
        return Math.min(...s.split(' ').map (s => s.length))
    }




    // Another solution
    function findShort(s){
        var arr = s.split(' ');
        var smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i].length < smallest.length){
                smallest = arr[i];
            }
        }
        return smallest.length;
    }