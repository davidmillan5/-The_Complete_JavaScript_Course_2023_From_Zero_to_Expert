'use strict';

'use strict';

/**
 * Piece of code that you can Reuse
 */

function logger() {
  console.log(`My name is David`);
}

/**
 * To Use the Function
 */

logger(); //Invoking The Function / Calling The Function // Running The Function
logger(); //Invoking The Function / Calling The Function // Running The Function
logger(); //Invoking The Function / Calling The Function // Running The Function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(8, 5);
const orangeJuice = fruitProcessor(3, 9);
console.log(appleJuice);
console.log(orangeJuice);
