/* Write a function that returns a string in which firstname is swapped with last name.*/

/* 
problem analysis:
-1 We have a string
-2 We need to swap the first name with the last name
-3 We need to return the string
*/
/* 
 steps of solution:
-1 Split the string by space
-2 Reverse the array
-3 Join the array by space
-4 Return the string
*/

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john Doe"));
