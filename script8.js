
// form a new array of its multple of 2 using given array 

// learnings :- map, .push 

let array = [1,3,2,5,6,4,7,32,43,0]
let newArray = [];
function newArrayMaker(){
array.map((num)=>{
let res = num*2
newArray.push(res);
})
}

newArrayMaker();
console.log(array); // original array 
console.log(newArray) // new array 