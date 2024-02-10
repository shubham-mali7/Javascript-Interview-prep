// function removeDuplicates(arr){
// return arr.filter((element, index, array)=>{
//     return array.indexOf(element) === index;
// })
// }
// let arrayWithDuplicates = [1,2,1,2,3,4,5,6,4];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log(arrayWithoutDuplicates);


//------------------------------------

let array = [1,2,3,1,2,1,1,1];

// let indexOfOne = array.indexOf(1);
// let indexOfTwo = array.indexOf(2);
// console.log(indexOfOne); // 0
// console.log(indexOfTwo) // 1

function removeDup(arr){
return arr.filter((element, index, array)=>{
    return array.indexOf(element) === index;
})
}

const cleanArray = removeDup(array)
console.log(cleanArray);