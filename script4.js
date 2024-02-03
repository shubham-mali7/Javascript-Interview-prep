// FizzBuzz:
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

// over here else-if ladder will be used

for (let i = 1; i <= 100; i++) {
    // Both --> Fizz-Buzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz-Buzz");
    // Fizz for 3 
  } else if (i % 3 == 0) {
    console.log("Fizz");
    // Buzz for 5
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// prints no from 1 to 100
// for(let i=1; i<=100; i++){
//     console.log(i);
// }
