// Anagram Check: (words with the same letters, just arranged differently. (Ex- listen and silent)
// Write a function to check if two strings are anagrams of each other.

// learnings :- !== --> sign of non equal to 

let string1 = "listen";
let string2 = "silent";

function anagramCheck(str1, str2) {
  if (str1.length !== str2.length) {
    return "not an anagram";
  }

  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        found = true;
        break; // Break out of the inner loop when a match is found
      }
    }
    if (!found) {
      return "not an anagram";
    }
  }

  return `${str1} and ${str2} are anagram`;
}

const anagram = anagramCheck(string1, string2);
console.log(anagram);