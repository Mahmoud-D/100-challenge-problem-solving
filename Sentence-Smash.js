/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
 You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful,
 there shouldn't be a space at the beginning or the end of the sentence!
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return a string
-3 We need to smash the words together into a sentence
*/

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"])); //hello world
