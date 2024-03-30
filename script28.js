
// Find out second largest number from an array

function secondMaxNoFinder(arr) {
  // if array is empty
  if (arr.length == 0) {
    console.log("Array is empty");
  }

  let max = arr[0];
  let secondMax = -Infinity; // important step
  for (i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  if (arr[i] == -Infinity) {
    console.log("No second maximum found");
  }
  return secondMax;
}

const input = [2, 3, 5, 7, 6, 9, 9, 1];
const output = secondMaxNoFinder(input);
console.log(output);  // o/p - 7 



