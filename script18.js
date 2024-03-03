// function x(){
//     console.log("I am x");
// }

// function y(x){
// x();
// }

// y(x);

// over here y is a higher order function and x is a call back function

let radius = [2,4,6,3];

function calculateArea(radius){
    const output = [];
for(let i = 0; i<radius.length; i++){
output.push(Math.PI * radius[i] * radius[i]);
}

return output;
}
function calculateDiameter(radius){
    const output = [];
for(let i = 0; i<radius.length; i++){
output.push(2 * radius[i]);
}

return output;
}
function calculateCircumference(radius){
    const output = [];
for(let i = 0; i<radius.length; i++){
output.push(2 * Math.PI * radius[i]);
}

return output;
}

const area = calculateArea(radius);
const daimeter = calculateDiameter(radius);
const circumference = calculateCircumference(radius);
console.log(area);
console.log(daimeter);
console.log(circumference);

