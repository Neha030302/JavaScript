/**
 * objects
 * -----------
 * Covers all essential object concepts in JavaScript:
 * - Object literals and property access
 * - Nested objects
 * - Object methods (keys, values, entries)
 * - Object immutability (freeze, seal)
 * - ES6 Classes
 * - Inheritance and method overriding
 */

"use strict";

console.log("1️⃣ Basic Objects & Property Access");

// Basic object
const user = {
    name: "Neha",
    age: 25,
    role: "developer"
};

// Accessing properties
console.log(user.name); // Neha
console.log(user["age"]); // 25

// Adding/Updating properties
user.email = "neha@example.com";
user.age = 26;

// Deleting a property
delete user.role;

// Nested object
const company = {
    name: "TechCorp",
    employees: {
        manager: "Ayush",
        developer: "Neha"
    }
};

console.log(company.employees.manager); // Ayush

// Iterating over properties
for (const key in user) {
    console.log(key, ":", user[key]);
}

console.log("\n2️⃣ Object Methods");

// Object.keys
console.log("Keys:", Object.keys(user)); // ["name","age","email"]

// Object.values
console.log("Values:", Object.values(user)); // ["Neha",26,"neha@example.com"]

// Object.entries
console.log("Entries:", Object.entries(user)); // [["name","Neha"],["age",26],["email","neha@example.com"]]

// Copying objects
const copyUser = Object.assign({}, user);
console.log("Copy:", copyUser);

// Freeze and Seal
Object.freeze(user);
user.age = 30; // ignored
console.log("After freeze:", user.age); // 26

Object.seal(copyUser);
copyUser.name = "Rahul"; // allowed
delete copyUser.email; // ignored
console.log("After seal:", copyUser);

// Checking property
console.log("Has 'name'?", user.hasOwnProperty("name")); // true

console.log("\n3️⃣ ES6 Classes");

// Class declaration
class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} works as ${this.role} with salary $${this.salary}`;
    }

    incrementSalary(amount) {
        this.salary += amount;
    }
}

// Instantiating objects
const emp1 = new Employee("Neha", "Developer", 50000);
console.log(emp1.getDetails());

emp1.incrementSalary(5000);
console.log("Updated Salary:", emp1.getDetails());

console.log("\n4️⃣ Class Inheritance");

// Base class
class EmployeeBase {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns $${this.salary}`;
    }
}

// Derived class
class Manager extends EmployeeBase {
    constructor(name, salary, department) {
        super(name, salary); // call parent constructor
        this.department = department;
    }

    getDetails() {
        return `${this.name} manages ${this.department} and earns $${this.salary}`;
    }
}

const mgr = new Manager("Ayush", 80000, "IT");
console.log(mgr.getDetails());

// ✅ Summary:
// - Objects can have dynamic properties and nested structures
// - Object methods help extract data and enforce immutability
// - Classes provide reusable blueprints for objects
// - Inheritance allows method overriding and code reuse
