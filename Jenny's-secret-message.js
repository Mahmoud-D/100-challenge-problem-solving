/* Jenny has written a function that returns a greeting for a user. However,
 she's in love with Johnny, and would like to greet him slightly different. 
 She added a special case to her function, but she made a mistake. */

/* 
 problem analysis:
    -1 We have a name
    -2 We need to check if the name is Johnny
    -3 We need to return the greeting for Johnny
    -4 We need to return the greeting for other names
 */

/* 
 steps of solution:
-1 Check if the name is Johnny
-2 Return the greeting for Johnny
-3 Return the greeting for other names
*/

/* 
 function greet(name) {
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
} */

function greet(name) {
  return name !== "Johnny" ? "Hello, " + name + "!" : "Hello, my love!";
}
