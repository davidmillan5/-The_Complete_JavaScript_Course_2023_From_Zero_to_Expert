'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  birthYear: 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: (birthYear) => {
  //   return 2023 - birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - years old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

// Any Function that it is attached to an object it is called a Method

// console.log(jonas.calcAge(1989));
// console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.calcAge());

console.log(jonas.age);

// Challenge

console.log(
  `${jonas.firstName} is ${jonas.age} old ${jonas.job}, and he ${
    jonas.hasDriversLicense
      ? 'has a drivers license'
      : 'does not have a drivers license'
  }`
);

console.log(jonas.getSummary());
