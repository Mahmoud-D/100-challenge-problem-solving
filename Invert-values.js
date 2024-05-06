/* 
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return an array
-3 We need to return the additive inverse of each number
*/

/* 
steps of solution:
-1 Create an empty array
-2 Loop through the array
-3 Push the additive inverse of the number to the array
-4 Return the array
*/

function invert(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1);
  }
  return newArray;
}
//another solution
/* function invert(array) {
  return array.map((s) => s * -1);
}
 */
console.log(invert([1, 2, 3, 4, 5, -1, -3])); //[-1, -2, -3, -4, -5,  1, 3]
