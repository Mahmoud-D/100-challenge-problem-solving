/* 
Build a function that takes in two arguments (salary, bonus). 
Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10.
 If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
*/

/* 
problem analysis:
-1 We have two arguments
-2 We need to return a string
-3 We need to check if the bonus is true or false
-4 If the bonus is true, the salary should be multiplied by 10
-5 If the bonus is false, the fatcat did not make enough money and must receive only his stated salary

*/

/* 
steps of solution:
-1 Check if the bonus is true
-2 If true, multiply the salary by 10
-3 If false, return the salary
-4 Return the salary
*/

function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}

//another solution
/*  function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
 } */

console.log(bonusTime(10, true));
