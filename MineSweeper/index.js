
function mineSweeper(input) {
  // helper function to do bounds checking 
  function getCellValue(row, col) {
    if (row < 0 || col < 0) return 0; // if out of bounds, return 0
    if (row >= input.length) return 0; // if out of bounds, return 0
    if (col >= input[row].length) return 0; // if out of bounds, return 0

    if (input[row][col] === '*') return 1; // if mine, return 1
    return 0; // if not mine, return 0
    }
  
    //  iterate through every element of the 2d array
  for(let row = 0; row < input.length; row++) { // for each row
    let rowString = ''; // create a string for each row
    for(let col = 0; col < input[row].length; col++) { // iterate through each column
      if (getCellValue(row, col) === 1) {
        rowString += '*'; // if mine, add * to string
      } else {
         let mines = 0;
      
         mines += getCellValue(row - 1, col + 1); // top-left
         mines += getCellValue(row - 1, col) // top 
         mines += getCellValue(row - 1, col - 1); // top-right

         mines += getCellValue(row, col - 1); // left
         mines += getCellValue(row, col + 1); // right

         mines += getCellValue(row + 1, col - 1); // bottom-left
         mines += getCellValue(row + 1, col); // bottom
         mines += getCellValue(row + 1, col + 1); // bottom-right
        rowString += mines;
    }
  }
  input[row] = rowString; // replace row with string
}

//  turn any 0s into spaces
for(let row = 0; row < input.length; row++) {
  input[row] = input[row].replaceAll('0', ' ');
}

return input;
}

module.exports = mineSweeper;
