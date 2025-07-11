// Panduan Lengkap Terminologi Coding

// 1. VARIABLE (Variabel)
let name = "John";          // Variable declaration
const age = 25;             // Constant variable
var city = "Jakarta";       // Variable (old style)

// 2. DATA TYPES (Tipe Data)
// Primitive Types
let text = "Hello";         // String
let number = 42;            // Number
let isActive = true;        // Boolean
let nothing = null;         // Null
let notDefined = undefined; // Undefined

// Complex Types
let person = {};            // Object
let colors = [];            // Array
let callback = function(){}; // Function

// 3. KEYWORDS (Kata Kunci)
// function                    // Function keyword
// class                      // Class keyword
// if, else                   // Conditional keywords
// for, while                 // Loop keywords
// return                     // Return keyword
// import, export             // Module keywords
// let, const, var            // Variable keywords

// 4. OPERATORS (Operator)
// Arithmetic Operators
let sum = 5 + 3;           // Addition operator (+)
let diff = 10 - 4;         // Subtraction operator (-)
let product = 6 * 7;       // Multiplication operator (*)
let quotient = 15 / 3;     // Division operator (/)

// Comparison Operators
let isAdult = age > 18;        // Greater than (>)
let isYoung = age < 65;        // Less than (<)
let isExactAge = age === 25;   // Strict equality (===)
let isNotAge = age !== 30;     // Not equal (!==)

// Logical Operators
let bothTrue = isActive && isExactAge;  // AND operator (&&)
let eitherTrue = isActive || isExactAge; // OR operator (||)
let notActive = !isActive;               // NOT operator (!)

// Assignment Operators
let x = 5;                 // Assignment (=)
x += 3;                    // Addition assignment (+=)
x -= 2;                    // Subtraction assignment (-=)

// 5. FUNCTIONS (Fungsi)
// Function Declaration
function greet(name) {     // Function name: greet
    return "Hello " + name; // Return statement
}

// Function Expression
const add = function(a, b) { // Anonymous function
    return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y; // Arrow function

// Method (function in object)
const calculator = {
    add: function(a, b) {   // Method
        return a + b;
    }
};

// 6. PARAMETERS & ARGUMENTS
function createUser(name, age, email) { // Parameters
    return {
        name: name,
        age: age,
        email: email
    };
}

// Function call with arguments
let newUser = createUser("John", 25, "john@email.com"); // Arguments

// 7. OBJECTS (Objek)
const personObj = {           // Object literal
    name: "Alice",         // Property (key-value pair)
    age: 30,               // Property
    address: {             // Nested object
        street: "Jl. Sudirman",
        city: "Jakarta"
    },
    greet: function() {    // Method
        return "Hello!";
    }
};

// Accessing properties
let personName = personObj.name;    // Dot notation
let personAge = personObj["age"];   // Bracket notation

// 8. ARRAYS (Array)
const fruits = ["apple", "banana", "orange"]; // Array literal
const numbers = [1, 2, 3, 4, 5];             // Array of numbers
const mixed = [1, "hello", true, null];      // Mixed array

// Array methods
fruits.push("grape");      // Add element
fruits.pop();              // Remove last element
let arrayLength = fruits.length;             // Array length property

// 9. CONTROL STRUCTURES (Struktur Kontrol)
// Conditional Statements
if (age >= 18) {           // If statement
    console.log("Adult");
} else if (age >= 13) {    // Else if statement
    console.log("Teen");
} else {                   // Else statement
    console.log("Child");
}

// Switch Statement
let day = "Monday";
switch (day) {             // Switch statement
    case "Monday":         // Case
        console.log("Start of work week");
        break;             // Break statement
    case "Friday":
        console.log("TGIF!");
        break;
    default:               // Default case
        console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {  // For loop
    console.log(i);            // Loop body
}

let condition = true;
let counter = 0;
while (counter < 3) {        // While loop
    console.log("Counter:", counter);
    counter++;
}

do {                       // Do-while loop
    console.log("This runs at least once");
} while (false);

// 10. CLASSES (Kelas)
class Animal {             // Class declaration
    constructor(name) {    // Constructor
        this.name = name;  // Instance property
    }
    
    speak() {              // Method
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal { // Inheritance (extends)
    constructor(name, breed) {
        super(name);       // Super keyword
        this.breed = breed;
    }
    
    speak() {              // Method override
        return `${this.name} barks`;
    }
}

const myDog = new Dog("Rex", "Golden Retriever"); // Instance

// 11. MODULES (Modul)
// Export (ES6 modules)
// export const PI = 3.14159;        // Named export
// export default function add(a, b) { // Default export
//     return a + b;
// }

// Import
// import add, { PI } from './math.js';  // Import statement
// import * as math from './math.js';    // Import all

// 12. DESTRUCTURING (Destructuring)
// Array destructuring
const [first, second] = [1, 2, 3];   // Array destructuring
const [head, ...tail] = [1, 2, 3, 4]; // Rest operator

// Object destructuring
const { name: userName, age: userAge } = personObj;         // Object destructuring
const { name: aliasName } = personObj;    // Renaming

// 13. TEMPLATE LITERALS (Template Literals)
const userName2 = "John";
const userAge2 = 25;

// Template literal with backticks
const message = `Hello, my name is ${userName2} and I'm ${userAge2} years old`;

// Multi-line strings
const html = `
    <div>
        <h1>${userName2}</h1>
        <p>Age: ${userAge2}</p>
    </div>
`;

// 14. PROMISES & ASYNC/AWAIT
// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {  // Promise constructor
        setTimeout(() => {
            resolve("Data loaded");            // Resolve
        }, 1000);
    });
};

// Using Promise
fetchData()
    .then(data => console.log(data))          // Then method
    .catch(error => console.error(error));    // Catch method

// Async/Await
async function getData() {                    // Async function
    try {
        const data = await fetchData();       // Await keyword
        console.log(data);
    } catch (error) {                         // Try-catch block
        console.error(error);
    }
}

// 15. REACT SPECIFIC TERMS (dalam JSX format)
// JSX (JavaScript XML)
// const element = <h1>Hello World</h1>;        // JSX element

// Component
// function Welcome(props) {                     // Function component
//     return <h1>Hello, {props.name}!</h1>;
// }

// class Welcome extends React.Component {       // Class component
//     render() {                                // Render method
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }

// Props
// <Welcome name="John" age={25} />             // Props

// State
// const [count, setCount] = useState(0);       // State hook

// Event handlers
// <button onClick={handleClick}>Click me</button> // Event handler

// 16. HTML/CSS TERMS (dalam string format)
const htmlExample = `
<!-- HTML Tags -->
<div>Content</div>                           <!-- Opening/closing tag -->
<img src="image.jpg" alt="Description" />    <!-- Self-closing tag -->
<p class="highlight">Text</p>                <!-- Attribute -->
`;

const cssExample = `
/* CSS */
.highlight {                                 /* CSS Selector */
    color: red;                              /* CSS Property */
    font-size: 16px;                         /* CSS Value */
}
`;

// 17. COMMON PROGRAMMING CONCEPTS
// Scope
let globalVar = "I'm global";               // Global scope
function myFunction() {
    let localVar = "I'm local";             // Local scope
    if (true) {
        let blockVar = "I'm block scoped";  // Block scope
    }
}

// Callback
function processData(data, callback) {      // Callback parameter
    const result = data.toUpperCase();
    callback(result);                       // Callback execution
}

// Higher-order function
const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map(n => n * 2);   // Map is higher-order function

// Closure
function outerFunction(x) {
    return function innerFunction(y) {      // Closure
        return x + y;
    };
}

// 18. ERROR HANDLING
// Try-catch block
try {
    // const result = riskyOperation();        // Try block
    console.log("Trying something risky");
} catch (error) {                          // Catch block
    console.error("An error occurred:", error);
} finally {                                // Finally block
    console.log("This always runs");
}

// Throwing errors
function throwError() {
    throw new Error("Something went wrong");   // Throw statement
}

// 19. REGULAR EXPRESSIONS
const pattern = /[a-z]+/g;                 // Regular expression literal
const regex = new RegExp("pattern", "g");  // RegExp constructor
const textToMatch = "hello world";
const match = textToMatch.match(pattern);         // Pattern matching

// 20. COMMENTS
// Single line comment
/* 
   Multi-line comment
   Can span multiple lines
*/

/**
 * JSDoc comment
 * @param {string} name - The name parameter
 * @returns {string} - The greeting message
 */
function greetWithDoc(name) {
    return `Hello, ${name}!`;
}

// 21. IDENTIFIERS & NAMING
// Valid identifiers
let userName3 = "John";                      // camelCase
let user_name = "John";                     // snake_case
let UserName = "John";                      // PascalCase
let USER_NAME = "John";                     // CONSTANT_CASE

// Invalid identifiers (commented out because they cause errors)
// let 123abc = "invalid";                  // Can't start with number
// let user-name = "invalid";               // Can't contain hyphens
// let class = "invalid";                   // Can't use reserved words

// 22. EXPRESSIONS & STATEMENTS
// Expressions (produce values)
let expression1 = 5 + 3;                                      // Arithmetic expression
let expression2 = personObj.name;                                  // Member expression
let expression3 = isActive ? "Yes" : "No";                    // Conditional expression

// Statements (perform actions)
let y = 5;                                 // Variable declaration statement
if (true) { 
    console.log("If statement executed");
}                         // If statement
for (let i = 0; i < 3; i++) { 
    console.log("For loop:", i);
}           // For statement

// 23. HOISTING
// Function hoisting
console.log("Function hoisting example:");
console.log(sayHello());                   // Works due to hoisting
function sayHello() {
    return "Hello!";
}

// Variable hoisting
console.log("Variable hoisting example:");
console.log(hoistedVar);                            // undefined (not error)
var hoistedVar = 5;

// 24. PROTOTYPE & INHERITANCE
// Prototype
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {       // Adding to prototype
    return `Hello, I'm ${this.name}`;
};

// Inheritance
function Student(name, school) {
    Person.call(this, name);                // Call parent constructor
    this.school = school;
}
Student.prototype = Object.create(Person.prototype); // Inherit prototype
Student.prototype.constructor = Student;

// Create instances
const person1 = new Person("Alice");
const student1 = new Student("Bob", "MIT");

console.log("Person greeting:", person1.greet());
console.log("Student greeting:", student1.greet());

// Export untuk digunakan di file lain (uncomment jika diperlukan)
// module.exports = {
//     greet,
//     add,
//     multiply,
//     calculator,
//     createUser,
//     Animal,
//     Dog,
//     fetchData,
//     getData,
//     Person,
//     Student
// };