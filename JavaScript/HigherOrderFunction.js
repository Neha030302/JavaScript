/**
 * A Higher-Order Function is a function that either:
 * Takes one or more functions as arguments (e.g., callbacks).
 * Returns a function as its result.
 * Or both.
 * JavaScript’s treatment of functions as first-class citizens (can be assigned to variables, passed as arguments, or returned).
 * Purpose: Encapsulates logic that operates on or produces functions, making code more modular and reusable.
 * Purpose of Higher-Order Functions
At an intermediate level, HOFs serve several purposes beyond basic reusability:

Abstraction: They hide implementation details, allowing you to focus on "what" (e.g., transform data) rather than "how" (e.g., loop mechanics). This reduces boilerplate code and errors.
Composition: HOFs enable chaining or combining functions to build complex operations from simple ones, promoting declarative code (describe what you want, not how to do it).
Flexibility and Extensibility: By accepting callbacks, HOFs can adapt to different behaviors without rewriting the core function (e.g., sorting with custom comparators).
Handling Asynchronicity: In intermediate async patterns, HOFs manage callbacks for events, promises, or async/await wrappers.
Immutability and Purity: HOFs often encourage pure functions (no side effects, predictable outputs), which are easier to test and debug—key for intermediate-level codebases.
Performance Considerations: While powerful, overusing HOFs (e.g., deep nesting) can impact performance due to closure creation or recursion; profile with tools like Chrome DevTools for optimization.

Use Cases
HOFs shine in real-world scenarios at an intermediate level:

Data Transformation Pipelines: Process arrays or streams with methods like map, filter, reduce (built-in HOFs that take callbacks).

Use Case: Transforming user data in an API response.


Event Handling and Asynchronicity: Pass callbacks to handle events or async results (e.g., addEventListener, setTimeout).

Use Case: Debouncing user input in a search bar.


Function Factories and Currying: Return functions to create specialized versions (e.g., logging wrappers).

Use Case: Creating configurable middleware in Express.js.


Dependency Injection: Pass functions to inject behavior dynamically.

Use Case: Mocking functions in unit tests.


Functional Composition: Combine HOFs to build workflows (e.g., compose(funcA, funcB)).

Use Case: Data validation pipelines in forms.
 * ECMAScript Spec: Functions are first-class objects, and higher-order functions leverage this for argument passing and returns.
 */


function mapArray(array, transform) {
    console.log(transform)
    const result = [];
    for (const item of array) {
        result.push(transform(item));
    }
    return result;
}

function createMultiplier(factor) {
    return (number) => number * factor;
}

// const numbers = [1, 2, 3, 4];
// const double = mapArray(numbers, (num) => num * 2);
// console.log(double); // [2, 4, 6, 8]

// const triple = createMultiplier(3);
// console.log(triple(5)); // 15




const users = [
    { name: "Ayush", age: 18 },
    { name: "Neha", age: 25 }
];

const adultUsers = users.map((user) => ({
    ...user,
    isAdult: user.age >= 18
}));

console.log(adultUsers);
// Output: [{ name: "Ayush", age: 18, isAdult: true }, { name: "Neha", age: 25, isAdult: true }]

// Custom HOF: Function Composition (Chaining Functions)

function compose(...funcs) {
    // console.log(funcs,"====")
    return (initialValue) => funcs.reduceRight((value, func) => func(value), initialValue);
}

const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const compute = compose(square, addOne, double);
// console.log(compute(3)); // square(addOne(double(3))) = square(7) = 49



function delayExecution(callback, delay) {
  setTimeout(callback, delay);
}

let count = 0;
delayExecution(() => {
  count++;
//   console.log(`Delayed count: ${count}`); // Accesses outer scope (lexical scope)
}, 1000);
// Output after 1s: Delayed count: 1

function curryAdd(a) {
  return (b) => (c) => a + b + c;
}

const addFive = curryAdd(5);
console.log(addFive)
const addFiveAndTen = addFive(10);
console.log(addFiveAndTen(20)); // 35