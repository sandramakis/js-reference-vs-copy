"use strict";

// start with strings, numners and boolean

// copy
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Makis";

let name2 = "sandra";
console.log(name, name2);
name = "chiamaka";
console.log(name, name2);

// making a copy of an array
const players = ["Wes", "Josh", "Fireship", "Jonas"];
const team = players;

console.log(players, team);

// when we update the copy in an array, it updates the original
team[1] = "WebDev";

// it doesn't work because that is a reference, not a copy
console.log(players, team); // ['Wes', 'WebDev', 'Fireship', 'Jonas']

// solution?
let team2 = players.slice();
team2[2] = "Traversy"; // even when we change a value, it does not affect the original refernce
console.log(players, team2);

// or create a new array and concatenate
const team3 = [].concat(players);
console.log(players, team3);

// or use the ES6 spread
const team4 = [...players];
console.log(players, team4);

// or Array.from()
const team5 = Array.from(players);
console.log(players, team5);

// WITH OBJECTS
const person = {
  name: "Makis",
  age: 88,
};
console.log(person);

const captain = person;
captain.age = 90;
captain.number = 190;
console.log(captain); // adds a new peoperty number to the object
console.log(person); // changes the original

// solution
// Object.assign(curly braces, object to be copied, {values to be changed})
const cap2 = Object.assign({}, person, { number: 70, age: 15 });
console.log(cap2);

// objects ...spread
const cap3 = { ...person };
cap3.name = "Sarah";
console.log(cap3);
