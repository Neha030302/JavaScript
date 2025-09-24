/**
 * Operators in JavaScript
 * -----------------------
 * Operators are special symbols that perform operations on values and variables.
 * They help us manipulate data, perform calculations, and control logic.
 *
 * Categories of operators:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. Ternary Operator (Conditional)
 * 6. Type Operators
 * 
 * Equality Operators:
 * Loose equality: ==, != (perform type coercion).
 * Strict equality: ===, !== (no type coercion).
 */

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b);  // Addition
console.log("a - b =", a - b);  // Subtraction
console.log("a * b =", a * b);  // Multiplication
console.log("a / b =", a / b);  // Division
console.log("a % b =", a % b);  // Modulus (remainder)
console.log("a ** b =", a ** b); // Exponentiation

// 2. Assignment Operators
let x = 5;
console.log("\nAssignment Operators:");
x += 2;  // same as x = x + 2
console.log("x after += 2:", x);
x *= 3;  // same as x = x * 3
console.log("x after *= 3:", x);

// 3. Comparison Operators (returns Boolean)
console.log("\nComparison Operators:");
console.log("a == b:", a == b);   // Equal to (value)
console.log("a === b:", a === b); // Strict equal (value + type)
console.log("a != b:", a != b);   // Not equal
console.log("a > b:", a > b);     // Greater than
console.log("a < b:", a < b);     // Less than

// 4. Logical Operators
let truthy = true;
let falsy = false;
console.log("\nLogical Operators:");
console.log("true && false =", truthy && falsy); // AND
console.log("true || false =", truthy || falsy); // OR
console.log("!true =", !truthy);                 // NOT

// 5. Ternary Operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log("\nTernary Operator:");
console.log("Age check:", result);

// 6. Type Operators
console.log("\nType Operators:");
console.log("typeof a:", typeof a);      // returns 'number'
console.log("a instanceof Number:", a instanceof Number); // false (primitive not object)
