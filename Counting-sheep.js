/* Consider an array/list of sheep where some sheep may be missing from their place.
 We need a function that counts the number of sheep present in the array (true means present). */

/* 
problem analysis:
-1 We have an array of sheep
-2 We need to count the number of sheep present
-3 We need to return the number of sheep present
*/

/* 
steps of solution:
-1 Filter out the missing sheep
-2 Count the number of present sheep
-3 Return the number of present sheep
*/

function countSheeps(sheep) {
  // TODO
  return sheep.filter((n) => n == 1).reduce((sum, num) => sum + num, 0);
}
console.log(countSheeps([true, false, true, false]));
