/* 
You need to write a function that reverses the words in a given string. A word can also fit an empty string. 
If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return a string
-3 We need to reverse the words in the string
*/

/* 
steps of solution:
-1 Split the string by space
-2 Reverse the array
-3 Join the array by space
-4 Return the string
*/

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World")); //World Hello
