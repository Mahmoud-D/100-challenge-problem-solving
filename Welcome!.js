/* 
DESCRIPTION:
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
 Marketing thinks it would be great to welcome visitors to the site in their own language. 
 Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', 
with a type String, and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.
*/

/* 
problem analysis:
-1 we have one argument
-2 we need to return a string
-3 we need to return a greeting in the language if it is in the database
-4 we need to return a greeting in English if the language is not in the database
-5 we need to return a greeting in English if the input is invalid
*/

function greet(language) {
  let languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return languages[language] || languages.english;
}

console.log(greet("german")); //Willkommen
