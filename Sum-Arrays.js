/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

/* 
problem analysis:
-1 We have an array of numbers
-2 We need to return the sum of the numbers
-3 We need to return 0 if the array does not contain any numbers
*/

/* 
steps of solution:
-1 Check if the array is empty
-2 If the array is empty, return 0
-3 Use the reduce method to sum the numbers
-4 Return the sum
*/

function sum(numbers) {
  "use strict";

  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
