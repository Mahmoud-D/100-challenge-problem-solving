/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

/* 
problem analysis:
-1 We have a string
-2 We need to return a string
-3 Each character of the string should be repeated once
*/
/* 
 steps of solution:
-1 Split the string into an array
-2 Loop through the array
-3 Repeat each character once
-4 Return the string
*/

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}

console.log(doubleChar("String")); //SSttrriinngg
