/**
 * if-else Statements in JavaScript
 * --------------------------------
 * The if-else statement executes a block of code if a condition is truthy;
 * otherwise, it executes the else block.
 *
 * ✅ Uses:
 *  - Basic conditional logic
 *  - Checking multiple conditions (including ranges)
 *  - Works with any boolean expression
 *  - Nested if-else for complex flows
 *  - Can combine with &&, ||, ternary operators
 *
 * 👉 Real-world relevance:
 *  - Age verification
 *  - Login/Signup checks
 *  - Form validation
 *  - Role-based access (Admin/User)
 *  - Feature toggles in projects
 */

"use strict";

// 1. Basic Example
let age = 18;
if (age >= 18) {
  console.log("✅ You are an adult");
} else {
  console.log("❌ You are a minor");
}

// 2. Nested if-else (multiple conditions)
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}

// 3. Using Logical Operators
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin!");
} else if (isLoggedIn && !isAdmin) {
  console.log("Welcome User!");
} else {
  console.log("Please log in first");
}

// 4. Checking Ranges
let temp = 32;
if (temp < 0) {
  console.log("Freezing weather 🥶");
} else if (temp >= 0 && temp < 20) {
  console.log("Cold weather ❄️");
} else if (temp >= 20 && temp < 35) {
  console.log("Normal weather 🌤️");
} else {
  console.log("Hot weather 🔥");
}

// 5.  Example: Feature Toggle (project use case)
let featureEnabled = false;
if (featureEnabled) {
  console.log("🚀 New Feature Active!");
} else {
  console.log("🛑 Feature is disabled, using fallback...");
}

// 6.  Example: Role-based Navigation (e.g., in projects)
let role = "manager"; // can be "admin", "user", "manager"
if (role === "admin") {
  console.log("Redirecting to Admin Dashboard...");
} else if (role === "manager") {
  console.log("Redirecting to Manager Panel...");
} else {
  console.log("Redirecting to User Homepage...");
}

// 7.  Example: Security Check (project-like use) real life used ex
let password = "1234";
if (!password) {
  console.log("❌ Password cannot be empty");
} else if (password.length < 6) {
  console.log("⚠️ Password too short");
} else {
  console.log("✅ Password is valid");
}
