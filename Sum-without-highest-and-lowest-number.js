/* Sum all the numbers of a given array ( cq. list ),
 except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.

Mind the input validation. */

/* problem analysis
1. We have an array of numbers
2. We need to sum all the numbers except the highest and the lowest
3. We need to sort the array
4. We need to slice the array from the second element to the second last element
5. We need to sum the numbers
6. We need to return the sum */

/* solution implementation
1. Create a function called sumArray
2. Check if the array is null
3. Sort the array in ascending order
4. Slice the array from the second element to the second last element
5. Sum the numbers
6. Return the sum */

function sumArray(array) {
  if (array === null) {
    return 0;
  }
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((prev, curr) => prev + curr, 0);
}
console.log(sumArray([1, 3, 4, 5, 6])); //14
