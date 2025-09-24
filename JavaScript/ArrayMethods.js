/**
// important array methods 
 * 
 * 1. forEach Method: The forEach method executes a provided callback function once for each array element, without returning a value (returns undefined). It’s used for side effects (e.g., logging, DOM updates).
 * Purpose: Iterates over an array to perform actions without creating a new array.
 * Use Cases: Logging, updating elements, or triggering side effects.
 * Key Points:Callback receives element, index, and array as arguments,
 * Non-mutating unless the callback modifies the array.
 * ECMAScript Spec: Defined as Array.prototype.forEach.
 */

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    // console.log(`Fruit ${index + 1}: ${fruit}`);
});

const numbers = [4, 2, 5, 8];

// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function (number, index) {
//     console.log(`index is ${index} number is ${number}`);
// });

numbers.forEach(function (number, index) {
    // console.log(number * 2, index);
})

const users = [
    { firstName: "neha", age: 23 },
    { firstName: "ayush", age: 21 },
    { firstName: "ayu", age: 22 },
    { firstName: "garima", age: 20 },
]

users.forEach(function (user) {
    // console.log(user.firstName);
});

users.forEach((user, index) => {
    // console.log(user.firstName, index);
})

for (let user of users) {
    // console.log(user.firstName);
}


/**
 * Map Method: The map method creates a new array with the results of calling a callback function on each element. It’s immutable (doesn’t modify the original array).
 * Purpose: Transforms each element into a new value, returning a new array.
 * Use Cases: Data transformation, formatting, or projection.
 * Key Points:Callback receives element, index, array,
 * Relates to your higherOrderFunctions.js (mapArray) and forEach (similar iteration).
 */

// const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4] (unchanged)

// map method 
// const numbers = [3,4,6,1,8];

const square = function (number) {
    return number * number;
}

const squareNumber = numbers.map((number, index) => {
    return index;
});
// console.log(squareNumber);

const userNames = users.map((user) => {
    return user.firstName;
});

// console.log(userNames);

/**
 * 3. Filter Method: The filter method creates a new array with elements that pass a test (callback returns true).
 * Purpose: Selects a subset of elements based on a condition.
 * Use Cases: Filtering data (e.g., active users, even numbers).
 * Key Points:Callback returns a boolean (truthy/falsy evaluation, your truthy/falsy topic).Immutable, like map.
 */
// const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2, 4]


/**
 * Reduce Method: The reduce method applies a callback (reducer) to reduce an array to a single value, accumulating results across iterations.
 * Purpose: Aggregates array elements (e.g., sum, concatenation).
 * Use Cases: Summing values, flattening data, or building objects.
 * Key Points: Callback receives accumulator, current, index, array.Optional initial value for accumulator.
 */

const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10
// reduce 
// const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000


/**
 * Sort Method: The sort method sorts an array in place based on a comparison function. Without a callback, it sorts elements as strings.
 * Purpose: Orders array elements (e.g., numerically, alphabetically).
 * Use Cases: Sorting data for display or processing.
 * Key Points:Mutates the original array (unlike map, filter). Callback returns negative, zero, or positive (your comparisons topic).
 */

const number = [4, 2, 5, 1];
number.sort((a, b) => a - b);
// console.log(number); // [1, 2, 4, 5]


// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
const products = [
    { productId: 1, produceName: "p1", price: 300 },
    { productId: 2, produceName: "p2", price: 3000 },
    { productId: 3, produceName: "p3", price: 200 },
    { productId: 4, produceName: "p4", price: 8000 },
    { productId: 5, produceName: "p5", price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price
});

const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});


users.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return 1;
    } else {
        return -1;
    }
});

// console.log(users);


/**
 * Find: The find method returns the first element where the callback returns true, or undefined if none match.
 * Purpose: Retrieves the first matching element.Use Cases: Searching for specific data (e.g., user by ID).
 * Key Points:Callback returns a boolean.Stops at first match, unlike filter.
 */

// const users = [{ id: 1, name: "Ayu" }, { id: 2, name: "Neha" }];
const user = users.find((user) => user.id === 1);
// console.log(user); // { id: 1, name: "Ayu" }


// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);



const myUser = users.find((user)=>user.userId===3);
console.log(myUser);


/**
 * Every Method: The every method tests if all elements pass a callback’s condition (returns true).
 * Purpose: Validates all elements meet a criterion.
 * Use Cases: Checking data integrity (e.g., all users are adults).
 * Key Points:Stops at first false (short-circuits).Callback uses true/false (boolean).Relates to your filter and logicalOperators.(similar to &&).
 */

// const ages = [18, 25, 30];
// const allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // true


// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);


/**
 * Some Method: The some method tests if at least one element passes a callback’s condition (returns true).
 * Purpose: Checks if any element meets a criterion.
 * Use Cases: Verifying existence (e.g., any admin users).
 * Key Points:Stops at first true (short-circuits).Callback uses boolean.Relates to your logicalOperators.js (||).
 */

const ages = [16, 18, 20];
const hasAdult = ages.some((age) => age >= 18);
// console.log(hasAdult); // true

// some method 

// const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
//     {productId: 3, productName: "macbook", price: 25000},
// ]

// const ans = userCart.some((cartItem)=>cartItem.price > 100000);
// console.log(ans);



/**
 * Fill Method: The fill method fills all or part of an array with a static value, modifying the array in place.
 * Purpose: Initializes or resets array elements to a specific value.
 * Use Cases: Creating arrays with default values, resetting data.
 * Key Points:Mutates the original array.Takes value, optional start, and end indices.Not an HOF (no callback).
 */


const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]

// fill method 
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);


/**
 * Splice Method: The splice method modifies an array by removing, replacing, or adding elements, returning removed elements.
 * Purpose: Alters array contents at specific indices.
 * Use Cases: Deleting items, inserting data, or replacing elements.
 * Key Points:Mutates the original array.Takes start, deleteCount, and optional items to add.
 */

// const fruits = ["apple", "banana", "orange"];
const removed = fruits.splice(1, 1, "grape");
// console.log(fruits); // ["apple", "grape", "orange"]
// console.log(removed); // ["banana"]

// splice method 
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);