
/*
  * JavaScript Variables: Declaration
    1. Variable Declarations:JavaScript uses three main keywords to declare 
    variables: var, let, and const. Each has distinct behaviors and use cases.
    var (Legacy, Function-Scoped)
    Scope: Function-scoped (available throughout the function, ignores block {} boundaries).
    Issues:Not block-scoped, leading to unexpected behavior in loops/blocks.
    Allows redeclaration in the same scope, which can cause bugs.
    Hoisting: Variables are moved to the top of their scope, initialized as undefined, potentially causing confusion.
    Avoid: Use only for legacy code or specific function-scoping needs.
    Why Avoid var?
    Block Scope Issue: var ignores {} blocks, causing bugs in loops (e.g., for loops with setTimeout).
    Redeclaration Bugs: Accidental redeclarations overwrite values.
    Hoisting Confusion: Accessing variables before declaration returns undefined.
*/
const accountId = 144553
let accountEmail = "neha@google.com"
var accountPassword = "12345"
accountCity = "Modinagar"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// for (var j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000); // Prints 3, 3, 3
// }
// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000); // Prints 0, 1, 2
// }

var x = 1;
var x = 2; //  Redeclaration allowed
console.log(y); // undefined (hoisted)
var y = 10;

/*
  * let (Modern, Block-Scoped)
  ->Introduced in ES6 (2015) to address var issues.
  ->Scope: Block-scoped (limited to {} blocks like if, for).
  Features:
  ->No redeclaration allowed in the same scope.
  ->Temporal Dead Zone (TDZ): Cannot access variable before its declaration (prevents hoisting-related bugs).
  Use: Default choice for variables that need to be reassigned.
*/

if (true) {
    let blockScoped = "Inside block";
    console.log(blockScoped); // ✅ Works
}
// console.log(blockScoped); // ❌ ReferenceError
// let x = 1;
// let x = 2; // ❌ SyntaxError (no redeclaration)
// console.log(y); // ❌ ReferenceError (TDZ)
// let y = 10;

/*
  * const (Block-Scoped, Immutable)
   ->Scope: Block-scoped, like let.
  * Features:
    ->Cannot be reassigned after declaration (but objects/arrays can have their contents modified).
    ->Must be initialized at declaration.
  * Use: Preferred for values that shouldn’t change (e.g., constants, configuration values)
*/
const PI = 3.14;
// PI = 3.25; // ❌ TypeError
const obj = { value: 1 };
obj.value = 2; // ✅Allowed (object properties are mutable)

/*
  * Best Practices
   ->Use let by default: Safer, block-scoped, avoids var issues.
   ->Use const for immutable values: Improves code clarity and prevents accidental reassignments.
   ->Avoid var: Only use for legacy code or specific function-scoping needs.
   ->Prefer not to use var because of issue in block scope and functional scope
   ->JS isCase-Sensitive: myVar ≠ myvar.
*/

