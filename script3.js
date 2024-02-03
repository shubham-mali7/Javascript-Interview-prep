// Problem: Palindrome Checker

// Write a function isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false otherwise.

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// For example:

// isPalindrome("radar") should return true
// isPalindrome("Hello, World!") should return false
// isPalindrome("A man, a plan, a canal, Panama") should return true
// Ensure that your function handles different cases and edge cases appropriately.

function isPalindrome(str1) {
  // 1) reverse the given str
  let orginalStr = str1;
  let reverseStr = orginalStr.split("").reverse().join("");
  console.log(`revrese of the string is ${reverseStr}`);
  // 2) chcek wether the rev str is equal to the given str
  if (str1 == reverseStr) {
    console.log(`true, ${str1} is a palindrome`);
  } else {
    console.log(`false, ${str1} is not a palindrome`);
  }
}
isPalindrome("shubham"); // o/p: False

// to reverse a string --->
// let orgstring = "shubham";
// let revstring = orgstring.split('').reverse().join('')

// console.log(revstring);
