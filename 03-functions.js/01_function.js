/**
 * Functions in JavaScript
 * ------------------------
 * Functions are reusable blocks of code that perform a specific task.
 * They can accept parameters, return values, and be called multiple times.
 *
 * ✅ Types of Functions:
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Functions
 * 4. Immediately Invoked Function Expressions (IIFE)
 * 5. Constructor Functions
 * 6. Generator Functions
 * 7. Async/Await Functions
 *
 * 👉 Real-world usage:
 * - Reusable code blocks
 * - Data processing (arrays, objects)
 * - API calls
 * 
 */

"use strict";

// 1️⃣ Function Declaration
console.log("1️⃣ Function Declaration:");
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Neha")); // Hello, Neha!
console.log(greet());       // Hello, Guest!

// Example: Sum of array using function declaration
function sumArray(arr) {
    let sum = 0;
    for (let n of arr) sum += n;
    return sum;
}
console.log("Sum of [1,2,3,4]:", sumArray([1, 2, 3, 4]));

// 2️⃣ Function Expression
console.log("\n2️⃣ Function Expression:");
const multiply = function(a, b) {
    return a * b;
};
console.log("5 * 6 =", multiply(5, 6));

// Example: Factorial using function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log("Factorial of 5:", factorial(5));

// 3️⃣ Arrow Functions
console.log("\n3️⃣ Arrow Functions:");
const square = n => n * n;
console.log("Square of 7:", square(7));

const doubleArray = arr => arr.map(n => n * 2);
console.log("Double [1,2,3]:", doubleArray([1, 2, 3]));

// Example: Filter even numbers using arrow function
const evenNumbers = arr => arr.filter(n => n % 2 === 0);
console.log("Even numbers [1-10]:", evenNumbers([1,2,3,4,5,6,7,8,9,10]));

// 4️⃣ Immediately Invoked Function Expression (IIFE)
console.log("\n4️⃣ IIFE:");
(function() {
    console.log("IIFE executed immediately!");
})();

// Example: IIFE with parameters
(function(name) {
    console.log(`Hi, ${name}, this is an IIFE!`);
})("Neha");

// 5️⃣ Constructor Functions
console.log("\n5️⃣ Constructor Functions:");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return `Hi, I am ${this.name}, ${this.age} years old`;
    };
}
const p1 = new Person("Neha", 25);
console.log(p1.introduce());

// 6️⃣ Generator Functions
console.log("\n6️⃣ Generator Functions:");
function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = genNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// 7️⃣ Async/Await Functions
console.log("\n7️⃣ Async/Await Functions:");
async function fetchData() {
    return "Data loaded successfully!";
}
fetchData().then(console.log);

// 8️⃣ Nested Functions & Closure Example
console.log("\n8️⃣ Nested Functions & Closures:");
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
    };
}
const closureExample = outerFunction("OUTER");
console.log(closureExample("INNER"));

// 9️⃣ Project-oriented Example: Grade Calculation
console.log("\n9️⃣ Project Example: Grade Calculation:");
function calculateGrade(marks) {
    if (marks >= 90) return "A+";
    else if (marks >= 75) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 50) return "C";
    else return "F";
}
console.log("Grade for 82 marks:", calculateGrade(82));
console.log("Grade for 45 marks:", calculateGrade(45));

// 🔹 Bonus: Recursive function example
console.log("\n🔟 Recursive function example: Fibonacci nth term");
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(10):", fibonacci(10));
