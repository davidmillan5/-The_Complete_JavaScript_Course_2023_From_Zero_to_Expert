'use strict';

const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1989, 'David'));
