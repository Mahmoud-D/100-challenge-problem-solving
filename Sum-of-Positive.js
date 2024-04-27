/*
problem assessment:
You get an array of numbers, return the sum of all of the positives ones.
 */

/* 
steps of solution:
-1 Filter out the negative numbers
-2 Sum the positive numbers
-3 Return the sum 
*/
function positiveSum(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

/* // another solution

function positiveSum(arr) {

    let initValue = 0;
 
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] > 0) {
        initValue += arr[i];
      }

    }

    return initValue;
} */

console.log(positiveSum([1, -2, 2, 3, 4, 5])); //15
