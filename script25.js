// triplets

// input Target - 12  and array - [2,4,6,3,5];
// o/p - 2,4,6

function findTriplets(arr, target) {
  const triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
            triplets.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return triplets;
}

let arr = [1, 4, 2, 6, 5, 3];
let target = 12;
const output = findTriplets(arr, target);
console.log(output);
