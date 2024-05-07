/* You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
but your son is too young to just appreciate the full number, 
he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), 
populate an array with all numbers up to and including that number, but excluding zero. */

/* 
problem analysis:
-1 We have one argument
-2 We need to return an array
-3 We need to return all numbers up to and including n
*/

/* 
steps of solution:
-1 Create an empty array
-2 Loop n times
-3 Push the numbers to the array
-4 Return the array
*/

function monkeyCount(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }
  return array;
}

console.log(monkeyCount(5)); //[1, 2, 3, 4, 5]
