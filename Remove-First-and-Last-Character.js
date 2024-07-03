/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters. */

/* 
problem analysis:
-1 We have one argument
-2 We need to return a string
-3 We need to remove the first and last character of the string
*/

/* 
steps of solution:
-1 Split the string
-2 Remove the first character
-3 Remove the last character
*/

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

//another solution
/* function removeChar(str) {
    let result = '';
    for (let i = 1; i < str.length - 1; i++) {
        result += str[i];
    }
    return result;
  } */

console.log(removeChar("Hello")); //ell
