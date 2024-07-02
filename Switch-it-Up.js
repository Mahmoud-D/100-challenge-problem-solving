/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". */

/* 
problem analysis:
  -1 We have one argument
  -2 We need to return a string
  -3 We need to return a word from a number between 0-9


*/

/* 
steps of solution:
  -1 Switch the number
  -2 Return the word
*/

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}
