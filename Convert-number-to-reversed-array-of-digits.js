/* Given a random non-negative number,
 you have to return the digits of this number within an array in reverse order. */

/* 
     problem analysis:
    -1 We have a number
    -2 We need to convert the number to an array
    -3 We need to reverse the array
    -4 We need to return the array
    */

/* 
 steps of solution:
    -1 Convert the number to a string
    -2 Split the string
    -3 Map the string to a number
    -4 Reverse the array
    -5 Return the array
 */

function digitize(n) {
  return String(n)
    .split("")
    .map((n) => +n)
    .reverse();
}

console.log(digitize(12345));
