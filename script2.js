let names = ["shubh", "ram", "shyam", "hari", "radheya", "sanju"];
// for(let name in names){
//     console.log(names[name])
// }

// names.forEach((name)=>{
//     console.log(name);
// })


// slice ------->
// In JavaScript, slicing is typically done with arrays. Here's how you can use array slicing in JavaScript:

// const sliceNames = names.slice(1,4);  // 1 will be included and 4 will be excluded in the new array 
// console.log(sliceNames);


// splice ------> It modifies the original array 
// array.splice(startIndex, deleteCount, item1, item2, ...);

// - Remove a name from an array using splice 
// const newNames = names.splice(2, 1);
// console.log(`removed name is ${newNames}`)
// console.log(names);

// - Replace a name from array using splice
// const newNames = names.splice(2, 2, "replacedName-1", "replacedName-2");
// console.log(`removed name is ${newNames}`)
// console.log(names);

// - Add a name in the array using splice 
const newNames = names.splice(2, 0, "addedName-1", "addedName-2");
console.log(`removed name is ${newNames}-nothing removed`)
console.log(names);
