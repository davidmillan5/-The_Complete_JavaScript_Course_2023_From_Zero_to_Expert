'use strict';

/**
 *
 * Array Methods
 *
 *
 *
 */

const friends = ['Michael', 'Steven', 'Peter'];

// To add an element to the end of the array | Return a value,the length of the new array
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

//To add an element to the beginning of an array | Return a value,the length of the new array
const newLength2 = friends.unshift('John');
console.log(friends);
console.log(newLength2);

// Remove the Last element of an array | Also return anything (The pop element)

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove the first element of an array

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// Check a position in an array | Return the position

console.log(friends.indexOf('Steven'));

//
friends.push(23);

// ES6 Methods -> Include || Return True or False

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
