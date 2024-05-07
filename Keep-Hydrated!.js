/* 
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink,
 rounded to the smallest value.
*/

/* 
problem analysis:
-1 We have one argument
-2 We need to return a number
-3 We need to return the number of litres Nathan will drink, rounded to the smallest value
*/

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(2)); //1
