// TERMINOLOGI CODING PALING MENDASAR di JavaScript
// Penjelasan setiap bagian kode secara detail

// ===== CONTOH 1: VARIABLE DECLARATION =====
let name = "John";

// Penjelasan setiap bagian:
// let      → KEYWORD (kata kunci untuk mendeklarasikan variable)
// name     → IDENTIFIER (nama variable/pengenal)
// =        → ASSIGNMENT OPERATOR (operator penugasan)
// "John"   → STRING LITERAL (nilai teks dalam tanda petik)
// ;        → SEMICOLON (titik koma, penanda akhir statement)

// ===== CONTOH 2: NUMBER VARIABLE =====
let age = 25;

// Penjelasan:
// let      → KEYWORD
// age      → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// 25       → NUMBER LITERAL (nilai angka)
// ;        → SEMICOLON

// ===== CONTOH 3: BOOLEAN VARIABLE =====
let isActive = true;

// Penjelasan:
// let      → KEYWORD
// isActive → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// true     → BOOLEAN LITERAL (nilai benar/salah)
// ;        → SEMICOLON

// ===== CONTOH 4: FUNCTION DECLARATION =====
function greet(name) {
    return "Hello " + name;
}

// Penjelasan setiap bagian:
// function → KEYWORD (kata kunci untuk membuat function)
// greet    → FUNCTION NAME (nama function)
// (        → OPENING PARENTHESIS (kurung buka)
// name     → PARAMETER (parameter/input function)
// )        → CLOSING PARENTHESIS (kurung tutup)
// {        → OPENING BRACE (kurung kurawal buka)
// return   → KEYWORD (kata kunci untuk mengembalikan nilai)
// "Hello " → STRING LITERAL
// +        → CONCATENATION OPERATOR (operator penggabungan string)
// name     → VARIABLE REFERENCE (referensi ke variable)
// ;        → SEMICOLON
// }        → CLOSING BRACE (kurung kurawal tutup)

// ===== CONTOH 5: FUNCTION CALL =====
let greeting = greet("Alice");

// Penjelasan:
// let      → KEYWORD
// greeting → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// greet    → FUNCTION NAME (nama function yang dipanggil)
// (        → OPENING PARENTHESIS
// "Alice"  → ARGUMENT (nilai yang dikirim ke function)
// )        → CLOSING PARENTHESIS
// ;        → SEMICOLON

// ===== CONTOH 6: OBJECT LITERAL =====
let person = {
    name: "John",
    age: 30
};

// Penjelasan:
// let      → KEYWORD
// person   → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// {        → OPENING BRACE (mulai object)
// name     → PROPERTY KEY (kunci properti)
// :        → COLON (titik dua, pemisah key-value)
// "John"   → PROPERTY VALUE (nilai properti)
// ,        → COMMA (koma, pemisah antar properti)
// age      → PROPERTY KEY
// :        → COLON
// 30       → PROPERTY VALUE
// }        → CLOSING BRACE (akhir object)
// ;        → SEMICOLON

// ===== CONTOH 7: ARRAY LITERAL =====
let colors = ["red", "green", "blue"];

// Penjelasan:
// let      → KEYWORD
// colors   → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// [        → OPENING BRACKET (kurung siku buka)
// "red"    → ARRAY ELEMENT (elemen array)
// ,        → COMMA (pemisah antar elemen)
// "green"  → ARRAY ELEMENT
// ,        → COMMA
// "blue"   → ARRAY ELEMENT
// ]        → CLOSING BRACKET (kurung siku tutup)
// ;        → SEMICOLON

// ===== CONTOH 8: IF STATEMENT =====
if (age > 18) {
    console.log("Adult");
}

// Penjelasan:
// if       → KEYWORD (kata kunci kondisional)
// (        → OPENING PARENTHESIS
// age      → VARIABLE REFERENCE
// >        → COMPARISON OPERATOR (operator perbandingan)
// 18       → NUMBER LITERAL
// )        → CLOSING PARENTHESIS
// {        → OPENING BRACE (mulai block)
// console  → OBJECT REFERENCE
// .        → DOT OPERATOR (operator titik)
// log      → METHOD NAME (nama method)
// (        → OPENING PARENTHESIS
// "Adult"  → ARGUMENT
// )        → CLOSING PARENTHESIS
// ;        → SEMICOLON
// }        → CLOSING BRACE (akhir block)

// ===== CONTOH 9: FOR LOOP =====
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Penjelasan:
// for      → KEYWORD (kata kunci perulangan)
// (        → OPENING PARENTHESIS
// let      → KEYWORD
// i        → LOOP VARIABLE (variable perulangan)
// =        → ASSIGNMENT OPERATOR
// 0        → INITIAL VALUE (nilai awal)
// ;        → SEMICOLON (pemisah bagian for)
// i        → VARIABLE REFERENCE
// <        → COMPARISON OPERATOR
// 5        → LIMIT VALUE (nilai batas)
// ;        → SEMICOLON
// i        → VARIABLE REFERENCE
// ++       → INCREMENT OPERATOR (operator penambahan)
// )        → CLOSING PARENTHESIS
// {        → OPENING BRACE
// console.log(i); → STATEMENT dalam loop
// }        → CLOSING BRACE

// ===== CONTOH 10: ARROW FUNCTION =====
const multiply = (a, b) => a * b;

// Penjelasan:
// const    → KEYWORD (konstanta)
// multiply → IDENTIFIER (nama variable)
// =        → ASSIGNMENT OPERATOR
// (        → OPENING PARENTHESIS
// a        → PARAMETER
// ,        → COMMA (pemisah parameter)
// b        → PARAMETER
// )        → CLOSING PARENTHESIS
// =>       → ARROW FUNCTION SYNTAX (sintaks arrow function)
// a        → VARIABLE REFERENCE
// *        → MULTIPLICATION OPERATOR (operator perkalian)
// b        → VARIABLE REFERENCE
// ;        → SEMICOLON

// ===== GLOSARIUM ISTILAH MENDASAR =====

/*
KEYWORD         = Kata kunci yang sudah ditentukan (let, const, var, function, if, for, etc.)
IDENTIFIER      = Nama yang kita buat untuk variable, function, dll.
LITERAL         = Nilai langsung (angka, string, boolean)
OPERATOR        = Simbol untuk operasi (+, -, *, /, =, ==, >, <, etc.)
SEMICOLON (;)   = Penanda akhir statement
PARENTHESIS ()  = Kurung biasa
BRACE {}        = Kurung kurawal
BRACKET []      = Kurung siku
COMMA (,)       = Koma, pemisah elemen
COLON (:)       = Titik dua
DOT (.)         = Titik, untuk mengakses properti/method
QUOTATION ""    = Tanda petik untuk string
STATEMENT       = Baris kode yang melakukan aksi
EXPRESSION      = Kode yang menghasilkan nilai
BLOCK           = Kode dalam kurung kurawal {}
PARAMETER       = Input function (dalam definisi)
ARGUMENT        = Input function (saat pemanggilan)
PROPERTY        = Atribut dalam object
METHOD          = Function dalam object
ELEMENT         = Item dalam array
VARIABLE        = Wadah untuk menyimpan nilai
FUNCTION        = Blok kode yang bisa dipanggil
OBJECT          = Kumpulan properti
ARRAY           = Kumpulan elemen berurutan
*/

// ===== LATIHAN IDENTIFIKASI =====
// Coba identifikasi setiap bagian dari kode berikut:

let student = {
    name: "Sarah",
    grade: 95,
    subjects: ["Math", "Science", "English"],
    isGraduated: false,
    getInfo: function() {
        return this.name + " has grade " + this.grade;
    }
};

console.log(student.getInfo());

/*
LATIHAN JAWABAN:
- let          = KEYWORD
- student      = IDENTIFIER
- =            = ASSIGNMENT OPERATOR
- {            = OPENING BRACE
- name         = PROPERTY KEY
- :            = COLON
- "Sarah"      = STRING LITERAL
- ,            = COMMA
- grade        = PROPERTY KEY
- :            = COLON
- 95           = NUMBER LITERAL
- subjects     = PROPERTY KEY
- [            = OPENING BRACKET
- "Math"       = ARRAY ELEMENT (STRING LITERAL)
- ,            = COMMA
- ]            = CLOSING BRACKET
- isGraduated  = PROPERTY KEY
- false        = BOOLEAN LITERAL
- getInfo      = PROPERTY KEY (METHOD NAME)
- function     = KEYWORD
- ()           = EMPTY PARAMETERS
- {            = OPENING BRACE
- return       = KEYWORD
- this         = KEYWORD (referensi ke object)
- .            = DOT OPERATOR
- name         = PROPERTY REFERENCE
- +            = CONCATENATION OPERATOR
- }            = CLOSING BRACE
- }            = CLOSING BRACE (akhir object)
- console      = OBJECT REFERENCE
- .            = DOT OPERATOR
- log          = METHOD NAME
- (            = OPENING PARENTHESIS
- student      = VARIABLE REFERENCE
- .            = DOT OPERATOR
- getInfo      = METHOD REFERENCE
- ()           = METHOD CALL (no arguments)
- )            = CLOSING PARENTHESIS
- ;            = SEMICOLON
*/