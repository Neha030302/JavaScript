/*
  * Truthy Falsy
   ->all values are evaluated as either truthy or falsy when used in a boolean context (e.g., if statements, logical operators, or Boolean() conversion).
   ->Falsy Values: Values that evaluate to false when coerced to a boolean.
   ->Truthy Values: Values that evaluate to true when coerced to a boolean.
   ->All values that are not falsy are truthy.
 Examples of Truthy Values:
 Non-zero numbers (e.g., 1, -1, 3.14)
 Non-empty strings (e.g., "hello", "0", "false")
 Objects (e.g., {}, [], { name: "hello" })
 Arrays (even empty ones, e.g., [])
 Functions
 true
 Infinity, -Infinity

Context: Truthy/falsy evaluation occurs during:
Conditional statements (if, while, ternary operator).
Logical operations (&&, ||, !).
Explicit conversion with Boolean() or implicit coercion (e.g., !!value).
ECMAScript Spec: Governed by the ToBoolean abstract operation, which defines how values are converted to true or false.
 2. Falsy Values:
 ->false
 ->0 (and -0)
 ->"" (empty string)
 ->null
 ->undefined
 ->NaN
*/

"use strict";

console.log(Boolean(1)); // true
console.log(Boolean("anu")); // true
console.log(Boolean("0")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function () { })); // true

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false


if (0) {
    console.log("This won't run");
} else {
    console.log("0 is falsy"); // Prints
}

if (null) {
    console.log("This won't run");
} else {
    console.log("null is falsy"); // Prints
}

console.log(null == 0); // false
console.log(undefined == 0); // false

// Logical Operators:
// && (AND): Returns the first falsy value or the last value if all are truthy.
// || (OR): Returns the first truthy value or the last value if all are falsy.
// ! (NOT): Converts to boolean and negates (!truthy → false, !falsy → true).

console.log(0 && "anu"); // 0 (first falsy)
console.log("anu" || 0); // "anu" (first truthy)
console.log(!0); // true (falsy to true)
console.log(!"anu"); // false (truthy to false)


// Double Negation (!!): Converts a value to its boolean equivalent (same as Boolean(value)).
console.log(!!"neha"); // true
console.log(!!0); // false

let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`); // Prints for all
    }
});
// Output:
// false is falsy
// 0 is falsy
//  is falsy
// null is falsy
// undefined is falsy
// NaN is falsy


"use strict";

let truthyValues = [1, "anu", "0", {}, [], function () { }];
truthyValues.forEach(value => {
    if (value) {
        console.log(`${JSON.stringify(value)} is truthy`); // Prints for all
    } else {
        console.log(`${JSON.stringify(value)} is falsy`);
    }
});
// Output:
// 1 is truthy
// "anu" is truthy
// "0" is truthy
// {} is truthy
// [] is truthy
// function() {} is truthy