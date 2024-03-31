// print Right angle star pattern;

function printCenterStar(row) {
  let str = "";
  // outer loop is for rows
  for (i = 1; i <= row; i++) {
    for (j = 0; j < i; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

const row = 4;
const op = printCenterStar(row);
console.log(op);
