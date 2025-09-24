/**
 * Arrow Functions in JavaScript
 * -------------------------------
 * Arrow functions provide a shorter syntax for writing functions in JS.
 * They are especially useful for callbacks and functional programming.
 *
 * ✅ Key Features:
 * 1. Shorter syntax
 * 2. Implicit return for single expression
 * 3. Lexical 'this' binding
 *
 * 👉 Real-world usage:
 * - Callbacks (map, filter, reduce)
 * - Event handlers
 * - Generating data dynamically
 * - Functional programming
 */

"use strict";

// 1️⃣ Basic Arrow Function
console.log("1️⃣ Basic Arrow Function:");
const greet = name => `Hello, ${name}!`;
console.log(greet("Neha")); // Hello, Neha!

// 2️⃣ Arrow Function with Multiple Parameters
console.log("\n2️⃣ Arrow Function with Multiple Parameters:");
const add = (a, b) => a + b;
console.log("5 + 7 =", add(5, 7)); // 12

// 3️⃣ Arrow Function with Block Body (Multiple Statements)
console.log("\n3️⃣ Arrow Function with Block Body:");
const multiplyArray = arr => {
    let result = [];
    for (let n of arr) result.push(n * 2);
    return result;
};
console.log("Double [1,2,3]:", multiplyArray([1, 2, 3])); // [2,4,6]

// 4️⃣ Arrow Functions with Array Methods
console.log("\n4️⃣ Arrow Functions + Array Methods:");
let nums = [1, 2, 3, 4, 5];

// map: double each number
const doubleNums = nums.map(n => n * 2);
console.log("Doubled numbers:", doubleNums); // [2,4,6,8,10]

// filter: get even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evens); // [2,4]

// reduce: sum of all numbers
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum); // 15

// 5️⃣ Arrow Functions and 'this' binding
console.log("\n5️⃣ Arrow Functions and 'this' binding:");
const obj = {
    name: "Neha",
    hobbies: ["coding", "music"],
    printHobbies: function () {
        // arrow function uses lexical 'this' of printHobbies
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};
obj.printHobbies();

// 6️⃣ Implicit Return Example
console.log("\n6️⃣ Implicit Return:");
const square = n => n * n;
console.log("Square of 7:", square(7)); // 49

// 7️⃣ Returning Objects
console.log("\n7️⃣ Returning Objects:");
const createUser = (name, age) => ({ name, age });
console.log(createUser("Neha", 25)); // {name: "Neha", age: 25}

// 8️⃣ Arrow Functions in Project-oriented Example: Table Generator
console.log("\n8️⃣ Project Example: Table Generator:");
const tableOf = n => [...Array(10).keys()].map(i => `${n} x ${i + 1} = ${n * (i + 1)}`);
console.log(tableOf(5));

// 9️⃣ Arrow Functions in Filtering / Project Use
console.log("\n9️⃣ Project Example: Filter & Transform:");
let students = [
    { name: "Neha", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Anita", marks: 72 }
];

// Filter students with marks >= 50
const passedStudents = students.filter(s => s.marks >= 50);
console.log("Passed Students:", passedStudents);

// Map to just names
const passedNames = passedStudents.map(s => s.name);
console.log("Names of passed students:", passedNames);

// 10️⃣ Nested Arrow Functions
console.log("\n🔟 Nested Arrow Functions:");
const outer = a => b => c => a + b + c;
console.log("Sum of 1,2,3:", outer(1)(2)(3)); // 6

// 11️⃣ Using Arrow Function with setTimeout (callback)
console.log("\n1️⃣1️⃣ Arrow Function with setTimeout:");
setTimeout(() => console.log("Executed after 1 second"), 1000);
