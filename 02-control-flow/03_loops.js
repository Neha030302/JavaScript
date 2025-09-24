/**
 * Loops in JavaScript
 * -------------------
 * Loops are used to execute a block of code multiple times.
 * They help automate repetitive tasks.
 *
 * ✅ Types:
 * 1. for loop       -> fixed iteration
 * 2. while loop     -> conditional iteration
 * 3. do-while loop  -> executes at least once
 * 4. for...of       -> iterate over iterable (array, string)
 * 5. for...in       -> iterate over object properties
 *
 * 🔹 Special Keywords:
 * - break: exits the current loop immediately
 * - continue: skips the current iteration and continues the loop
 *
 * 👉 Real-world usage:
 * - Displaying lists or tables
 * - Iterating through API response arrays
 * - Generating dynamic HTML
 * - Calculations like factorial, fibonacci
 * - Filtering data, breaking loops when condition met
 */

"use strict";

// 1. Basic for loop
console.log("1️⃣ Basic for loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// 2. while loop
console.log("\n2️⃣ while loop:");
let j = 1;
while (j <= 5) {
    console.log("Count:", j);
    j++;
}

// 3. do-while loop
console.log("\n3️⃣ do-while loop:");
let k = 6;
do {
    console.log("Do-while value:", k);
    k++;
} while (k <= 5);

// 4. for...of loop (arrays)
console.log("\n4️⃣ for...of loop:");
let fruits = ["🍎 Apple", "🥭 Mango", "🍌 Banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 5. for...in loop (object)
console.log("\n5️⃣ for...in loop:");
let user = { name: "Neha", age: 25, role: "developer" };
for (let key in user) {
    console.log(key + ":", user[key]);
}

// 6. Nested loops (table/grid)
console.log("\n6️⃣ Nested loops:");
for (let row = 1; row <= 3; row++) {
    let rowValues = "";
    for (let col = 1; col <= 3; col++) {
        rowValues += `[${row},${col}] `;
    }
    console.log(rowValues);
}

// 7. Fibonacci sequence
console.log("\n7️⃣ Fibonacci sequence:");
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(", "));

// 8. Multiplication table of 5
console.log("\n8️⃣ Multiplication table of 5:");
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 9. Filter even numbers from array
console.log("\n9️⃣ Filter even numbers:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let n of numbers) {
    if (n % 2 === 0) {
        evenNumbers.push(n);
    }
}
console.log("Even numbers:", evenNumbers);

// 10. Break example (stop loop when condition met)
console.log("\n🔟 Break example:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Loop stopped at", i);
        break;
    }
    console.log(i);
}

// 11. Continue example (skip iteration)
console.log("\n1️⃣1️⃣ Continue example (skip odd numbers):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i); // prints only even numbers
}

// 12. Print table 1 to 100 (formatted)
// console.log("\n1️⃣2️⃣ Print table 1 to 100 (formatted):");

// for (let i = 1; i <= 10; i++) { // rows
//     let line = "";
//     for (let j = 1; j <= 10; j++) { // columns
//         let value = i * j;
//         line += value.toString().padStart(4, " "); // pad with spaces for alignment
//     }
//     console.log(line);
// }


// 13. project example: Filtering & breaking on condition
console.log("\n1️⃣3️⃣ Filter numbers >50 and stop at 75:");
let nums = [10, 20, 30, 55, 60, 70, 75, 80, 90];
for (let n of nums) {
    if (n > 75) break;
    if (n <= 50) continue;
    console.log(n); // prints only 55,60,70
}
