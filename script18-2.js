let radius = [2, 4, 6, 3];

function areaCalculator(radius) {
  return Math.PI * radius * radius;
}
function circumferenceCalculator(radius) {
  return 2 * Math.PI * radius;
}
function diameterCalculator(radius) {
  return 2 * radius;
}

Array.prototype.calculate = function(logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
}

// console.log(calculate(radius, areaCalculator));
// console.log(calculate(radius, circumferenceCalculator));
// console.log(calculate(radius, diameterCalculator));

console.log(radius.calculate(areaCalculator));
