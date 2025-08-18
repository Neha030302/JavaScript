/**
 * 1. forEach Method: The forEach method executes a provided callback function once for each array element, without returning a value (returns undefined). It’s used for side effects (e.g., logging, DOM updates).
 * Purpose: Iterates over an array to perform actions without creating a new array.
 * Use Cases: Logging, updating elements, or triggering side effects.
 * Key Points:Callback receives element, index, and array as arguments,
 * Non-mutating unless the callback modifies the array.
 * ECMAScript Spec: Defined as Array.prototype.forEach.
 */

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});


/**
 * Map Method: The map method creates a new array with the results of calling a callback function on each element. It’s immutable (doesn’t modify the original array).
 * Purpose: Transforms each element into a new value, returning a new array.
 * Use Cases: Data transformation, formatting, or projection.
 * Key Points:Callback receives element, index, array,
 * Relates to your higherOrderFunctions.js (mapArray) and forEach (similar iteration).
 */

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (unchanged)

/**
 * 3. Filter Method: The filter method creates a new array with elements that pass a test (callback returns true).
 * Purpose: Selects a subset of elements based on a condition.
 * Use Cases: Filtering data (e.g., active users, even numbers).
 * Key Points:Callback returns a boolean (truthy/falsy evaluation, your truthy/falsy topic).Immutable, like map.
 */
// const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]


/**
 * Reduce Method: The reduce method applies a callback (reducer) to reduce an array to a single value, accumulating results across iterations.
 * Purpose: Aggregates array elements (e.g., sum, concatenation).
 * Use Cases: Summing values, flattening data, or building objects.
 * Key Points: Callback receives accumulator, current, index, array.Optional initial value for accumulator.
 */

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10


/**
 * Sort Method: The sort method sorts an array in place based on a comparison function. Without a callback, it sorts elements as strings.
 * Purpose: Orders array elements (e.g., numerically, alphabetically).
 * Use Cases: Sorting data for display or processing.
 * Key Points:Mutates the original array (unlike map, filter). Callback returns negative, zero, or positive (your comparisons topic).
 */

const number = [4, 2, 5, 1];
number.sort((a, b) => a - b);
console.log(number); // [1, 2, 4, 5]

/**
 * Find: The find method returns the first element where the callback returns true, or undefined if none match.
 * Purpose: Retrieves the first matching element.Use Cases: Searching for specific data (e.g., user by ID).
 * Key Points:Callback returns a boolean.Stops at first match, unlike filter.
 */

const users = [{ id: 1, name: "Ayu" }, { id: 2, name: "Neha" }];
const user = users.find((user) => user.id === 1);
console.log(user); // { id: 1, name: "Ayu" }


/**
 * Every Method: The every method tests if all elements pass a callback’s condition (returns true).
 * Purpose: Validates all elements meet a criterion.
 * Use Cases: Checking data integrity (e.g., all users are adults).
 * Key Points:Stops at first false (short-circuits).Callback uses true/false (boolean).Relates to your filter and logicalOperators.(similar to &&).
 */