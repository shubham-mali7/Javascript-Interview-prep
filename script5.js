// Factorial Calculation:
// Write a function to calculate the factorial of a given non-negative integer.

// Factorial of 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
  // base case
  if (n === 1 || n === 0) {
    return 1;
    // recursion
  } else {
    return n * factorial(n - 1);
  }
}

const ans = factorial(5);
console.log(ans);

// working
// factorial(5)
// 5 * factorial(5-1)
//           --> 4 * factorial(4-1)
//                         --> 3 * factorial(3-1)
//                                       --> 2 * factorial(2-1)
//                                                      --> 1

//                                                      which results in 5 x 4 x 3 x 2 x 1 = 120
