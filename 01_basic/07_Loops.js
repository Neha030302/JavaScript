/**
 * While Loop : The while loop repeatedly executes a block of code as long as its condition is truthy.
 * For Loop : The for loop iterates over a block of code a specific number of times, typically with an initializer, condition, and update expression. Syntax: for (init; condition; update).
 * Break and Continue Keywords: break exits a loop entirely, while continue skips the current iteration and proceeds to the next.
 * Do-while Loop: The do-while loop executes a block of code at least once, then repeats as long as its condition is truthy.
 */

let count = 1;

while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}

// Example 1: Sum numbers until reaching a limit
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log(`Sum: ${sum}`); // Sum: 55

// Example 2: Iterate over array
let fruits = ["apple", "banana", "orange"];
let index = 0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}



for (let i = 1; i <= 5; i++) {
  console.log(`Iteration: ${i}`);
}

// Example 1: Sum even numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(`Sum of evens: ${sum}`); // Sum of evens: 30

// // Example 2: Reverse array iteration
// let fruits = ["apple", "banana", "orange"];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }



for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip 3
  if (i === 5) break; // Exit at 5
  console.log(`Number: ${i}`);
}



// let count = 1;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count <= 5);


/**
 * for...of Loop: The for...of loop iterates over iterable objects (e.g., arrays, strings, maps, sets) to access their values directly. It’s part of ES6 (2015) and uses the Iterable Protocol (objects with a Symbol.iterator method).
 * Purpose: Iterates over values of iterable objects, not indices or keys.
 * Use Cases: Looping through array elements, string characters, or other iterables (e.g., Map, Set).
 * Simplifies array iteration compared to traditional for loops.
 * Ideal for processing collections without needing index access.
 * Key Points: Does not provide index by default (use .entries() for index-value pairs).
 * 
 * forin Loop: The forin loop iterates over the enumerable properties of an object (e.g., object keys or array indices). It’s primarily designed for objects but can be used with arrays (though not recommended).
 * Iterates over property names (keys) of objects, not values.
 */


// const fruits = ["apple", "banana", "orange"];
// let fruitCount = 0;

// for (const fruit of fruits) {
//   console.log(`Fruit: ${fruit}`);
//   if (fruit === "banana") {
//     fruitCount++;
//   }
// }

// console.log(`Found ${fruitCount} bananas`);


const user = {
  name: "neha",
  age: 18,
  isLoggedIn: true
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

for (const index in ["apple", "banana"]) {
  console.log(`Index: ${index}, Value: ${["apple", "banana"][index]}`);
}