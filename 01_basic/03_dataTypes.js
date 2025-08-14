/*
JavaScript Data Types: Detailed Explanation with Examples
JavaScript has primitive and non-primitive data types. 
Below is a comprehensive overview of the data types mentioned in your code, with examples and key points.
1. Primitive Data Types
These are immutable, basic data types stored directly in memory.
Number:
Represents both integer and floating-point numbers.
Range: Approximately ±2⁵³ (specifically, ±2⁵³ - 1 due to 64-bit floating-point representation in IEEE 754).
Includes special values: Infinity, -Infinity, NaN (Not-a-Number).
Use Case: Arithmetic operations, calculations (e.g., prices, ages).

BigInt:
Introduced in ES2020 for integers larger than ±2⁵³ - 1.
Created by appending n to an integer or using the BigInt() constructor.
Use Case: Financial calculations, large IDs, or cryptographic operations requiring precise integer arithmetic.

String:
Represents a sequence of characters, enclosed in single ('), double ("), or backticks (`) for template literals.
Immutable (cannot be changed in place).
Use Case: Text manipulation, UI labels, API responses.

Boolean:
Represents true or false.
Used for logical operations and conditionals.
Use Case: Conditional logic, toggles, flags (e.g., isActive, hasPermission).

Null:
Represents the intentional absence of any value (a "standalone value").
Often used to indicate "no value" or "empty".
Historical Bug: typeof null returns "object", but it’s a primitive.
Use Case: Resetting variables, indicating missing data.

Undefined:
Represents a variable that has been declared but not assigned a value.
Also returned by functions with no return statement.
Use Case: Default state of uninitialized variables or missing function returns.

Symbol:
Introduced in ES6, represents a unique and immutable identifier.
Often used as unique property keys in objects to avoid naming collisions.
Use Case: Unique object keys, private properties, or defining special behaviors (e.g., Symbol.iterator).

typeof Operator Details

Returns a string indicating the type of a value.
Common outputs:

number: Numbers (e.g., 18, 99.99).
bigint: BigInt values.
string: Strings (e.g., "hitesh").
boolean: true or false.
undefined: Uninitialized variables or undefined values.
symbol: Symbol values.
object: Objects, arrays, and null (due to historical bug).
function: Functions (a subtype of object).
*/

let age = 18; // Integer
let price = 99.99; // Floating-point
console.log(1 / 0); // Infinity
console.log("abc" / 2); // NaN
console.log(typeof age); // "number"

let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("123456789012345678901234567890");
console.log(bigNumber + anotherBig); // 246913578024691357802469135780n
console.log(typeof bigNumber); // "bigint"

let name = "Neha";
let greeting = 'Hello, ' + name; // Concatenation
let template = `Hi, ${name}!`; // Template literal (ES6)
console.log(greeting); // "Hello, hitesh"
console.log(template); // "Hi, hitesh!"
console.log(typeof name); // "string"

let isLoggedIn = false;
let hasAccess = 10 > 5; // true
console.log(isLoggedIn); // false
console.log(typeof hasAccess); // "boolean"

let user = null; // No user assigned
console.log(user); // null
console.log(typeof user); // "object" (bug)
console.log(user === null); // true (check for null)

let state;
console.log(state); // undefined
function doNothing() {}
console.log(doNothing()); // undefined
console.log(typeof state); // "undefined"

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (each Symbol is unique)
let obj = {
  [id1]: "value1",
  [id2]: "value2"
};
console.log(obj[id1]); // "value1"
console.log(typeof id1); // "symbol"


console.log(typeof 42); // "number"
console.log(typeof "hitesh"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (bug)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof { name: "hitesh" }); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof function() {}); // "function"


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
