// Find Maximum Value:
// Write a function that finds the maximum value in an array of numbers.

let array = [6, 3, 7, 12, 33, 44, 21, 23, 9];
// let array = [];

function findMaxValue(arr) {
  // if array is empty
  if (arr.length == 0) {
    return "array is empty dude!";
  }
  // initialize max to first element of the array
  let max = arr[0];

  // iteration on the loop to find the max value
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i]; // to update the max value
    }
  }
  // Return the max value
  return max;
}
const result = findMaxValue(array);
console.log(result); // o/p - 44
