const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };


const func = (input1, input2) => {
  let obj = {};

  for (let i in input1) {
    if (input1[i] == input2[i]) {    
      obj[i] = input1[i];
    }
  }
  return obj;
};

const result = func(input1, input2);
console.log(result);


const op = { d: 10, e: 12 }; // This should be the o/p, order is not imp

// for loop
// const dosts = ["shubham", "Bhaskar", "Ram", "Krishna"];
// for(let i=0; i<dosts.length; i++){
//     console.log(dosts[i]);
// }

// for of loop - functions like for loop (easy syntax)
// for (let dost of dosts) {
//   console.log(dost);
// }

// forEach() is used for iterating over elements in arrays. It's a method provided by arrays, and it allows you to perform an action on each element of the array.
// dosts.forEach((dost)=>{
//     console.log(dost);
// })

// for in is used to access the index no in an array and key in an object of a key : value pair
// const cities = ["mumbai", "punjab", "delhi", "Pune", "Bangalore"];
// for (let city in cities) {
//   let cityName = cities[city];
//   console.log(cityName);
// }
