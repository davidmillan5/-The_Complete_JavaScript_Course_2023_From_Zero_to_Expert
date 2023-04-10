'use strict';

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};
const john = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

const comparison = markBMI > johnBMI;

console.log(comparison);

if (comparison) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${markBMI}) is higher than ${john.firstName} ${john.lastName}'s (${johnBMI})`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${johnBMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${markBMI})`
  );
}

// Course Solution

const mark2 = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI2: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john2 = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI2: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark2.calcBMI2();
console.log(mark2.bmi);

john2.calcBMI2();
console.log(john2.bmi);

if (mark2.bmi > john2.bmi) {
  console.log(
    `${mark2.fullName}'s BMI (${mark2.bmi}) is higher than ${john2.fullName}'s BMI (${john2.bmi})`
  );
} else if (john2.bmi > mark2.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john2.bmi}) is higher than ${mark2.fullName}'s BMI (${mark2.bmi})`
  );
}
