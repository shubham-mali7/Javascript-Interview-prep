// palindrome without using reverse or slice

function palindromeCheck(input) {
  if (input == "") {
    return "enter some string";
  }

  function reverseTheString(input) {
    let reversedArray = [];
    for (let i = input.length - 1; i >= 0; i--) {
      reversedArray.push(input[i]);
    }
    return reversedArray.join("");
  }

  let reversedString = reverseTheString(input);

  if (reversedString == input) {
    return "It is a palindrome";
  } else {
    return "Not a Palindrome";
  }
}

let input = "radar";
let output = palindromeCheck(input);
console.log(output);

