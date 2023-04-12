'use strict';

const jonas = [
  'Jonas',
  'Schedtmann',
  2023 - 1991,
  'Teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ....
// console.log(jonas[4]);

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling an array
  // types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020],
  ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// Continue and Break
console.log('---- Only Strings ------');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('------- Break With Number ------');
for (let i = 0; jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
