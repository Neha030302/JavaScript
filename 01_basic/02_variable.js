
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
JavaScript Variables: Declaration and Key Concepts
1. Variable Declarations
JavaScript uses three main keywords to declare variables: var, let, and const. Each has distinct behaviors and use cases.

var (Legacy, Function-Scoped)

Scope: Function-scoped (available throughout the function, ignores block {} boundaries).
Issues:

Not block-scoped, leading to unexpected behavior in loops/blocks.
Allows redeclaration in the same scope, which can cause bugs.
Hoisting: Variables are moved to the top of their scope, initialized as undefined, potentially causing confusion.

Avoid: Use only for legacy code or specific function-scoping needs.

Why Avoid var?
Block Scope Issue: var ignores {} blocks, causing bugs in loops (e.g., for loops with setTimeout).
Redeclaration Bugs: Accidental redeclarations overwrite values.
Hoisting Confusion: Accessing variables before declaration returns undefined.
*/

// for (var j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000); // Prints 3, 3, 3
// }
// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000); // Prints 0, 1, 2
// }

var x = 1;
var x = 2; //  Redeclaration allowed
console.log(y); // undefined (hoisted)
var y = 10;

/*
let (Modern, Block-Scoped)

Introduced in ES6 (2015) to address var issues.
Scope: Block-scoped (limited to {} blocks like if, for).
Features:

No redeclaration allowed in the same scope.
Temporal Dead Zone (TDZ): Cannot access variable before its declaration (prevents hoisting-related bugs).

Use: Default choice for variables that need to be reassigned.
*/

if (true) {
    let blockScoped = "Inside block";
    console.log(blockScoped); // ✅ Works
}
// console.log(blockScoped); // ❌ ReferenceError
// let x = 1;
// let x = 2; // ❌ SyntaxError (no redeclaration)
// console.log(y); // ❌ ReferenceError (TDZ)
// let y = 10;

/*
const (Block-Scoped, Immutable)

Scope: Block-scoped, like let.
Features:

Cannot be reassigned after declaration (but objects/arrays can have their contents modified).
Must be initialized at declaration.
Use: Preferred for values that shouldn’t change (e.g., constants, configuration values)
*/
const PI = 3.14;
// PI = 3.25; // ❌ TypeError
const obj = { value: 1 };
obj.value = 2; // ✅Allowed (object properties are mutable)

/*
Best Practices
Use let by default: Safer, block-scoped, avoids var issues.
Use const for immutable values: Improves code clarity and prevents accidental reassignments.
Avoid var: Only use for legacy code or specific function-scoping needs.
Descriptive Names: Choose meaningful names (e.g., userName over a).
Be Consistent: Stick to one naming convention across the project.
Avoid Single Letters: Except for loop counters (i, j, k).
Avoid Abbreviations: Unless widely understood (btn, msg, err).
Case-Sensitive: myVar ≠ myvar.
*/

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



/*
all values are evaluated as either truthy or falsy when used in a boolean context (e.g., if statements, logical operators, or Boolean() conversion).
Falsy Values: Values that evaluate to false when coerced to a boolean.
Truthy Values: Values that evaluate to true when coerced to a boolean.
Truthy Values

Definition: All values that are not falsy are truthy.
Examples of Truthy Values:

Non-zero numbers (e.g., 1, -1, 3.14)
Non-empty strings (e.g., "hitesh", "0", "false")
Objects (e.g., {}, [], { name: "hitesh" })
Arrays (even empty ones, e.g., [])
Functions
true
Infinity, -Infinity

Context: Truthy/falsy evaluation occurs during:
Conditional statements (if, while, ternary operator).
Logical operations (&&, ||, !).
Explicit conversion with Boolean() or implicit coercion (e.g., !!value).
ECMAScript Spec: Governed by the ToBoolean abstract operation, which defines how values are converted to true or false.
2. Falsy Values
List of Falsy Values:
false
0 (and -0)
"" (empty string)
null
undefined
NaN


Key Point: These are the only values in JavaScript that evaluate to false in a boolean context.
*/

"use strict";

console.log(Boolean(1)); // true
console.log(Boolean("anu")); // true
console.log(Boolean("0")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function() {})); // true

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
console.log("anu" || 0); // "hitesh" (first truthy)
console.log(!0); // true (falsy to true)
console.log(!"hitesh"); // false (truthy to false)


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

let truthyValues = [1, "anu", "0", {}, [], function() {}];
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