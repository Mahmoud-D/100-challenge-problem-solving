/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

/* 
problem analysis:
-1 We have one argument
-2 We need to return a string
-3 We need to reverse the string
*/

/* 
steps of solution:
-1 Split the string by empty string
-2 Reverse the array
-3 Join the array by empty string
-4 Return the string
*/

function solution(str) {
  return str.split("").reverse().join("");
}

// another solution
/* function solution(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
} */

console.log(solution("world")); //dlrow
