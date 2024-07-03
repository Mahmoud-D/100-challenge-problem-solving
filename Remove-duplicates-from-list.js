/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same. */

/* 
problem analysis:
-1 We have an array of numbers
-2 We need to remove the duplicates
-3 We need to return the array
*/

/* 
steps of solution:
-1 Create a new array
-2 Loop through the array
-3 If the element is not in the new array, push it to the new array
-4 Return the new array
*/

function distinct(a) {
  return [...new Set(a)];
}

//another solution
/* function distinct(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!newArr.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
} */

console.log(distinct([1, 2, 3, 1, 2, 3]));
