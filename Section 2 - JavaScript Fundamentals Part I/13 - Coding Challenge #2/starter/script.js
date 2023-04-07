//Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

const markMass1 = 78;
const markHeight1 = 1.69;

const johnMass1 = 92;
const johnHeight1 = 1.95;

markBMI1 = markMass1 / markHeight1 ** 2;
johnBMI1 = johnMass1 / johnHeight1 ** 2;

console.log(markBMI1);
console.log(johnBMI1);

const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(markHigherBMI1);

const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

markBMI2 = markMass2 / markHeight2 ** 2;
johnBMI2 = johnMass2 / johnHeight2 ** 2;

console.log(markBMI2);
console.log(johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

if (markBMI1 > johnBMI1) {
  console.log(
    `Mark's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI1}) is higher than Mark's BMI (${markBMI1})!`
  );
}

if (markBMI2 > johnBMI2) {
  console.log(
    `Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2}) !`
  );
} else {
  console.log(
    `John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})!`
  );
}
