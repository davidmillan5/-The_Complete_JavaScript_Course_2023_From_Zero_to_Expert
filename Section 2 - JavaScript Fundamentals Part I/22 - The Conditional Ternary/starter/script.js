// The Conditional Operator (Ternary Operator)
//Allow us to write something similar to an if/else statement but all in one line.
//An operator always produces a value, an operator always produces a value.
//An operator is an expression.

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷'): console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(drink2);

//Using it in a template literal

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
