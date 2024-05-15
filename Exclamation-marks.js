/* Remove an exclamation mark from the end of a string.
 For a beginner kata, you can assume that the input data is always a string,
  no need to verify it. */

/* 
  problem analysis:
    -1 We have one argument
    -2 We need to return a string
    -3 We need to remove an exclamation mark from the end of a string
  */

function remove(string) {
  return string.replace(/!$/, "");
}

console.log(remove("Hello World!")); //Hello World
