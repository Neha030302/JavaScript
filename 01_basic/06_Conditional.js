/*
if-else Statements
The if-else statement executes a block of code if a condition is truthy; 
otherwise, it executes an optional else block. It’s used for basic conditional logic.
Used for checking multiple conditions (including ranges and complex logical expressions).
Works with any boolean condition (true/false).
Can be nested (if inside another if).
 */
"use strict";

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}


/*
If-else Statement Explanation
The if-else statement evaluates a condition (truthy/falsy) and executes one of two code blocks:
If Block: Runs if the condition is truthy.
Else Block: Runs if the condition is falsy (optional).
Example Breakdown
age >= 18: Compares age (18) with 18 using >=. Since 18 >= 18 is true (truthy), the if block runs, logging "You are an adult".
If age were less than 18, the else block would run.
Uses let for block-scoped variable declaration, aligning with modern practices.
Key Points
Conditions rely on truthy/falsy evaluation (e.g., 0, "", null are falsy; non-empty strings, non-zero numbers are truthy).
Use === for comparisons to avoid type coercion (e.g., "18" == 18 is true, but "18" === 18 is false).
"use strict" ensures safer code by preventing undeclared variables.

Best Practices
Use explicit comparisons (===) for clarity.
Keep conditions simple and readable.
Use let or const for variable declarations.
 */

/**
 * Ternary Operator: The ternary operator (?:) is a concise alternative to if-else, evaluating a condition and returning one of two values. Syntax: condition ? valueIfTrue : valueIfFalse.
 * && and || Operators: The logical operators && (AND) and || (OR) are used for combining conditions or short-circuit evaluation. They return values based on truthy/falsy evaluation, not always booleans.
 * Nested If-else: Nested if-else statements involve if or else blocks containing additional if-else statements, used for complex conditional logic.
 * If-elseif-else: The if-elseif-else structure tests multiple conditions sequentially, executing the first truthy condition’s block or an optional else block.
 * Switch Statement: The switch statement evaluates an expression and executes a block of code based on matching case values, with an optional default block.
 */


let isAdult = 18 >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Adult


let isLoggedIn = true;
let hasPermission = "admin";

console.log(isLoggedIn && hasPermission); // "admin"
console.log(isLoggedIn || hasPermission); // true


"use strict";

let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You need a license");
  }
} else {
  console.log("You are too young");
}



let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  default:
    console.log("Regular day");
}