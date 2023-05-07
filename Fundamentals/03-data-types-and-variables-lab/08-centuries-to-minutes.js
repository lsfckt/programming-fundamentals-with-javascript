function centuriesToMonutes(centuries) {

//Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.

let years = centuries * 100;
let days = Math.trunc(years * 365.2422);
let hours = days * 24;
let minutes = hours * 60;

console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMonutes(5)