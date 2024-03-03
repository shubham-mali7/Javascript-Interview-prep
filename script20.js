// create a palindrome program using reverse 

// ex: input - malyalam  , output - It is a palindrome


// using reverse and in 20.2 file --> without reverse 
function checkPlaindrome(input) {

if(input == ""){
    return "enter some string";
}

  let reversedStr = input.split("").reverse().join("");

  if (reversedStr === input) {
   return "Plaindrome"
  } else {
    return "not a palindrome";
  }
}


let input = "radar";
let output = checkPlaindrome(input);
console.log(output);
