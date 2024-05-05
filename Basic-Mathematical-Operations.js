/* 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

/* 
problem analysis:
-1 We have three arguments
-2 We need to return a number
-3 We need to apply the operation on the two numbers
*/

/* 
steps of solution:
-1 Check the operation
-2 Apply the operation on the two numbers
-3 Return the result
*/

//note: you can solve with switch statement also
function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;
  if (operation == "-") return value1 - value2;
  if (operation == "*") return value1 * value2;
  if (operation == "/") return value1 / value2;
}

//another solution
/* function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
} */

console.log(basicOp("+", 4, 7)); //11
