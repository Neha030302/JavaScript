/**
 * Anonymous Functions, Callbacks, and Higher-Order Functions (HOF)
 * -----------------------------------------------------------------
 * JavaScript treats functions as first-class citizens.
 * Functions can be:
 * - Assigned to variables
 * - Passed as arguments (callbacks)
 * - Returned from other functions (HOF)
 *
 * ✅ Key Concepts:
 * 1. Anonymous Functions
 * 2. Callback Functions
 * 3. Higher-Order Functions (HOF)
 * 4. Currying, Composition, Async Callbacks
 *
 * 🔹 Purpose of Higher-Order Functions
 * Encapsulates logic that operates on or produces functions,
 * making code modular and reusable.
 * 
 * - Abstraction: Hides implementation details
 * - Composition: Chain functions for complex operations
 * - Flexibility: Accept callbacks for dynamic behavior
 * - Async Handling: Manage events, promises, or async/await
 * - Immutability & Purity: Encourages pure functions
 * - Performance Considerations: Avoid over-nesting closures
 *
 * 👉 Real-world usage:
 * - Event handling
 * - Array transformations (map, filter, reduce)
 * - Functional programming
 * - Middleware and dynamic behavior
 */

// "use strict";

// 1️⃣ Anonymous Functions
console.log("1️⃣ Anonymous Functions:");
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Neha"));

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Anonymous IIFE executed immediately!");
})();

// 2️⃣ Callback Functions
console.log("\n2️⃣ Callback Functions:");
function processUser(name, callback) {
    console.log(`Processing user: ${name}`);
    callback(name);
}

// Anonymous callback
processUser("Neha", function (name) {
    console.log(`Callback says: Hello, ${name}!`);
});

// Arrow function callback
processUser("Rahul", name => console.log(`Arrow callback says: Hi, ${name}`));

// Array callback example
const fruits = ["🍎 Apple", "🥭 Mango", "🍌 Banana"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// 3️⃣ Higher-Order Functions (HOF)
console.log("\n3️⃣ Higher-Order Functions:");

// HOF: Function as argument
function calculator(a, b, operation) {
    return operation(a, b);
}
const sum = (x, y) => x + y;
const product = (x, y) => x * y;
console.log("Sum 5+3:", calculator(5, 3, sum));
console.log("Product 5*3:", calculator(5, 3, product));

// HOF: Function returning function (closure)
function createMultiplier(factor) {
    return number => number * factor;
}
const double = createMultiplier(2);
console.log("Double 5:", double(5));
const triple = createMultiplier(3);
console.log("Triple 5:", triple(5));

// Currying transforms multi-arg functions into single-arg chains.
// Purpose: Partial application, reusable functions, functional pipelines, cleaner code.
// Use Cases: Functional programming, middleware, data transformation, event handling.

// Currying example
// function curryAdd(a) {
//     return b => c => a + b + c;
// }
// const addFive = curryAdd(5);
// console.log("Add 5 + 10 + 20:", addFive(10)(20));
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const addFive = curryAdd(5);        // returns a function waiting for `b`
const addFiveAndTen = addFive(10);  // returns a function waiting for `c`
console.log(addFiveAndTen(20));     // 35


// 4️⃣ Function Composition
console.log("\n4️⃣ Function Composition:");
function compose(...funcs) {
    return initialValue => funcs.reduceRight((value, func) => func(value), initialValue);
}
const doubleFunc = x => x * 2;
const addOne = x => x + 1;
const square = x => x * x;
const compute = compose(square, addOne, doubleFunc);
console.log("Compose example:", compute(3));

// 5️⃣ Built-in map/filter/reduce as HOF
console.log("\n5️⃣ Built-in Array HOFs:");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sumNumbers);

// 6️⃣ Project-Oriented Example: User Array
console.log("\n6️⃣ Project: Users Array HOF Example");
const users = [
    { name: "Ayush", age: 18 },
    { name: "Neha", age: 25 }
];
const adultUsers = users.map(user => ({
    ...user,
    isAdult: user.age >= 18
}));
console.log(adultUsers);

// 7️⃣ Project Example: Dynamic Calculator HOF
console.log("\n7️⃣ Project: Dynamic Calculator");
function dynamicCalculator(a, b, operationType) {
    const operations = {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => y !== 0 ? x / y : "Cannot divide by zero"
    };
    const operation = operations[operationType];
    return operation ? operation(a, b) : "Invalid operation";
}
console.log(dynamicCalculator(10, 5, "add"));
console.log(dynamicCalculator(10, 5, "multiply"));
console.log(dynamicCalculator(10, 0, "divide"));

// 8️⃣ Async Callback Example
console.log("\n8️⃣ Async Callback Example");
function delayExecution(callback, delay) {
    setTimeout(callback, delay);
}
let count = 0;
delayExecution(() => {
    count++;
    console.log(`Delayed count: ${count}`);
}, 1000);

// 9️⃣ Middleware-Style HOF Example
console.log("\n9️⃣ Middleware-Style HOF");
const logger = fn => (...args) => {
    console.log("Arguments:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
};
const sumFn = (a, b) => a + b;
const loggedSum = logger(sumFn);
loggedSum(5, 7);

//  🔹 Custom HOF examples: mapArray, compose, curryAdd
function mapArray(array, transform) {
    const result = [];
    for (const item of array) {
        result.push(transform(item));
    }
    return result;
}
console.log("Custom mapArray:", mapArray([1, 2, 3, 4], n => n * 2));

function composeFunctions(...funcs) {
    return initialValue => funcs.reduceRight((value, func) => func(value), initialValue);
}
const compute2 = composeFunctions(x => x * x, x => x + 1, x => x * 2);
console.log("Compose custom:", compute2(3));

const addCurried = a => b => c => a + b + c;
console.log("Curried add:", addCurried(5)(10)(20));

