'use strict';

const jonas = [
  'Jonas',
  'Schedtmann',
  2023 - 1991,
  'Teacher',
  ['Michael', 'Peter', 'Steven'],
];

// Looping Backwards

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loop inside another Loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Excerise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
