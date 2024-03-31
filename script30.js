// print inverted right angle star pattern:-

function printStarPattern(row) {
  let str = "";
  // outer loop for rows
  for (i = row; i > 0; i--) {
    //inner loop for col
    for (j = 0; j <= i - 1; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

const row = 6;
const op = printStarPattern(row);
console.log(op);

