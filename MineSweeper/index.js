
function mineSweeper(input) {
  let boundary = input[0]; // +------+
  //  checking if the boundary is the correct length ex: 5x5 board 
  if(boundary.length !== input[1].length) {
    throw new Error('Invalid boundary length');
  };
  // checking if boundary has a + at the beginning and at the end and - in between
  if(!/^(\+)(\-+)(\+)$/gm.test(boundary) || !/^(\+)(\-+)(\+)$/gm.test(input[input.length - 1])) {
    throw new Error('Invalid boundary pattern');
  };
  // setting the boundary to the first row of the input array
  let rowLength = input[1].length;

  input = input.slice(1); // remove the first line of input
  
  // helper function to do bounds checking 
  function getCellValue(row, col) {
    if (row < 0 || col < 0) return 0; // if out of bounds, return 0
    if (row >= input.length) return 0; // if out of bounds, return 0
    if (col >= input[row].length) return 0; // if out of bounds, return 0

    if (input[row][col] === '*') return 1; // if mine, return 1
    return 0; // if not mine, return 0
    };
  
    //  iterate through every element of the 2d array
  for(let row = 0; row < input.length - 1; row++) { // for each row
    // checking if all rows are the same length ex: row 1 is 5 long and row 2 is 5 long.
    if(input[row].length !== rowLength) {
      throw new Error('Invalid board');
    }
    // check if all rows have "|" at the beginning and end and " " in between 
    if(!/^(\|)[ \*]+(\|)$/gm.test(input[row])) { // also checks for invalid characters
      throw new Error('invalid Character or pattern');
    }
    let rowString = ''; // create a string for each row
    for(let col = 1; col < input[row].length -1; col++) { // iterate through each column
      if (getCellValue(row, col) === 1) {
        rowString += '*'; // if mine, add * to string
      } else {
         let mines = 0;
        
        //  += adds to the value of the variable
         mines += getCellValue(row - 1, col + 1); // top-right
         mines += getCellValue(row - 1, col) // top 
         mines += getCellValue(row - 1, col - 1); // top-left

         mines += getCellValue(row, col - 1); // left
         mines += getCellValue(row, col + 1); // right

         mines += getCellValue(row + 1, col - 1); // bottom-left
         mines += getCellValue(row + 1, col); // bottom
         mines += getCellValue(row + 1, col + 1); // bottom-right
        rowString += mines;
    }
  }
  input[row] = `|${rowString}|`// reassign input[row] to be the the value of rowString
}

//  turn any hanging 0s into empty spaces
for(let row = 0; row < input.length; row++) {
  input[row] = input[row].replaceAll('0', ' '); 
}
input.unshift(boundary); // add the boundary to the top of the array

// return the array
return input;
}

module.exports = mineSweeper;
