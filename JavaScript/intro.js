{/**
    What is js -> 
    JavaScript (JS) is a high-level scripting language, interpreted and support dynamic programming language primarily used for adding interactivity and dynamic behavior to web pages. 
    It’s one of the core technologies of the web, alongside HTML and CSS, and is supported by all modern web browsers. Originally developed in 1995 by Brendan Eich at Netscape, 
    JavaScript has evolved into a versatile language used for both client-side and server-side development.
    High level -- portable, ease of use, dont do the low level task ho
    it interprete the code line by line, did not convert into bite code/machine code there  is no pre compilation file 
    dynamic type -> no need to define the types the variable is tring number boolean etc
    execute the code at run time thats why it is interpreted lang 
    run directly in web browser using engines


    code written (.js ext) --> execution in v8 engine/ node js ->parse- tokenising- syntax tree (useJIT just in time translate computer code to machine code)
    JIT Compilation  --
    Memory - heap stack for memory management  

    Introduction to JavaScript 1995 netscape initial name mocha the live script then java script 
    JavaScript is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It’s dynamically typed, meaning variables can hold values of any type without explicit declaration. JS is often referred to as the "language of the web" because it enables developers to create responsive, interactive user interfaces and manipulate web content in real time.
JavaScript runs in a browser’s JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox) and can also be used outside browsers with environments like Node.js for server-side applications. Its flexibility and vast ecosystem make it essential for modern web development.
Key Aspects of JavaScript
Here are the most important aspects of JavaScript, covering its features, use cases, and ecosystem:
1. Core Features

Dynamic Typing: Variables don’t require a fixed type (e.g., let x = 5; x = "hello"; is valid).
Prototype-Based Object Orientation: Objects inherit properties and methods via prototypes, unlike class-based systems in languages like Java.
First-Class Functions: Functions are treated as variables, enabling functional programming patterns like higher-order functions and closures.
Event-Driven Programming: JS excels at handling asynchronous events, such as user clicks, form submissions, or network responses, using event listeners.
Single-Threaded, Non-Blocking: JavaScript uses an event loop to handle asynchronous operations (e.g., setTimeout, Promises, async/await), making it efficient for I/O-heavy tasks.
Cross-Platform: Runs in browsers, servers (via Node.js), and even on devices like IoT hardware.

2. Syntax and Structure

Variables: Declared using var, let, or const (with let and const introduced in ES6 for block scoping).
Data Types: Includes primitives (e.g., number, string, boolean, null, undefined, symbol) and objects (e.g., arrays, functions, objects).
Control Structures: Standard loops (for, while), conditionals (if, switch), and error handling (try/catch).
Modules: ES6 introduced import and export for modular code organization.
Modern Features: ES6+ (ECMAScript 2015 and later) added arrow functions, destructuring, template literals, Promises, async/await, and more.

3. Use Cases

Client-Side Development:

Manipulating the Document Object Model (DOM) to update web page content dynamically.
Handling user interactions (e.g., clicks, keyboard inputs).
Fetching data from APIs using fetch or XMLHttpRequest.
Building single-page applications (SPAs) with frameworks like React, Angular, or Vue.js.


Server-Side Development:

Using Node.js to build scalable backend services, APIs, or real-time apps (e.g., chat applications).


Mobile and Desktop Apps:

Frameworks like React Native or Electron allow JS to build cross-platform mobile and desktop applications.


Game Development:

Libraries like Phaser or Three.js enable 2D and 3D game creation.


Automation and Scripting:

Used in tools like browser extensions, task runners (e.g., Gulp), or scripting for IoT devices.



4. Ecosystem and Tools

Frameworks and Libraries:

React, Vue.js, Angular: For building user interfaces.
Node.js: For server-side development.
Express.js: A lightweight framework for building Node.js APIs.
jQuery: A legacy library for simplifying DOM manipulation (less common today).


Package Managers:

npm and Yarn: Manage dependencies and libraries.


Build Tools:

Webpack, Vite, Parcel: Bundle and optimize code.
Babel: Transpiles modern JS for older browsers.
ESLint, Prettier: Ensure code quality and consistent formatting.


Testing:

Frameworks like Jest, Mocha, or Cypress for unit, integration, and end-to-end testing.



5. Standards and Evolution

ECMAScript: The standard specification for JavaScript (ES6/ES2015 was a major update; annual updates continue).
Browser Compatibility: Tools like Babel and polyfills ensure modern JS works on older browsers.
Community and Resources: A massive community contributes to libraries, tutorials, and forums like Stack Overflow or X discussions.

6. Advantages

Universal Support: Runs natively in all browsers.
Versatility: Used for front-end, back-end, mobile, and more.
Huge Ecosystem: Thousands of libraries and frameworks.
Asynchronous Capabilities: Handles concurrency well with Promises and async/await.
Beginner-Friendly: Easy to start with simple scripts in HTML.

7. Challenges

Browser Inconsistencies: Slight differences in how browsers implement JS.
Security: Vulnerable to issues like XSS (cross-site scripting) if not handled properly.
Performance: Can be slower for computationally heavy tasks compared to languages like C++.
Learning Curve: Modern JS frameworks and tools can be complex for beginners.

8. Best Practices

Use const for immutable values, let for mutable ones, and avoid var.
Write modular, reusable code with ES modules.
Handle asynchronous operations with async/await for readability.
Sanitize user inputs to prevent security vulnerabilities.
Use modern frameworks and tools to streamline development.

9. Getting Started
To write JavaScript, embed it in HTML using <script> tags or link an external .js file:


Why JavaScript Matters
JavaScript powers the modern web, from interactive forms to complex applications like Gmail or Netflix.
Its continuous evolution through ECMAScript updates and a thriving community ensure it remains a cornerstone of software development.
If you want a deeper dive into any aspect (e.g., specific frameworks, async programming, or a sample project), let me know! Would you like me to analyze any JavaScript-related content or generate a specific example?



Case-sensitive: myVar ≠ myvar 

Example: Declaring and Updating Variables: 

var firstName = "Neha"; console.log(firstName); // Output: Neha  

firstName = "Name"; console.log(firstName); // Output: Name  

 

Naming Conventions 

General Rules 

Valid Names: 

Can contain letters (a-z, A-Z), digits (0-9), _, and $ 

Cannot start with a number 

Avoid reserved keywords (let, class, function, etc.) 

 

var 1value = 10; // ❌ Error (starts with a number) 

 

var _firstName = 'Neha';  // Using underscore   
var $fname = "";         // Using dollar sign   
var fName1 = "";         // camelCase with number 

var first_name = "";     // snake_case 

var firstName = "";      // camelCase (recommended)     

 

Meaningful Names: Choose descriptive names that indicate purpose 

Conventions 

1. Variables and Functions 

Use camelCase (first word lowercase, subsequent words capitalized) 

Start with small letter 

// Good 
 

let userName = "John"; 

 
const MAX_USERS = 100; 
 

 
function calculateTotalPrice() { ... } 
 

function getUserById(id) { ... } 
 

 

 
// Bad 
 

let a = "John"; // Not descriptive 
 

function calc() { ... } // Too vague 

 

2. Constants 

Use UPPER_SNAKE_CASE for values that won't change 

 

Typically used for configuration values 

Const pi = 3.14; 

Pi = 3.25; // don’t change the const – Type Error  value  

 

const API_KEY = "abc123"; 
 

const MAX_RETRIES = 3; 
 

const PI = 3.14159; 

 

3. Classes and Constructor Functions 

Use PascalCase (capitalize first letter of each word) 

Should be nouns representing objects 

class UserAccount { ... } 
 

function CarModel() { ... } // Constructor function 

 

4. Private Variables/Functions 

Prefix with underscore _ (convention only - not truly private) 

 

class User { 
  constructor() { 
    this._internalId = 123; // "Private" member 
  } 
   
  _privateMethod() { ... } 
} 

 

5. Boolean Variables/Functions 

Often start with is, has, can, should for clarity 

 

let isActive = true; 
 

function hasPermission() { ... } 
const canEdit = false; 

 

6. Arrays and Collections 

Use plural nouns or add List, Array suffix 

 

const users = ["John", "Jane"]; 
const colorList = ["red", "green"]; 

 

7. Event Handlers 

Prefix with on or handle 

function onClick() { ... } 
function handleSubmit() { ... } 

 

Best Practices 

Be Consistent: Follow the same convention throughout your project 

Avoid Single Letters: Except for simple loop counters (i, j, k) 

Don't Use Abbreviations: Unless they're very common (btn, msg, err) 

Declare Variable Using Variable Declarations (var, let, const) 

var (Old Way - Function-Scoped) 

Issues: 

Function-scoped, not block-scoped 

Allows redeclaration (can cause bugs) 

Hoisting (variables are moved to the top of their scope) 

 

var message = "Hello";   
console.log(message); // Output: Hello   
 
// Problem: Can redeclare  

var message = "Hi"; // No error   

// Issues with var: 
 

// 1. Function-scoped (not block-scoped) 
// 2. Allows redeclaration 
// 3. Hoisting can cause confusion 

 

let (Modern Way - Block-Scoped) 

Solves var issues: 

Block-scoped (works inside {} blocks) 

Cannot redeclare in the same scope 

Temporal Dead Zone (TDZ) – Cannot access before declaration 

ES6 (2015) introduced let to solve these issues 

 

if (true) {   
    let blockScoped = "Inside block";   
    console.log(blockScoped); // ✅ Works   
}   
console.log(blockScoped); // ❌ ReferenceError   
 
let x = 1;   
let x = 2; // ❌ SyntaxError (redeclaration not allowed)   
 
console.log(y); // ❌ ReferenceError (TDZ)   
let y = 10;   

 

can't redeclare the same variable in the same scope 

let x = 1; 
 

let x = 2; // SyntaxError: Identifier 'x' has already been declared 

 

console.log(y); // ReferenceError: Cannot access 'y' before initialization 
let y = 10; 

 

const (Block-Scoped & Immutable) 

Cannot be reassigned after declaration. 

const PI = 3.14;   
PI = 3.25; // ❌ TypeError (cannot change const)   

 

 

Better Loop Behavior 

let in Loop (Correct Behavior) 

for (let i = 0; i < 3; i++) {   
    setTimeout(() => console.log(i), 100); // Output: 0, 1, 2   
}   

 

Each loop iteration gets a new i due to block scoping. 

 

 

var in Loop (Problematic Behavior) 

 
// Compare with var: 
for (var j = 0; j < 3; j++) { 
    setTimeout(() => console.log(j), 100); // Logs 3, 3, 3 
} 

 

Why? 

var is function-scoped, so all iterations share the same j. 

By the time setTimeout runs, j is already 3 

Use let by default - It's the modern, safer choice 

Use var only when needed - For legacy code or specific function-scoping needs 

Use const for values that shouldn't change - Even better than let when possible 

 

Key Differences Summary 

Feature 

var 

let 

Scope 

Function-scoped 

Block-scoped 

Redeclaration 

Allowed 

Not allowed 

Hoisting 

Hoisted to function top 

Hoisted but in TDZ 

Global object property 

Becomes property on window 

Doesn't become property 

 

 

String Indexing & Methods 

String Indexing (Zero-Based) 

 

let fname = "harshita";   
// Index:   0 1 2 3 4 5 6 7   
// Value:   h a r s h i t a   
 
console.log(fname[0]); // "h"   
console.log(fname.length); // 8   
console.log(fname[fname.length - 1]); // "a" (last character)   

 

String indexing --- 

Let fname ="harshita"; 

// h a r s h i t a 

// 0 1 2 3 4 5 6 7 

Index start from 0  

fname.length // 8 

 

Last index = fname.length-1; //  

It include the spaces 

//trim() -- use for remove the spaces  

Strings are immutable  

give the another string  

  

// toUpperCase() -- chnge the char into upper letter capital letter  

// toLowerCase() -- into small case 

 

// slice() -- start index, end index needed 

NewName = fname.slice(0,4) //hars 

 

Common String Methods 

Method 

Description 

Example 

trim() 

Removes whitespace 

" abc ".trim() → "abc" 

toUpperCase() 

Converts to uppercase 

"hello".toUpperCase() → "HELLO" 

toLowerCase() 

Converts to lowercase 

"HELLO".toLowerCase() → "hello" 

slice(start, end) 

Extracts substring 

"harshita".slice(0,4) → "hars" 

indexOf("str") 

Finds first occurrence 

"hello".indexOf("e") → 1 

Strings are Immutable 

Cannot change a character directly 

let str = "hello"; 

  
str[0] = "H"; // ❌ Doesn't work 

 str = "Hello"; // ✅ Correct way (assign new string)   

 

 

Feature 

var 

let 

const 

Scope 

Function 

Block 

Block 

Redeclaration 

✅ Allowed 

❌ Not allowed 

❌ Not allowed 

Reassignment 

✅ Allowed 

✅ Allowed 

❌ Not allowed 

Hoisting 

✅ Hoisted (undefined) 

❌ TDZ (ReferenceError) 

❌ TDZ (ReferenceError) 

 

 

 

 

 

1. typeof Operator 

Definition: 

The typeof operator returns a string indicating the type of the operand (variable or value). It helps in checking the data type of a variable at runtime. 

let age = 22; 

 
let name = "Neha"; 
 

console.log(typeof age);    // "number" 
console.log(typeof name);   // "string" 

 

Key Points: 

Returns "number" for numeric values (including NaN). 

Returns "string" for text values. 

Returns "boolean" for true/false. 

Returns "undefined" if a variable is declared but not assigned. 

Returns "object" for null (a known bug in JavaScript). 

Returns "function" for functions. 

Returns "bigint" for BigInt values. 

Returns "symbol" for Symbol values. 

 

2. Type Conversion 

Definition: 

JavaScript allows converting one data type to another, either implicitly (automatically) or explicitly (manually). 

 

Implicit Conversion (Type Coercion) 

 

let num = 10; 
 

let strNum = num + ""; // Converts number to string ("10") 
 

console.log(typeof strNum); // "string" 

 
 
let str = "5"; 
 

let numFromStr = +str; // Converts string to number (5) 

 
console.log(typeof numFromStr); // "number" 

 

Explicit Conversion 

 

let age = 18; 
 

age = String(age); // Converts number to string ("18") 
 

console.log(typeof age); // "string" 
let ageStr = "25"; 
ageStr = Number(ageStr); // Converts string to number (25) 
console.log(typeof ageStr); // "number" 

 

Key Points: 

String(value) → Converts to string. 

Number(value) → Converts to number. 

Boolean(value) → Converts to boolean (true/false). 

parseInt() / parseFloat() → Parses strings into numbers. 

 

Primitive Data Types 

Definition: 

JavaScript has 7 primitive (immutable) data types: 

string → Text ("Hello", 'Hi', `World`). 

number → Integers & decimals (42, 3.14). 

boolean → true or false. 

undefined → Variable declared but not assigned. 

null → Intentional absence of value (bug: typeof null → "object"). 

bigint → Large integers (123n). 

symbol → Unique identifiers (Symbol('id')). 

 

let name = "Alice"; // string 
 

let age = 30;       // number 
let isStudent = true; // boolean 
let salary = null;  // null 
let job;            // undefined 
let bigNum = 123n;  // bigint 
let id = Symbol("id"); // symbol 

 

 

String Concatenation & Template Literals 

Definition: 

Concatenation (+) → Combines strings. 

Template Literals (`...`) → Embed variables inside strings 

 

 

Concatenation 

let str1 = "Hello"; 
let str2 = "World"; 
let combined = str1 + " " + str2; // "Hello World" 
let num1 = "10"; 
let num2 = "20"; 
let sum = num1 + num2; // "1020" (string concatenation) 
let actualSum = +num1 + +num2; // 30 (number addition) 

 

Template Literals 

let age = 22; 
let name = "Neha"; 
let aboutMe = `My name is ${name} and age is ${age}`; 
// "My name is Neha and age is 22" 

 

 Truthy & Falsy Values 

Definition: 

Falsy → Values that evaluate to false in conditions. 

Truthy → All other values (evaluate to true). 

Falsy Values: 

false 

0, -0, 0n (BigInt zero) 

"", '', `` (empty string) 

null 

undefined 

NaN 

Truthy Values: 

"abc", "0", " " (non-empty strings) 

1, -1, 3.14 (non-zero numbers) 

[], {} (empty arrays/objects) 

function() {} (functions) 

if (0) { console.log("Runs?"); } // Falsy → Doesn't run 

 
if ("Hello") { console.log("Runs!"); } // Truthy → Runs 

 

Comparison Operators (== vs ===) 

Definition: 

== (Loose Equality) → Checks value (with type coercion). 

=== (Strict Equality) → Checks value and type. 

 

 

console.log(5 == "5");   // true (type coercion) 
console.log(5 === "5");  // false (different types) 
 
console.log(null == undefined);  // true 
console.log(null === undefined); // false 

 

Key Points: 

Always prefer === (avoids unexpected type coercion). 

!= vs !== → Same logic as == vs ===. 

 
 

Conditional Statements (if-else, Ternary, Switch) 

 

 

let age = 18; 
 

if (age >= 18) { 
  console.log("Adult"); 
} else { 
  console.log("Minor"); 
} 

 

let age = 20; 
let status = age >= 18 ? "Adult" : "Minor"; 

 

 

let day = "Monday"; 
 

switch (day) { 
  case "Monday": 
    console.log("Weekday"); 
    break; 
  case "Saturday": 
    console.log("Weekend"); 
    break; 
  default: 
    console.log("Unknown"); 
} 

 

Ternary Operator → Short if-else replacement. 

switch-case → Cleaner for multiple conditions. 

 

 

 Loops (for, while, do-while, for...of, for...in) 

1. for Loop 

 

for (let i = 0; i < 5; i++) { 
  console.log(i); // 0, 1, 2, 3, 4 
} 

while Loop 

let i = 0; 
while (i < 5) { 
  console.log(i); // 0, 1, 2, 3, 4 
  i++; 
} 

 

 do-while Loop 

 

let i = 0; 
do { 
 

  console.log(i); // Runs at least once 
  i++; 
} while (i < 5); 

 

for...of (Arrays, Strings) 

 

let arr = [1, 2, 3]; 
for (let num of arr) { 
  console.log(num); // 1, 2, 3 
} 

 

for...in (Objects) 

 

let person = { name: "Neha", age: 22 }; 
for (let key in person) { 
  console.log(key, person[key]); // "name", "Neha" / "age", 22 
} 

 

Key Points: 

for...of → Iterates over values (arrays, strings). 

for...in → Iterates over keys (objects). 

 

break & continue 

Definition: 

break → Exits the loop entirely. 

continue → Skips the current iteration. 

for (let i = 0; i < 5; i++) { 
  if (i === 2) continue; // Skips 2 
  if (i === 4) break;    // Exits at 4 
  console.log(i); // 0, 1, 3 
} 

 

 

Concept 

Example 

Notes 

typeof 

typeof 42 → "number" 

Checks data type 

Type Conversion 

Number("10") → 10 

Explicit conversion 

== vs === 

5 == "5" (true), 5 === "5" (false) 

Prefer === 

Falsy Values 

false, 0, "", null, undefined, NaN 

Evaluate to false 

Ternary Operator 

age >= 18 ? "Adult" : "Minor" 

Short if-else 

for...of 

for (let num of [1,2,3]) 

Iterates values 

for...in 

for (let key in obj) 

Iterates keys 

 

 

 

// intro to arrays  

// reference type  

// how to create arrays 

  

// ordered collection of items  

  

// let fruits = ["apple", "mango", "grapes"]; 

// let numbers = [1,2,3,4]; 

// let mixed = [1,2,2.3, "string", null, undefined]; 

// console.log(mixed); 

// console.log(numbers); 

// console.log(fruits[2]); 

let fruits = ["apple", "mango", "grapes"]; 

let obj = {}; // object literal 

// console.log(fruits); 

// fruits[1] = "banana"; 

// console.log(fruits); 

console.log(typeof fruits);//object 

console.log(typeof obj);// object 

console.log(Array.isArray(fruits)); true 

console.log(Array.isArray(obj)); //false 

  

  

// array indexing  

An array is a data structure used to store multiple values in a single variable. 

Collection of element, ordered collection of element, 

Mutable change in orignal data  

Reference type  

Reference type is object in Js so Array is object in js  

 Array.isArray --> check is the array or not 

 

 

let fruits = ["apple", "banana", "mango"]; 

console.log(fruits[0]); // "apple" 

 

 Arrays in JavaScript are zero-indexed. 
They can store mixed data types: strings, numbers, booleans, etc 

 

Let mixed = [1,2,"ab",undefined,[3,4],null] 

 

let arr = [1, 2, 3]; 

  

// ➕ Add to end 

arr.push(4); // [1, 2, 3, 4] 

  

// ➖ Remove from end 

arr.pop(); // [1, 2, 3] 

  

// ➕ Add to start 

arr.unshift(0); // [0, 1, 2, 3] 

  

// ➖ Remove from start 

arr.shift(); // [1, 2, 3] 

 

 

push/pop → O(1) 

shift/unshift → O(n) because all indexes shift 

// array push pop  

  

// array shift unshift  

  

let fruits = ["apple", "mango", "grapes"]; 

console.log(fruits); 

// push  

// fruits.push("banana"); 

// console.log(fruits); 

// pop  

// let poppedFruit = fruits.pop(); 

// console.log(fruits); 

// console.log("popped fruits is", poppedFruit); 

  

// unshift  

// fruits.unshift("banana"); 

// fruits.unshift("myfruit"); 

// console.log(fruits); 

  

// shift  

// let removedFruit = fruits.shift(); 

// console.log(fruits); 

// console.log("removed fruits is ", removedFruit); 

 

 

Primitive vs Reference Data Types 

➤ Primitive: 

Stored by value 

e.g., string, number, boolean, null, undefined 

 

let a = 5; 
let b = a; 

 
b++; 
 

console.log(a); // 5 
 

➤ Reference: 

Stored by reference 

e.g., array, object, function 

 

let arr1 = [1, 2]; 

let arr2 = arr1; 

arr2.push(3); 

console.log(arr1); // [1, 2, 3] (same reference) 

 

// primitve vs reference data types 

// let num1 = 6; 

// let num2 = num1; 

// console.log("value is num1 is", num1); 

// console.log("value is num2 is", num2); 

// num1++; 

// console.log("after incrementing num1") 

// console.log("value is num1 is", num1); 

// console.log("value is num2 is", num2); 

  

  

// reference types  

// array  

let array1 = ["item1", "item2"]; 

let array2 = array1; 

console.log("array1", array1); 

console.log("array2", array2); 

array1.push("item3"); 

console.log("after pushing element to array 1"); 

console.log("array1", array1); 

console.log("array2", array2); 

 

 

Primitive stored in stack  

 

Referenvce type stored in heap, it store the reference not directly data value 

 

 

Clone Array & Spread Operator 

 

let original = [1, 2, 3]; 

  

let clone1 = original.slice();        // Method 1 

let clone2 = [...original];          // Method 2: Spread operator 

 

// how to clone array  

  

// how to concatenate two arrays 

  

let array1 = ["item1", "item2"]; 

// let array2 = ["item1", "item2"]; 

// let array2 = array1.slice(0).concat(["item3", "item4"]); 

// let array2 = [].concat(array1,["item3", "item4"]); 

// new way  

// spread operator 

let oneMoreArray = ["item3", "item4"] 

let array2 = [...array1, ...oneMoreArray]; 

  

array1.push("item3"); 

  

console.log(array1===array2); 

console.log(array1) 

console.log(array2) 

 

 

let arr = [10, 20, 30]; 

  

for (let i = 0; i < arr.length; i++) { 

  console.log(arr[i]); 

} 

Gives full control (index + value) 

 

 

 

 

use const for Creating Arrays 

 

const items = [1, 2, 3]; 

items.push(4); // ✅ Allowed 

items = [10, 20]; // ❌ Error: Assignment to constant variable 

 

 

// for loop in array  

  

let fruits = ["apple", "mango", "grapes", "banana"]; 

  

// for(let i=0; i<=9;i++){ 

//     console.log(i); 

// } 

  

// console.log(fruits.length); 

// console.log(fruits[fruits.length-2]); 

let fruits2 = []; 

for(let i=0; i < fruits.length; i++){ 

    fruits2.push(fruits[i].toUpperCase()); 

} 

  

console.log(fruits2); 

 

// use const for creating array 

  

// heap memory ["apple", "mango"] 0x11 

  

// const fruits = ["apple", "mango"]; // 0x11 

// fruits.push("banana"); 

// console.log(fruits); 

 

// while loop in array  

const fruits = ["apple", "mango", "grapes"]; 

const fruits2 = []; 

let i = 0; 

while(i<fruits.length){ 

    fruits2.push(fruits[i].toUpperCase()); 

    i++; 

} 

console.log(fruits2); 

 

 

 

// for of loop in array 

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"]; 

const fruits2 = []; 

  

// for(let fruit of fruits){ 

//     fruits2.push(fruit.toUpperCase()); 

// } 

// console.log(fruits2); 

  

for(let i = 0; i<fruits.length; i++){ 

    console.log(fruits[i]); 

} 

 

// for in loop in array 

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"]; 

const fruits2 = []; 

  

for(let index in fruits){ 

    fruits2.push(fruits[index].toUpperCase()); 

} 

console.log(fruits2); 

 

 

 

for...of Loop 

let colors = ["red", "green", "blue"]; 

 
 
for (let color of colors) { 

   console.log(color); 
 

} 
 

For values only 

Clean and readable for most use-cases 

 

for...in Loop 

let arr = [100, 200, 300]; 
 
 

for (let index in arr) { 
 

  console.log(index, arr[index]); 

 
} 
 

Used for indexes 

More common with objects, less with arrays 

 

 

Array Destructuring 

 

let numbers = [1, 2, 3]; 

let [a, b, c] = numbers; 

  

console.log(a); // 1 

 

 

// array destructuring  

const myArray = ["value1", "value2", "value3","value4"]; 

// let myvar1 = myArray[0]; 

// let myvar2 = myArray[1]; 

// console.log("value of myvar1", myvar1); 

// console.log("value of myvar2", myvar2); 

let [myvar1, myvar2, ...myNewArray] = myArray; 

console.log("value of myvar1", myvar1); 

console.log("value of myvar2", myvar2); 

console.log(myNewArray); 

 

 

// objects reference type   

// arrays are good but not sufficient  

// for real world data  

// objects store key value pairs  

// objects don't have index 

  

// how to create objects  

  

// const person = {name:"Harshit",age:22}; 

const person = { 

    name: "harshit", 

    age: 22, 

    hobbies: ["guitar", "sleeping", "listening music"] 

} 

console.log(person); 

  

// how to access data from objects  

// console.log(person["name"]); 

// console.log(person["age"]); 

// console.log(person.hobbies); 

  

// how to add key value pair to objects 

person["person"] = "male"; 

console.log(person); 

 

 

 

 

 

 

// how to iterate object  

const person = { 

    name: "harshit", 

    age: 22, 

    "person hobbies": ["guitar", "sleeping", "listening music"] 

} 

  

// for in loop  

// Object.keys  

  

// for(let key in person){ 

//     // console.log(`${key} : ${person[key]}`); 

//     console.log(key," : " ,person[key]); 

// } 

  

// console.log(typeof (Object.keys(person))); 

// const val = Array.isArray((Object.keys(person))); 

// console.log(val); 

  

// for(let key of Object.keys(person)){ 

//     console.log(person[key]); 

// } 

 

 

// computed properties 

  

const key1 = "objkey1"; 

const key2 = "objkey2"; 

  

const value1 = "myvalue1"; 

const value2 = "myvalue2"; 

  

// const obj = { 

//     objkey1 : "myvalue1", 

//     objkey2 : "myvalue2", 

// } 

  

// const obj = { 

//     [key1] : value1, 

//     [key2] : value2 

// } 

  

const obj = {}; 

  

obj[key1] = value1; 

obj[key2] = value2; 

console.log(obj); 

 

// spread operator 

// const array1 = [1, 2, 3]; 

// const array2 = [5, 6, 7]; 

  

// // const newArray = [...array1, ...array2, 89, 69]; 

// const newArray = [..."123456789"]; 

// console.log(newArray); 

  

// spread operator in objects 

const obj1 = { 

  key1: "value1", 

  key2: "value2", 

}; 

const obj2 = { 

  key1: "valueUnique", 

  key3: "value3", 

  key4: "value4", 

}; 

  

// const newObject = { ...obj2, ...obj1, key69: "value69" }; 

// const newObject = { ...["item1", "item2"] }; 

// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; 

// console.log(newObject); 

 

 

// object destructuring 

const band = { 

  bandName: "led zepplin", 

  famousSong: "stairway to heaven", 

  year: 1968, 

  anotherFamousSong: "kashmir", 

}; 

  

let { bandName, famousSong, ...restProps } = band; 

console.log(bandName); 

console.log(restProps); 

 

// objects inside array  

// very useful in real world applications 

  

const users = [ 

    {userId: 1,firstName: 'harshit', gender: 'male'}, 

    {userId: 2,firstName: 'mohit', gender: 'male'}, 

    {userId: 3,firstName: 'nitish', gender: 'male'}, 

] 

for(let user of users){ 

    console.log(user.firstName); 

} 

 

 

// nested destructuring  

const users = [ 

    {userId: 1,firstName: 'harshit', gender: 'male'}, 

    {userId: 2,firstName: 'mohit', gender: 'male'}, 

    {userId: 3,firstName: 'nitish', gender: 'male'}, 

] 

  

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users; 

console.log(user1firstName); 

console.log(userId); 

console.log(user3gender); 

 

 

 

1. Function Declaration 

Definition 

A function declaration is the classic way to define a function using the function keyword. 
It is hoisted — meaning it can be called before it is defined. 

// You can call before definition due to hoisting 

sayHello(); 

function sayHello() { 

  console.log("Hello from Function Declaration"); 

} 

Hoisting here means both the function name and its body are moved to the top of the scope at runtime. 

2. Function Expression 

Definition 

A function expression assigns a function to a variable. 
Unlike declarations, these are not hoisted — you can’t call them before defining. 

// ❌ TypeError: greet is not a function 

// greet(); 

  

const greet = function() { 

  console.log("Hello from Function Expression"); 

}; 

greet(); 

Pitfall: Interviewers love to ask "What happens if you call a function expression before it is defined?" — The variable is hoisted but remains undefined until assignment. 

3. Arrow Functions 

Definition 

Introduced in ES6, arrow functions provide shorter syntax and lexical this binding (they don’t create their own this). 

const add = (a, b) => a + b; 

console.log(add(2, 3)); // 5 

  

// Lexical this example 

function Person() { 

  this.age = 0; 

   

  setInterval(() => { 

    this.age++; // 'this' refers to Person instance 

    console.log(this.age); 

  }, 1000); 

} 

new Person(); 

 Arrow functions cannot be used as constructors (new MyArrow() → error). 

4. Function Declarations are Hoisted 

Hoisting means the entire function definition is available before execution begins. 

 

hoisted(); // works 

  

function hoisted() { 

  console.log("I'm hoisted!"); 

} 

Trick Question: If a function declaration and a variable with the same name exist in the same scope, the function declaration takes priority. 

5. Function Inside Function 

Functions can be nested and the inner function has access to the outer function’s variables. 

function outer() { 

  const outerVar = "I am from outer"; 

   

  function inner() { 

    console.log(outerVar); 

  } 

   

  inner(); 

} 

outer(); 

 

Interview angle: This is often used to explain closures. 

 

6. Lexical Scope 

Lexical scope means a function’s scope is determined by where it is written in the code, not where it’s called. 

function outer() { 

  let a = 10; 

  function inner() { 

    console.log(a); // inner can access outer's variables 

  } 

  return inner; 

} 

outer()(); // 10 

 

7. Block Scope vs Function Scope 

Function Scope: Variables declared with var are scoped to the entire function. 

Block Scope: Variables declared with let and const are scoped to the nearest { }. 

 

function test() { 

  if (true) { 

    var x = 10; // function-scoped 

    let y = 20; // block-scoped 

  } 

  console.log(x); // ✅ 10 

  console.log(y); // ❌ ReferenceError 

} 

test(); 

 

8. Default Parameters 

You can set default values for parameters. 

function greet(name = "Guest") { 

  console.log(`Hello, ${name}`); 

} 

  

greet(); // Hello, Guest 

greet("Neha"); // Hello, Neha 

 Rest Parameters 

Collect multiple arguments into an array. 

 

 

function sum(...nums) { 

  return nums.reduce((acc, curr) => acc + curr, 0); 

} 

console.log(sum(1, 2, 3, 4)); // 10 

 

Parameter Destructuring 

Extract values directly from objects or arrays in function parameters. 

function display({ name, age }) { 

  console.log(name, age); 

} 

display({ name: "Neha", age: 25 }); 

 

Callback Functions (Brief Intro) 

A function passed as an argument to another function. 

function processUserInput(callback) { 

  const name = "Neha"; 

  callback(name); 

} 

  

processUserInput((n) => console.log(`Hello, ${n}`)); 

 

12. Functions Returning Functions 

A function can return another function, often used in closures. 

 

 

function multiplier(factor) { 

  return function(num) { 

    return num * factor; 

  }; 

} 

  

const double = multiplier(2); 

console.log(double(5)); // 10 

 

 

//funtions 

function singHappyBirthday(){ 

    console.log("happy birthday to you ......"); 

} 

function sumThreeNumbers(number1, number2, number3){ 

    return number1 + number2 + number3; 

} 

// isEven 

// input : 1 number  

// output : true , false  

  

// function isEven(number){ 

//     return number % 2 === 0; 

// } 

// console.log(isEven(4)); 

// function  

// input : string  

// output: firstCharacter  

  

// function firstChar(anyString){ 

//     return anyString[0]; 

// } 

// console.log(firstChar("zbc")); 

// function  

// input : array, target (number) 

// output: index of target if target present in array  

function findTarget(array, target){ 

    for(let i = 0; i<array.length; i++){ 

        if(array[i]===target){ 

            return i; 

        } 

    } 

    return -1; 

} 

const myArray = [1,3,8,90] 

const ans = findTarget(myArray, 4); 

console.log(ans); 

 

// function expression  

// function singHappyBirthday(){ 

//     console.log("happy birthday to you ......"); 

// } 

  

const singHappyBirthday = function(){ 

    console.log("happy birthday to you ......"); 

} 

  

// singHappyBirthday(); 

  

const sumThreeNumbers = function(number1, number2, number3){ 

    return number1 + number2 + number3; 

} 

const ans = sumThreeNumbers(2,3,4); 

// console.log(ans); 

  

  

// function isEven(number){ 

//     return number % 2 === 0; 

// } 

const isEven = function(number){ 

    return number % 2 === 0; 

} 

// console.log(isEven(2)); 

  

const firstChar = function(anyString){ 

    return anyString[0]; 

} 

  

const findTarget = function(array, target){ 

    for(let i = 0; i<array.length; i++){ 

        if(array[i]===target){ 

            return i; 

        } 

    } 

    return -1; 

} 

 

// function expression  

// function singHappyBirthday(){ 

//     console.log("happy birthday to you ......"); 

// } 

  

const singHappyBirthday = function(){ 

    console.log("happy birthday to you ......"); 

} 

  

// singHappyBirthday(); 

  

const sumThreeNumbers = function(number1, number2, number3){ 

    return number1 + number2 + number3; 

} 

const ans = sumThreeNumbers(2,3,4); 

// console.log(ans); 

  

  

// function isEven(number){ 

//     return number % 2 === 0; 

// } 

const isEven = function(number){ 

    return number % 2 === 0; 

} 

// console.log(isEven(2)); 

  

const firstChar = function(anyString){ 

    return anyString[0]; 

} 

  

const findTarget = function(array, target){ 

    for(let i = 0; i<array.length; i++){ 

        if(array[i]===target){ 

            return i; 

        } 

    } 

    return -1; 

} 

 

// arrow functions 

// const singHappyBirthday = function(){ 

//     console.log("happy birthday to you ......"); 

// } 

  

const singHappyBirthday = () => { 

    console.log("happy birthday to you ......"); 

} 

  

singHappyBirthday(); 

  

const sumThreeNumbers = (number1, number2, number3) => { 

    return number1 + number2 + number3; 

} 

  

const ans = sumThreeNumbers(2,3,4); 

console.log(ans); 

  

// const isEven = function(number){ 

//     return number % 2 === 0; 

// } 

  

const isEven = number => number % 2 === 0; 

  

  

console.log(isEven(4)); 

  

const firstChar = anyString => anyString[0]; 

  

console.log(firstChar("harshit")); 

  

  

const findTarget = (array, target) => { 

    for(let i = 0; i<array.length; i++){ 

        if(array[i]===target){ 

            return i; 

        } 

    } 

    return -1; 

} 

 

 

// hoisting  

  

// hello(); 

  

// function hello(){ 

//     console.log("hello world"); 

// } 

// console.log(hello); 

// const hello = "hello world"; 

// console.log(hello); 

 

// functions inside function  

function app(){ 

    const myFunc = () =>{ 

        console.log("hello from myFunc") 

    } 

     

    const addTwo = (num1, num2) =>{ 

        return num1 + num2; 

    } 

  

    const mul = (num1, num2) => num1* num2; 

  

    console.log("inside app"); 

    myFunc(); 

    console.log(addTwo(2,3)); 

    console.log(mul(2,3)); 

} 

app(); 

 

// lexical scope  

const myVar = "value1"; 

  

function myApp(){ 

     

  

    function myFunc(){ 

        // const myVar = "value59"; 

        const myFunc2 = () =>{ 

            console.log("inside myFunc", myVar); 

        } 

        myFunc2(); 

    } 

  

  

    console.log(myVar); 

    myFunc(); 

} 

  

myApp(); 

 

// block scope vs function scope  

  

  

// let and const are block scope 

// var is function scope  

  

// if(true){ 

//     var firstName = "harshit"; 

//     console.log(firstName); 

// } 

  

// console.log(firstName); 

  

function myApp(){ 

    if(true){ 

        var firstName = "harshit"; 

        console.log(firstName); 

    } 

  

    if(true){ 

        console.log(firstName); 

    } 

    console.log(firstName); 

} 

  

myApp(); 

 

 

 

 

// rest parameters  

  

// function myFunc(a,b,...c){ 

//     console.log(`a is ${a}`); 

//     console.log(`b is ${b}`); 

//     console.log(`c is`, c); 

// } 

  

// myFunc(3,4,5,6,7,8,9); 

  

function addAll(...numbers){ 

    let total = 0; 

    for(let number of numbers){ 

        total = total + number; 

    } 

    return total; 

} 

  

const ans = addAll(4,5,4,2,10); 

console.log(ans); 

 

// param destructuring  

  

// object  

// react  

  

const person = { 

    firstName: "harshit", 

    gender: "male", 

    age: 500 

} 

  

// function printDetails(obj){ 

//     console.log(obj.firstName); 

//     console.log(obj.gender); 

// } 

  

  

function printDetails({firstName, gender, age}){ 

    console.log(firstName); 

    console.log(gender); 

    console.log(age); 

} 

  

printDetails(person); 

 

// callback functions  

function myFunc2(name){ 

    console.log("inside my func 2") 

    console.log(`your name is ${name}`); 

} 

function myFunc(callback){ 

    console.log("hello there I am a func and I can..") 

    callback("harshit"); 

} 

myFunc(myFunc2); 

 

 

// function returning function  

function myFunc(){ 

    function hello(){ 

        return "hello world" 

    } 

    return hello; 

} 

const ans = myFunc(); 

console.log(ans()); 

 

 

// important array methods  

  

const numbers = [4,2,5,8]; 

  

// function myFunc(number, index){ 

//     console.log(`index is ${index} number is ${number}`); 

// } 

  

// numbers.forEach(function(number,index){ 

//     console.log(`index is ${index} number is ${number}`); 

// }); 

  

// numbers.forEach(function(number, index){ 

//     console.log(number*3, index); 

// }) 

  

const users = [ 

    {firstName: "harshit", age: 23}, 

    {firstName: "mohit", age: 21}, 

    {firstName: "nitish", age: 22}, 

    {firstName: "garima", age: 20}, 

] 

  

// users.forEach(function(user){ 

//     console.log(user.firstName); 

// }); 

  

// users.forEach((user, index)=>{ 

//     console.log(user.firstName, index); 

// }) 

  

// for(let user of users){ 

//     console.log(user.firstName); 

// } 

 

 

// map method  

// const numbers = [3,4,6,1,8]; 

  

// const square = function(number){ 

//     return number*number; 

// } 

  

// const squareNumber = numbers.map((number, index)=>{ 

//     return index; 

// }); 

// console.log(squareNumber); 

  

const users = [ 

    {firstName: "harshit", age: 23}, 

    {firstName: "mohit", age: 21}, 

    {firstName: "nitish", age: 22}, 

    {firstName: "garima", age: 20}, 

] 

  

const userNames = users.map((user)=>{ 

    return user.firstName; 

}); 

  

console.log(userNames); 

 

A JavaScript function is a block of JavaScript code, that can be executed when "called" for. 

For example, a function can be called when an event occurs, like when the user clicks a button. 
*/}
