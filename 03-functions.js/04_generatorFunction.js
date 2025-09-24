/**
 * generatorFunction.js
 * --------------------
 * Generator Functions in JavaScript allow you to:
 * - Pause function execution with `yield`
 * - Resume execution later
 * - Produce a sequence of values lazily (one at a time)
 *
 * ✅ Key Concepts:
 * 1. Generator function declaration with *
 * 2. yield keyword
 * 3. next() method
 * 4. Iterating with for...of
 * 5. Infinite sequences and lazy evaluation
 *
 * 👉 Real-world usage:
 * - Generating sequences like Fibonacci or prime numbers
 * - Lazy data processing
 * - Handling asynchronous streams
 */

"use strict";

// 1️⃣ Basic Generator Function
function* simpleGenerator() {
    console.log("Start Generator");
    yield 1; // pauses here
    yield 2;
    yield 3;
    console.log("End Generator");
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// 2️⃣ Using for...of loop
console.log("\n2️⃣ Iterating with for...of:");
function* colorsGenerator() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

for (const color of colorsGenerator()) {
    console.log(color);
}

// 3️⃣ Infinite Generator Example
console.log("\n3️⃣ Infinite Generator (Fibonacci sequence):");
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value); // prints first 10 Fibonacci numbers
}

// 4️⃣ Passing values to generator
console.log("\n4️⃣ Passing values into generator:");
function* mathGenerator() {
    const x = yield "Enter first number";
    const y = yield "Enter second number";
    yield x + y;
}

const mathGen = mathGenerator();
console.log(mathGen.next().value);      // "Enter first number"
console.log(mathGen.next(5).value);     // "Enter second number" (x = 5)
console.log(mathGen.next(10).value);    // 15 (x + y)

// 5️⃣ Practical Example: Lazy Range Generator
console.log("\n5️⃣ Lazy Range Generator:");
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (const num of range(1, 10)) {
    process.stdout.write(num + " "); // prints numbers 1 to 10
}
console.log("\n");

// 6️⃣ Combining Generators (Composition)
console.log("\n6️⃣ Combining Generators:");
function* genA() {
    yield "A1";
    yield "A2";
}

function* genB() {
    yield* genA(); // delegate to genA
    yield "B1";
}

for (const val of genB()) {
    console.log(val); // A1, A2, B1
}

// Summary:
// - Generators pause/resume execution using yield
// - next(value) can pass data back into the generator
// - Useful for lazy sequences, streams, and large data processing
