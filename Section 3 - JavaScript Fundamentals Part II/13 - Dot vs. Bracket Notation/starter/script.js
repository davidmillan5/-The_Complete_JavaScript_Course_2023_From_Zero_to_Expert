'use strict';

/**
 * How to Retrieve Data from an Object
 */

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  age: 2023 - 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

//Getting a property from an object

console.log(jonas.lastName);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// If we don't know which property to show

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong Request! Choose between firstName, lastName, age, job, and friends'
//   );
// }

// How to use the dots and brackets notation to add new properties

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtman';

console.log(jonas);

// Challenge 'Jonas has 3 friends, and his best friend is called Michael

console.log(
  `Jonas has 3 friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);
