/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */
/* 

problem analysis:
-1 we have an array of marks
-2 we need to calculate the average of the marks
-3 we need to return the average rounded down to the nearest integer
*/

/* 
steps of solution:
-1 calculate the sum of the marks
-2 calculate the average of the marks
-3 return the average rounded down to the nearest integer
*/

function getAverage(marks) {
  let sum = marks.reduce((total, mark) => total + mark, 0);
  return Math.floor(sum / marks.length);
}
console.log(getAverage([20, 40, 30, 50]));
