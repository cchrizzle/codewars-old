// 10/14/23 Saturday Codewars 7 Kyu Fundamentals - Count the Divisors of a Number

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

// 2nd attempt after looking online
function getDivisorsCnt(n){
    let divisors = 0;
    for(let i = 0; i * i <= n; i++) {
        if(n % i === 0) {
            if(i * i === n) {
                divisors += 1;
            } else {
                divisors += 2;
            }
        }
    }
    return divisors;
}

// 1st attempt
function getDivisorsCnt(n){
    let divisors = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divisors += 1;
        }
    }
    return divisors;
}

    /* Simple tests and medium tests passing, code times out for big test - "STDERR
    Execution Timed Out (12000 ms)
    Why did my code time out?

    Our servers are configured to only allow a certain amount of time for your code to execute. In rare cases the server may be taking on too much work and simply wasn't able to run your code efficiently enough. Most of the time though this issue is caused by inefficient algorithms. If you see this error multiple times you should try to optimize your code further. "
    */