// ========================
// TERMINOLOGI KODING JAVASCRIPT LENGKAP
// ========================

// 1. VARIABEL (Variable)
// Tempat menyimpan data yang bisa berubah
let nama = "John";
const umur = 25;
var kota = "Jakarta";

console.log("=== VARIABEL ===");
console.log("nama:", nama);
console.log("umur:", umur);
console.log("kota:", kota);

// 2. TIPE DATA (Data Types)
console.log("\n=== TIPE DATA ===");

// String - teks
let string = "Hello World";
console.log("String:", string, "- Type:", typeof string);

// Number - angka
let number = 42;
console.log("Number:", number, "- Type:", typeof number);

// Boolean - true/false
let boolean = true;
console.log("Boolean:", boolean, "- Type:", typeof boolean);

// Undefined - tidak terdefinisi
let undefined_var;
console.log("Undefined:", undefined_var, "- Type:", typeof undefined_var);

// Null - kosong
let null_var = null;
console.log("Null:", null_var, "- Type:", typeof null_var);

// 3. OBJEK (Object)
// Kumpulan pasangan key-value
console.log("\n=== OBJEK ===");

let person = {
    // Property/Key: Value
    name: "Alice",        // name = key/property, "Alice" = value
    age: 30,             // age = key/property, 30 = value
    city: "Bandung",     // city = key/property, "Bandung" = value
    isMarried: false,    // isMarried = key/property, false = value
    
    // Method - function dalam objek
    greet: function() {
        return "Hello, saya " + this.name;
    }
};

console.log("Objek person:", person);
console.log("Property 'name':", person.name);
console.log("Property 'age':", person.age);
console.log("Method 'greet':", person.greet());

// 4. ARRAY (Array)
// Kumpulan data yang berurutan dengan index
console.log("\n=== ARRAY ===");

let fruits = ["apel", "pisang", "jeruk", "mangga"];
//  Index:    0       1        2        3

console.log("Array fruits:", fruits);
console.log("Index 0:", fruits[0]);
console.log("Index 1:", fruits[1]);
console.log("Panjang array:", fruits.length);

// 5. FUNCTION (Fungsi)
// Blok kode yang dapat dipanggil ulang
console.log("\n=== FUNCTION ===");

// Function Declaration
function tambah(a, b) {  // a, b = parameter
    return a + b;        // return = mengembalikan nilai
}

// Function Expression
const kali = function(x, y) {
    return x * y;
};

// Arrow Function
const bagi = (x, y) => {
    return x / y;
};

// Memanggil function dengan argument
console.log("tambah(5, 3):", tambah(5, 3));  // 5, 3 = argument
console.log("kali(4, 2):", kali(4, 2));
console.log("bagi(10, 2):", bagi(10, 2));

// 6. SCOPE (Ruang Lingkup)
console.log("\n=== SCOPE ===");

let globalVar = "Global"; // Global scope

function testScope() {
    let localVar = "Local"; // Local scope
    console.log("Dari dalam function:", globalVar, localVar);
}

testScope();
console.log("Dari luar function:", globalVar);
// console.log(localVar); // Error - tidak bisa diakses

// 7. CONDITIONAL (Percabangan)
console.log("\n=== CONDITIONAL ===");

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Switch case
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Hari Senin");
        break;
    case "Tuesday":
        console.log("Hari Selasa");
        break;
    default:
        console.log("Hari lainnya");
}

// 8. LOOP (Perulangan)
console.log("\n=== LOOP ===");

// For loop
console.log("For loop:");
for (let i = 0; i < 3; i++) {  // i = iterator
    console.log("Iterasi ke-" + i);
}

// While loop
console.log("While loop:");
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;  // increment
}

// For...in loop (untuk objek)
console.log("For...in loop:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For...of loop (untuk array)
console.log("For...of loop:");
for (let fruit of fruits) {
    console.log("Buah: " + fruit);
}

// 9. ARRAY METHODS
console.log("\n=== ARRAY METHODS ===");

let numbers = [1, 2, 3, 4, 5];

// push() - menambah ke akhir
numbers.push(6);
console.log("Setelah push(6):", numbers);

// pop() - menghapus dari akhir
let removed = numbers.pop();
console.log("Setelah pop():", numbers, "- Removed:", removed);

// forEach() - iterasi setiap elemen
numbers.forEach(function(num, index) {
    console.log("Index " + index + ": " + num);
});

// map() - transformasi setiap elemen
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() - filter elemen berdasarkan kondisi
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 10. OBJECT METHODS
console.log("\n=== OBJECT METHODS ===");

// Object.keys() - mendapat semua key
let keys = Object.keys(person);
console.log("Keys:", keys);

// Object.values() - mendapat semua value
let values = Object.values(person);
console.log("Values:", values);

// Object.entries() - mendapat pasangan key-value
let entries = Object.entries(person);
console.log("Entries:", entries);

// 11. DESTRUCTURING
console.log("\n=== DESTRUCTURING ===");

// Array destructuring
let [first, second, third] = fruits;
console.log("First:", first, "Second:", second, "Third:", third);

// Object destructuring
let {name, age, city} = person;
console.log("Name:", name, "Age:", age, "City:", city);

// 12. SPREAD OPERATOR (...)
console.log("\n=== SPREAD OPERATOR ===");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // spread array
console.log("Combined arrays:", combined);

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combinedObj = {...obj1, ...obj2};  // spread object
console.log("Combined objects:", combinedObj);

// 13. TEMPLATE LITERAL
console.log("\n=== TEMPLATE LITERAL ===");

let username = "Bob";
let userAge = 25;
let message = `Hello, nama saya ${username} dan umur saya ${userAge} tahun`;
console.log(message);

// 14. CALLBACK FUNCTION
console.log("\n=== CALLBACK FUNCTION ===");

function processData(data, callback) {
    console.log("Processing data:", data);
    callback(data);
}

function displayResult(result) {
    console.log("Result:", result);
}

processData("Hello World", displayResult);

// 15. PROMISE (Asynchronous)
console.log("\n=== PROMISE ===");

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => console.log("Promise resolved:", result))
    .catch(error => console.log("Promise rejected:", error));

// 16. ASYNC/AWAIT
console.log("\n=== ASYNC/AWAIT ===");

async function fetchData() {
    try {
        // Simulasi fetch data
        let result = await new Promise(resolve => {
            setTimeout(() => resolve("Data fetched!"), 1000);
        });
        console.log("Async result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

// 17. CLASS (ES6)
console.log("\n=== CLASS ===");

class Animal {
    constructor(name, type) {  // constructor - method khusus untuk inisialisasi
        this.name = name;      // this - referensi ke instance object
        this.type = type;
    }
    
    speak() {  // method
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {  // inheritance - pewarisan
    constructor(name, breed) {
        super(name, "mammal");  // super - memanggil constructor parent
        this.breed = breed;
    }
    
    speak() {  // method override
        return `${this.name} barks`;
    }
}

let dog = new Dog("Rex", "Golden Retriever");  // instance
console.log("Dog instance:", dog);
console.log("Dog speaks:", dog.speak());

// 18. MODULE (Import/Export)
console.log("\n=== MODULE CONCEPT ===");

// Contoh export (biasanya di file terpisah)
// export const PI = 3.14159;
// export function calculateArea(radius) {
//     return PI * radius * radius;
// }

// Contoh import (biasanya di file lain)
// import { PI, calculateArea } from './math.js';

console.log("Module: Export/Import digunakan untuk membagi kode ke file terpisah");

// 19. CLOSURE
console.log("\n=== CLOSURE ===");

function outerFunction(x) {
    // Variabel di outer scope
    return function innerFunction(y) {
        // Inner function bisa akses variabel dari outer function
        return x + y;
    };
}

let addFive = outerFunction(5);
console.log("Closure result:", addFive(3)); // 8

// 20. HOISTING
console.log("\n=== HOISTING ===");

console.log("Hoisting var:", hoistedVar); // undefined (tidak error)
var hoistedVar = "Hello";

// console.log(hoistedLet); // Error - Cannot access before initialization
let hoistedLet = "World";

// Function hoisting
console.log("Hoisted function:", hoistedFunction()); // Works

function hoistedFunction() {
    return "I'm hoisted!";
}

// RINGKASAN TERMINOLOGI PENTING:
console.log("\n=== RINGKASAN TERMINOLOGI ===");
console.log(`
1. Variable: Tempat menyimpan data
2. Object: Kumpulan key-value pairs
3. Property/Key: Nama identifier dalam object
4. Value: Data yang disimpan
5. Array: Kumpulan data berurutan dengan index
6. Function: Blok kode yang dapat dipanggil ulang
7. Parameter: Variabel dalam definisi function
8. Argument: Nilai yang dikirim ke function
9. Method: Function yang ada dalam object
10. Scope: Ruang lingkup variabel
11. Loop: Perulangan
12. Conditional: Percabangan (if/else)
13. Callback: Function yang dipanggil oleh function lain
14. Promise: Menangani operasi asynchronous
15. Class: Template untuk membuat object
16. Instance: Object yang dibuat dari class
17. Inheritance: Pewarisan dari class parent
18. Closure: Function yang mengakses variabel dari scope luar
19. Hoisting: Mekanisme JavaScript mengangkat deklarasi ke atas
20. Destructuring: Ekstraksi data dari array/object
`);