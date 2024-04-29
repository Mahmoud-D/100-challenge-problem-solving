/* 
Very simple, given a number (integer / decimal / both depending on the language),
 find its opposite (additive inverse).
*/

/* 
problem analysis:
-1 We have a number
-2 We need to find the opposite of the number
-3 We need to return the opposite of the number
*/

/* 
steps of solution:
-1 Convert the number to the opposite
-2 Return the number
*/

function opposite(number) {
  return -number;
}

// another solutions
/* function opposite(number) {
  return number * -1;
} */

console.log(opposite(3));
