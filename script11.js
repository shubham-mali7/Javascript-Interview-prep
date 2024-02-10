

// Filter out even numbers from an array 
function evenNumbers(arr) {
  return arr.filter((num) => {
    return num % 2 === 0;
  });
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
const newArray = evenNumbers(array);
console.log(newArray);
