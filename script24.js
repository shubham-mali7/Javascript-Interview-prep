function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Example: Print a right-angled triangle with 5 rows
  printStarPattern(5);
//   This code defines a function printSt