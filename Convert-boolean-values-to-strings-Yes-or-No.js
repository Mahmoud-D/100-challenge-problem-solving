/* Convert boolean values to strings 'Yes' or 'No'. */

/* 
problem analysis:
-1 We have a boolean value
-2 We need to convert the boolean value to a string
-3 We need to return 'Yes' if the boolean value is true
-4 We need to return 'No' if the boolean value is false
*/
/* 
steps of solution:
-1 Check if the boolean value is true
-2 Return 'Yes' if the boolean value is true
-3 Return 'No' if the boolean value is false
*/
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));
