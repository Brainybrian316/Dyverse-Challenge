

## My thought process

I started by sorting out the logic of the game. I had to think about how the game would work. I wanted to start by making sure i translated the test correctly. Therefore, I made one test case and a for loop to see if i can get the output to look like the test case without the number first. 

Then once i was sure that my test was translating properly i was able to start writing an algorithm to solve the game. I started by making a function that would take in the input and return the output. I started by realizing that i would need to iterate though every element of the 2d array which required a for loop. So I make a loop for the row using the input length and a loop for the column using the input length.

I then figured i could simplify my life and use a helper function to do bound checking rather than doing it in the main for loop. So, the helper function getCellValue will take in row and col because it will be used in the main for loop. It will return the value of the cell. 

My first if statement is to check if we are out of bounds and will return 0 if we are out of bounds. My second if statement is to check that the row is greater than or equal to the input length and will return 0 if we are out of bounds. My third if statement is to check that the column is greater than or equal to the input length and will return 0 if we are out of bounds.
The last if statement is to check if the input row and column are equal to the mine, which will return 1 to help us in the main for loop. otherwise, it will return 0.

After our first main for loop I call a variable called rowString and set it to an empty string. I do this so that we create a string for each row. Then i loop through the columns and write my if statements.

The first if statement will place a mine if our number is equal to 1 with the help of our helper function getCellValue.
otherwise we create a variable called mines and set it to 0. 
When we call mines we use our helper function to add or take away values from the mines depending on if the cell is a mine or not or if its near a mine.

