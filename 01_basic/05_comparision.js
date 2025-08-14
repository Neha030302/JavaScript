/*
Comparison Operators
JavaScript provides several operators for comparing values:
Relational Operators: >, <, >=, <= (compare order, return true/false).
Equality Operators:
Loose equality: ==, != (perform type coercion).
Strict equality: ===, !== (no type coercion).

Loose Equality (==, !=):

Performs type coercion using Abstract Equality Comparison (ECMAScript spec).
Rules:

Same types: Compare directly (e.g., 2 == 2 → true).
Different types: Coerce to a common type (usually via ToNumber or ToPrimitive).
null and undefined: null == undefined → true, but null == 0 → false.
String vs. Number: String → Number (e.g., "2" == 2 → true).
Boolean: Coerced to number (e.g., true == 1 → true).
Behavior: Comparisons often involve type coercion (implicit conversion), especially with == or when comparing mixed types (e.g., string vs. number). The ECMAScript spec defines these via abstract operations like Abstract Equality Comparison and Strict Equality Comparison.
*/

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

"use strict";

// Numeric Comparisons
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// String vs. Number (with explicit conversion for clarity)
let str = "2";
console.log(Number(str) > 1); // true
console.log(Number("02") > 1); // true

// Comparisons with null
console.log(null > 0); // false (null → 0)
console.log(null == 0); // false (null only equals undefined)
console.log(null >= 0); // true (null → 0)

// Comparisons with undefined
console.log(undefined == 0); // false
console.log(undefined > 0); // false (undefined → NaN)
console.log(undefined < 0); // false (undefined → NaN)

// Strict Equality
console.log("2" === 2); // false (different types)
console.log(Number("2") === 2); // true (explicit conversion)