'use strict';

//Function Declaration

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1989);
console.log(age1);

//Function Expression - Anonymous Function

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1989);
console.log(age2);
