// reverse the string without using reverse method 

function reverseTheString(input) {
  const reversedArray = [];

  // reverse for loop
  for (i = input.length - 1; i >= 0; i--) {
    reversedArray.push(input[i]);
  }
  return reversedArray.join('')
}

let input = "shubham";
const output = reverseTheString(input);
console.log(output);    

// op - mahbuhs