/*
What is Type Conversion?
Type conversion (or type coercion) is the process of converting a value from one data type to another, 
either explicitly (developer-controlled) or implicitly (automatically by JavaScript).
Types:
Explicit Conversion: Using functions like Number(), String(), Boolean().
Implicit Conversion (Coercion): JavaScript automatically converts types based on operators or context.

ECMAScript Spec: Governed by abstract operations like ToNumber, ToString, ToBoolean, and ToPrimitive (see https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion).
Impact:
Simplifies operations but can lead to unexpected results if not understood.
Affects readability, debugging, and performance in complex applications.

Best Practice: Prefer explicit conversion for clarity and avoid relying on implicit coercion.

Key Abstract Operations (ECMAScript Spec)
These internal operations define how JavaScript handles type conversions:

ToNumber: Converts a value to a number.
Rules:
String: Numeric strings → number ("33" → 33), non-numeric → NaN ("abc" → NaN), empty string → 0 ("" → 0).
Boolean: true → 1, false → 0.
null → 0, undefined → NaN.
Object: Calls ToPrimitive, then converts result.

ToString:Converts a value to a string.
Rules:
Number: Converts to string representation (33 → "33").
Boolean: true → "true", false → "false".
null → "null", undefined → "undefined".
Object: Usually [object Object], unless custom toString is defined.

ToBoolean:Converts a value to true or false.
Falsy Values: false, 0, -0, "", null, undefined, NaN.
Truthy Values: All other values (e.g., non-empty strings, objects, non-zero numbers).

ToPrimitive:Converts objects to primitives (used in operations like + or ==).
Uses valueOf or toString based on the operation’s "hint" (number or string).
*/

// console.log(Number("33")); // 33
// console.log(Number("33abc")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

console.log(String(33)); // "33"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String({})); // "[object Object]"

console.log(Boolean("neha")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean({})); // true

let obj = { valueOf: () => 42 };
console.log(+obj); // 42 (ToPrimitive → valueOf → number)


"use strict";

// String to Number
let score = "hitesh";
let valueInNumber = Number(score);
console.log(typeof valueInNumber, valueInNumber); // "number", NaN

// String to Boolean
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// Number to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); // "33", "string"

// Arithmetic Operations
let value = 3;
console.log(-value); // -3
console.log(2 + 2); // 4
console.log(2 ** 3); // 8

// String Concatenation
let str1 = "hello";
let str2 = " hitesh";
console.log(str1 + str2); // "hello hitesh"

// Mixed Type Operations (with explicit conversion)
console.log(Number("1") + 2 + 2); // 5
console.log(1 + 2 + "2"); // "32"

// Complex Expression
console.log((3 + 4) * 5 % 3); // 2

// Unary Plus
console.log(Number(true)); // 1 (explicit for clarity)
console.log(Number("")); // 0

// Multiple Assignments
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All 4
console.log(num1, num2, num3); // 4, 4, 4

// Increment
let gameCounter = 100;
console.log(++gameCounter); // 101

if ("0") console.log("Truthy"); // Prints (non-empty string)
if (0) console.log("Falsy"); // Skips

console.log(Number("1") + 2 + 2); // 5 (explicit)
console.log((1 + 2) + "2"); // "32" (clear precedence)

// Handle Edge Cases: Check for NaN with isNaN() or Number.isNaN().
let result = Number("abc");
if (isNaN(result)) console.log("Invalid number"); // Prints

console.log({} + 1); // "[object Object]1" (object to string, then concatenation)

// Bugs:Using == (loose equality) triggers coercion, which can cause errors.
console.log("1" == 1); // true (coerces string to number)
console.log("1" === 1); // false (no coercion)

