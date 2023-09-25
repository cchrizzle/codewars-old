// 8/28/23 Codewars Even or Odd - 8 kyu Fundamentals

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if(number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }