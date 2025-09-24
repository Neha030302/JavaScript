/**
 * switch-case in JavaScript
 * --------------------------
 * The switch statement is used to perform different actions
 * based on different conditions. It’s an alternative to multiple if-else.
 *
 * ✅ Features:
 * - Compares values using strict equality (===)
 * - Works best when checking one variable against many values
 * - Can include a default case
 * - Can group multiple cases
 *
 * 👉 Real-world usage:
 * - Menu selection
 * - Role-based access
 * - Feature toggles
 * - Handling API response codes
 */

"use strict";

// 1. Basic Example
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}

// 2. Grouping Cases (multiple values → same action)
let fruit = "mango";
switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("Fruit is available in stock 🍎🥭🍌");
    break;
  default:
    console.log("Fruit not available ❌");
}

// 3. Example: Role-based Access (project-like)
let role = "manager"; // admin, manager, user
switch (role) {
  case "admin":
    console.log("Redirect to Admin Dashboard");
    break;
  case "manager":
    console.log("Redirect to Manager Panel");
    break;
  case "user":
    console.log("Redirect to User Homepage");
    break;
  default:
    console.log("No role assigned, redirect to Login");
}

// 4. Example: Menu Selection
let choice = 2; // user selects option from menu
switch (choice) {
  case 1:
    console.log("🍕 Order placed: Pizza");
    break;
  case 2:
    console.log("🍔 Order placed: Burger");
    break;
  case 3:
    console.log("🥤 Order placed: Cold Drink");
    break;
  default:
    console.log("❌ Invalid choice");
}

// 5. Example: API Response Handler
let statusCode = 404;
switch (statusCode) {
  case 200:
    console.log("✅ Request successful");
    break;
  case 201:
    console.log("📦 Resource created");
    break;
  case 400:
    console.log("⚠️ Bad Request");
    break;
  case 401:
    console.log("🔒 Unauthorized");
    break;
  case 404:
    console.log("❌ Resource not found");
    break;
  case 500:
    console.log("💥 Internal Server Error");
    break;
  default:
    console.log("Unknown status code");
}
