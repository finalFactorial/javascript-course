// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");


// console.log("=== VARIABLES ===");

// let firstName = 'Jonas';
// console.log(firstName);

// let age = 30;
// console.log(age);

// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// // birthYear = 2000;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher"
// console.log(job)

// let lastName = "Melad"

// // let 3years = 3;
// // let jonas&matilda = "JM";
// // let new


// console.log("=== DATA TYPES ===")

// //Number
// age = 24;
// console.log(age);
// console.log(typeof age);

// //String
// let username = "rishaye";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun)
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// //Dynamic Variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now, I'm string"
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true
// console.log(dynamicVariable, typeof dynamicVariable);

////////
// Basic Operator - Math Operators
console.log("=== MATH OPERATORs ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

// Math with strings
const firstName = "Jonas";
const lastName = "Doe";

console.log(firstName + " " + lastName);
console.log("Hello " + "World" + "!")
console.log("I am " + 25 + " years old!");

////
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 15;
console.log("x starts as:", x);

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

////
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= ageJonas);
console.log(ageJonas < 30);

console.log("Number comparisons");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

// storing comparison result
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
const markBMI = massMark / heightMark ** 2
const johnBMI = massJohn / heightJohn ** 2

// 2. Create markHigherBMI variable
const markHigherBMI = markBMI > johnBMI

// 3. Log results to console
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Is Mark's BMI Higher?", markHigherBMI);