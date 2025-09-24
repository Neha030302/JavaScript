/**
 * Scope & Hoisting in JavaScript
 * -------------------------------
 * Scope defines the accessibility of variables.
 * Hoisting moves variable and function declarations to the top of their scope.
 *
 * ✅ Types of Scope:
 * 1. Global Scope       -> accessible everywhere
 * 2. Local/Function     -> accessible inside function only
 * 3. Block Scope        -> accessible inside {} (let, const)
 *
 * 🔹 Hoisting:
 * - var variables are hoisted with undefined
 * - let/const are hoisted but in Temporal Dead Zone (cannot access before declaration)
 * - function declarations are fully hoisted
 */

"use strict";

// 1. Global scope
let globalVar = "I am global";
function checkGlobalScope() {
    console.log("Accessing globalVar inside function:", globalVar);
}
checkGlobalScope();
console.log("Accessing globalVar outside function:", globalVar);

// 2. Local / Function scope
function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar);
}
localScopeExample();
// console.log(localVar); // ❌ ReferenceError

// 3. Block scope
if (true) {
    let blockVar = "I am block scoped";
    const constVar = "I am also block scoped";
    var varVar = "I am function scoped even in block";
    console.log(blockVar, constVar, varVar);
}
// console.log(blockVar); // ❌ ReferenceError
// console.log(constVar); // ❌ ReferenceError
console.log(varVar); // ✅ Accessible because var is function/global scoped

// 4. Hoisting with var
console.log("\nHoisting with var:");
console.log(hoistVar); // undefined
var hoistVar = 10;
console.log(hoistVar); // 10

// 5. Hoisting with let/const
console.log("\nHoisting with let/const:");
// console.log(hoistLet); // ❌ ReferenceError
let hoistLet = 20;
console.log(hoistLet); // 20

// console.log(hoistConst); // ❌ ReferenceError
const hoistConst = 30;
console.log(hoistConst); // 30

// 6. Function hoisting
hoistedFunction();
function hoistedFunction() {
    console.log("I am hoisted and can be called before declaration!");
}

// 7. Nested function scope
function outerFunction() {
    let outerVar = "outer";
    function innerFunction() {
        let innerVar = "inner";
        console.log("Access outerVar inside innerFunction:", outerVar);
        console.log("Access innerVar inside innerFunction:", innerVar);
    }
    innerFunction();
    // console.log(innerVar); // ❌ ReferenceError
}
outerFunction();
