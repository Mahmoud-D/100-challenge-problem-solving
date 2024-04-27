/* Create a function that takes an integer as an argument and returns
 "Even" for even numbers or "Odd" for odd numbers. */
/* 
Steps of solution:
1. Check if the number is even or odd
2. Use the modulo operator
3. Use the ternary operator
4. Return the result
 */

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(32));
