// Palindrome

function reverseTheString(str) {
  return str.split("").reverse().join("");
}

function palindromeCheck(str2) {
  if (reversedString === str2) {
    return `${str2} is a Palindrome`;
  } else {
    return `${str2} is not a Palindrome`;
  }
}
let ogString = "ravi";
var reversedString = reverseTheString(ogString);
console.log(`reverse of ${ogString} is ${reversedString}`);
let ifPalindrome = palindromeCheck(ogString);
console.log(ifPalindrome);
