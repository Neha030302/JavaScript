/**
 * Function Declaration: A function declaration defines a named function using the function keyword, which can be called anywhere in its scope. It’s hoisted, meaning it can be used before its definition.
 * Purpose: Defines reusable code blocks with a specific name.
 * Use Cases: General-purpose functions, event handlers, utility functions.
 */


function greet(name) {
    return `Hello, ${name}!`;
}

// console.log(greet("Neha")); // Hello, Neha!

/**
 * Function Expression: A function expression assigns an anonymous or named function to a variable. It’s not hoisted (only the variable declaration is).
 * Purpose: Assigns a function to a variable for flexible usage (e.g., as an argument).
 * Use Cases: Callbacks, IIFEs (Immediately Invoked Function Expressions), dynamic function assignment.
 * Not hoisted, unlike function declarations.
 * Can be anonymous or named (named for recursion or debugging).Ties to your variable declarations (let/const).
 * 
 */


const add = function (a, b) {
    return a + b;
};

// console.log(add(2, 3)); // 5

/**
 * Arrow Functions: Arrow functions (ES6) provide a concise syntax for function expressions using =>. They lack their own this and arguments bindings.
 * Purpose: Shorter syntax, lexical this binding.
 * Not hoisted (like function expressions).
 * No prototype property, not suitable for constructors.
 */


const multiply = (a, b) => a * b;

// console.log(multiply(4, 5)); // 20


/**
 * Function Inside Function: A function defined within another function (nested function) has access to the outer function’s scope via lexical scoping.
 * Purpose: Encapsulates logic, creates closures, or organizes code.
 * Use Cases: Closures, private helper functions, modular code.
 * Inner function accesses outer function’s variables (lexical scope).
 * Often used with callbacks or functions returning functions.
 */

function outerFunction(name) {
    function innerFunction() {
        return `Hello, ${name}!`;
    }
    return innerFunction();
}

// console.log(outerFunction("Neha")); // Hello, Neha!

/**
 * Lexical Scope: Lexical scope (or static scope) determines variable accessibility based on where a function is defined, not where it’s called. A function can access variables from its outer scope.
 * Purpose: Enables closures and variable access in nested functions.
 * Use Cases: Closures, maintaining state, private variables.
 */

function outer() {
    const message = "Hello";
    function inner() {
        // console.log(message); // Accesses outer scope
    }
    inner();
}

outer(); // Hello


/**
 * Block Scope vs. Function Scope
 Block Scope: Variables declared with let or const are scoped to the nearest {} block (e.g., if, for).
 Function Scope: Variables declared with var or function declarations are scoped to the entire function.

 Controls variable visibility and lifetime.
Use Cases: Preventing variable leaks, managing scope in loops or conditionals.
let/const: Block-scoped, avoids var’s hoisting issues (as in your var discussion).
var: Function-scoped, hoisted to undefined.
Relates to your let usage and hoisting concerns.
 */


function testScope() {
    if (true) {
        let blockScoped = "Block";
        var functionScoped = "Function";
    }
    //   console.log(functionScoped); // Function
    //   console.log(blockScoped); // ReferenceError
}

testScope();


/**
 * Default Parameters: Default parameters allow function parameters to have default values if no argument or undefined is passed (ES6).
 * Purpose: Simplifies function calls by providing fallback values.
 * Use Cases: Optional arguments, configuration defaults.
 * Defaults are used when argument is undefined or omitted.Relates to your undefined handling (e.g., undefined == 0 → false).
 */

function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

// console.log(greetUser()); // Hello, Guest!
// console.log(greetUser("Neha")); // Hello, Neha!

/**
 * Rest Parameters: Rest parameters (...param) collect remaining arguments into an array, allowing functions to handle variable numbers of arguments (ES6).
 * Purpose: Simplifies handling of multiple arguments.
 * Use Cases: Functions with variable inputs (e.g., sum, logging).
 * Must be the last parameter. Creates a true array, unlike arguments.
 */


function sumNumbers(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// console.log(sumNumbers(1, 2, 3, 4)); // 10


/**
 * Parameter Destructuring: Parameter destructuring allows unpacking object or array properties directly into function parameters (ES6).
 * Purpose: Simplifies accessing object/array properties in functions.
 * Use Cases: Working with complex data (e.g., objects, arrays) in parameters.
 * Uses object ({}) or array ([]) destructuring syntax.
 * Can include default values.
 */

function printUser({ name, age = 18 }) {
    //   console.log(`Name: ${name}, Age: ${age}`);
}

// const user = { name: "Anu", age: 25 };
// printUser(user); // Name: Anu, Age: 25


/**
 * Callback Functions: A callback function is a function passed as an argument to another function, executed later (often asynchronously).
 * Purpose: Enables asynchronous operations or event-driven code.
 * Use Cases: Event listeners, array methods (e.g., map), timers.
 * 
 */

function processData(data, callback) {
    const result = data.toUpperCase();
    callback(result);
}

processData("Neha", (result) => console.log(result)); // NEHa


/**
 * Functions Returning Functions: A function that returns another function, often used to create closures or factory functions.
 * Purpose: Creates reusable function generators or maintains state via closures.
 * Use Cases: Closures, currying, function factories.
 * Relies on lexical scope (inner function accesses outer scope).
 */

function createGreeter(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
// console.log(sayHello("Neha")); // Hello, Neha!


const user = {
    name: "neha",
    regularMethod: function () {
        // console.log(`Regular: ${this.name}`);
    },
    arrowMethod: () => {
        // console.log(`Arrow: ${this.name}`);
    }
};

user.regularMethod(); // Regular: Neha
user.arrowMethod(); // Arrow: undefined

const outerThis = { name: "Outer" };
const arrowFunc = () => console.log(`Lexical: ${this.name}`);
outerThis.arrowFunc = arrowFunc;
outerThis.arrowFunc(); // Lexical: undefined


function singHappyBirthday() {
    // console.log("happy birthday to you ......");
}

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }

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

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);


// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans1 = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
const isEven = function (number) {
    return number % 2 === 0;
}
// console.log(isEven(2));

const firstChar = function (anyString) {
    return anyString[0];
}

// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }


// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }

singHappyBirthday();

// const sumThreeNumbers = (number1, number2, number3) => {
//     return number1 + number2 + number3;
// }

// const ans3 = sumThreeNumbers(2,3,4);
// console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven2 = number => number % 2 === 0;


// console.log(isEven(4));
// 
const firstChar2 = anyString => anyString[0];

// console.log(firstChar("harshit"));


// const findTarget = (array, target) => {
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// hoisting 

// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello = "hello world";
// console.log(hello);

// functions inside function 
function app() {
    const myFunc = () => {
        // console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (num1, num2) => num1 * num2;

    // console.log("inside app");
    myFunc();
    // console.log(addTwo(2,3));
    // console.log(mul(2,3));
}
app();


// lexical scope 
const myVar = "value1";

function myApp() {


    function myFunc() {
        // const myVar = "value59";
        const myFunc2 = () => {
            // console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    // console.log(myVar);
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

function myApp() {
    if (true) {
        var firstName = "harshit";
        // console.log(firstName);
    }

    if (true) {
        // console.log(firstName);
    }
    // console.log(firstName);
}

myApp();

// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a, b = 0) {
    return a + b;
}

// const ans = addTwo(4, 8);
// console.log(ans);

// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}

// const ans = addAll(4,5,4,2,10);
// console.log(ans);

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


function printDetails({ firstName, gender, age }) {
    // console.log(firstName);
    // console.log(gender);
    // console.log(age);
}

printDetails(person);

// callback functions 

function myFunc2(name) {
    // console.log("inside my func 2")
    // console.log(`your name is ${name}`);
}

function myFunc(callback) {
    // console.log("hello there I am a func and I can..")
    // callback("harshit");
}


myFunc(myFunc2);

// function returning function 


function myFunc() {
    let name = "neha";
    function hello() {
        // return "hello world"
        function hi() {
            console.log("name:", name);
        }
        return hi;
    }
    return hello;
}

const ans4 = myFunc();
const hiFunc = ans4();
hiFunc(); // Logs: name: neha
console.log(ans4());