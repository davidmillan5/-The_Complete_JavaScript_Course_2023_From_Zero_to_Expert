'use strict';

/**
 * calcTip Function
 */

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

// Tip bills

const bills = [125, 555, 44];
console.log(bills);

// Empty Array

const tips = [];

// loop to push

bills.forEach((element) => tips.push(calcTip(element)));

console.log(tips);

//Empty Array

const total = [];

// Loop to push a new value

const sum = bills.map(function (num, idx) {
  return total.push(num + tips[idx]);
});

console.log(total);

// Course Solution

// Create the function

const calcTipFun = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Create an array of bills

const bills1 = [125, 555, 44];

// Create an array of tips

const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills1, tips1);

const totals1 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals1);
