/* 
Find The Longest Word in a String
*/

/* 
problem analysis:
-1 We have a string
-2 We need to return a string
-3 We need to find the longest word in the string
*/
/* 
steps of solution:
-1 Split the string into an array
-2 Loop through the array
-3 Find the longest word in the array
-4 Return the longest word
*/

function LongestString(str) {
  return str
    .split(" ")
    .reduce((LongestString, current) =>
      LongestString.length > current.length ? LongestString : current
    );
}

console.log(LongestString("The quick brown fox jumped over the lazy dog"));
