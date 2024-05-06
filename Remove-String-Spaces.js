/* 
Write a function that removes the spaces from the string, then return the resultant string.
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return a string
-3 We need to remove the spaces from the string
*/

/* 
steps of solution:
-1 Split the string by space
-2 Join the array by empty string
-3 Return the string
*/

function noSpace(x) {
  return x.split(" ").join("");
}

// another solution
/* function noSpace(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
} */

// another solution
/* function noSpace(str) {
    return str.replace(/\s/g, '');
  } */

console.log(noSpace("No spaces here!")); //Nospaceshere!
