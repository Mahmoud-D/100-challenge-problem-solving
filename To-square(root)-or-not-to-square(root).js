/* 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/

/* 
problem analysis:
-1 We have an array of numbers
-2 We need to return an array
-3 If the number has an integer square root, take this, otherwise square the number
*/

/* 
steps of solution:
-1 Loop through the array
-2 Check if the number has an integer square root
-3 If it has an integer square root, return the square root of the number
-4 If it doesn't have an integer square root, return the square of the number
-5 Return the new array
*/

// function squareOrSquareRoot(array) {
//   return array.map((num) =>
//     Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num
//   );
// }

//another solution
/* function squareOrSquareRoot(array) {
  return array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
  );
} */

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); //[2, 9, 3, 49, 4, 1]
