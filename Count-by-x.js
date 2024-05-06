/* 
DESCRIPTION:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
*/

/* 
problem analysis:
-1 We have two arguments
-2 We need to return an array
-3 We need to return the first n multiples of x
*/

/* 
steps of solution:
-1 Create an empty array
-2 Loop n times
-3 Multiply x by i and push the result to the array
-4 Return the array
*/

function countBy(x, n) {
  let array = [];

  for (let i = 0; i < n; i++) {
    array.push(x * (i + 1));
  }

  return array;
}

console.log(countBy(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
