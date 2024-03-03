// given is the array of radius of few circles, calculate the area from it

let radius = [2, 3, 4, 5, 6];

const area = radius.map((rad) => {
  return Math.PI * rad * rad;
});

const diameter = radius.map((rad) => {
  return 2 * rad;
});

const circumference = radius.map((rad) => {
  return 2 * Math.PI * rad;
});

console.log(area);
console.log(diameter);
console.log(circumference);