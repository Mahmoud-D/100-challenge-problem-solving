/* 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/

/* 
problem analysis:
-1 We have an array
-2 We need to find the position of the element "needle"
-3 We need to return a string
*/

/* 
 steps of solution:
-1 Loop through the array
-2 Check if the current element is equal to "needle"
-3 If it is equal to "needle" return the position of the element
-4 Return the string
 */

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

//another solution
/* function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
} */

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]) //found the needle at position 5
);
