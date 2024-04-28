/* Write a function that accepts an integer n and a string s as parameters,
 and returns a string of s repeated exactly n times.
 */

/* 
 problem analysis:
    1. We have a number and a string
    2. We need to repeat the string n times
    3. We need to return the repeated string
 */
/* 
solution implementation :
    1. Create a function called repeatStr
    2. Check if the number is less than 0
    3. Create a new string
    4. Use a for loop to repeat the string n times
    5. Return the new string
*/

function repeatStr(number, str) {
  if (number < 0) {
    return "invalid number";
  } else {
    return str.repeat(number);
  }
}

// another implementation
/* function repeatStr(number, str) {
  if (number < 0) {
    return "invalid number";
  }
  let newString = "";
  for (let i = 0; i < number; i++) {
    newString += str;
  }
  return newString;
} */

console.log(repeatStr(3, " repeat "));
