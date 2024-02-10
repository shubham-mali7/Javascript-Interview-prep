// Remove Duplicates:
// Write a function to remove duplicates from an array.

function removeDuplicates(arr){
return arr.filter((element, index, array)=>{
    return array.indexOf(element)===index;
})
}

const arrayWithDuplicates = [1,1,1,2,3,4,4,5,5,6];
cleanArray = removeDuplicates(arrayWithDuplicates);
console.log(cleanArray); 