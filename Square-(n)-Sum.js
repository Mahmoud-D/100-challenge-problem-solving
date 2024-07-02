/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return a number
-3 We need to square each number
-4 We need to sum the results together
*/

/* 
steps of solution:
-1 Create a function called squareSum
-2 Square each number
-3 Sum the results together
*/

function squareSum(numbers) {
  return numbers.map((num) => num * num).reduce((sum, num) => sum + num, 0);
}

//another solution
/* function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
} */

//another solution
/* function squareSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }

  return sum;
} */
