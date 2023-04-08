'use strict';

/**
 *
 * First Data Structure
 * Bundle Data Together
 * It is a big container to throw in variables and then reference them
 *
 */

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

/**
 *
 * Two ways to create arrays
 *
 */

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(years1);

/**
 *
 * How to extract information from an array
 *
 */

console.log(friends[0]);
console.log(friends[2]);

// Length Property -> Will be check later (Give us the number of elements in an array)

console.log(friends.length);

// To get the last element in an array

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends[2]);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

console.log(jonas.length);

/**
 *
 * Exercise
 *
 */

const calcAge = (birthYear) => {
  return 2023 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]),
  age2 = calcAge(years[1]),
  age3 = calcAge(years[2]),
  age4 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3, age4);

const ages = [age1, age2, age3, age4];
console.log(ages);
