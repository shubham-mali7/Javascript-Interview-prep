// Write a function that takes a string as input and returns the string reversed.

function reverseAString(str){
return str.split("").reverse().join("");
}
const ogString = "shubham"
const reversedString = reverseAString(ogString);
console.log(reversedString); // o/p - mahbuhs