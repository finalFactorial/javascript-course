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

// ////////
// // Basic Operator - Math Operators
// console.log("=== MATH OPERATORs ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // Math with strings
// const firstName = "Jonas";
// const lastName = "Doe";

// console.log(firstName + " " + lastName);
// console.log("Hello " + "World" + "!")
// console.log("I am " + 25 + " years old!");

// ////
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// ////
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= ageJonas);
// console.log(ageJonas < 30);

// console.log("Number comparisons");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// // storing comparison result
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// const markBMI = massMark / heightMark ** 2
// const johnBMI = massJohn / heightJohn ** 2

// // 2. Create markHigherBMI variable
// const markHigherBMI = markBMI > johnBMI

// // 3. Log results to console
// console.log("Mark's BMI:", markBMI);
// console.log("John's BMI:", johnBMI);
// console.log("Is Mark's BMI Higher?", markHigherBMI);

// ////////
// // Strings and Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);


// // if-else statements
// const age = 10;

// if (age >= 18) {
//   console.log("Sarah can start a driivng license");
// }
// else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Waitng another ${yearsLeft} years`)
// }


// // Truthy/Falsy Values
// console.log(Boolean(0)); //falsy value
// console.log(Boolean(undefined)); //falsy value
// console.log(Boolean(jonas)); //truthy value
// console.log(Boolean({})); //truthy value
// console.log(Boolean("")); //falsy value


// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is ${BMIMark} and is higher than John's BMI which is ${BMIJohn}`);
// } else {
//   console.log(`John's BMI is ${BMIJohn} and is higher than Mark's BMI which is ${BMIMark}`);
// }

// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output


////////
// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1
console.log(n);

n = n - 1
console.log(n);


// Equality - Strict

let age = '18'
if (age === 18) {
  console.log('You just became an adult.');
} 

if (age == 18) {
  console.log('You just became an adult.');
}

console.log('18' === 18);
console.log('18' == 18); //coercion happens
console.log(18 === 18);

// Why == can be dangerous
console.log('0' == 0);
console.log(0 == false);
console.log('0' == false);
console.log(null == undefined);

console.log(' ' == 0);
console.log('   ' == 0);


// Best practice
// const favorite = (prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool: 23 is an amazing number.");
// } 
// if (favorite == 23) {
//   console.log("23 is also a cool number.")
// } else if (favorite === 9) {
//   console.log("9 is also a cool number.")
// } else {
//   console.log("Number is not 23 or 7 or 9.")
// }

// if (favorite !== 23) {
//   console.log('Why not 23?');
// }

// Test equality operators
// const favorite = (prompt("What's your favorite number?"));
// if (favorite === 23) {
//   console.log("Cool: 23 is an amazing number.");
// } 
// if (favorite == 23) {
//   console.log("23 is also a cool number.")
// } 


// Logical Operators
const hasDriversLicense = false
const hasGoodVision = false

console.log(`AND OPERATOR: ${hasDriversLicense} && ${hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense} || ${hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = true;

console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Rishaye is able to drive.')
} else {
  console.log('Someone else should drive');
}


// More complex scenarios
age = 20;
const hasPermission = true;
const hasExperience = true;

// Can drive if: (age >= 18 OR has permission) AND has experience
if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}


// Test with different values
console.log('Age 20, permission true, experience false: ',
            (age >= 18 || hasPermission) && hasExperience);

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

age = 18; // Try different values
const hasID = false; // Try different values
const isVIP = true; // Try different values

// Your logic here:
if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}


// The Conditional (Ternary) Operator
age = 28;

// basic ternary: condition ? valueIfTrue: valueIfFalse
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// if else statement
let drink2;

if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}.`);


// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = (bill >= 50 && bill <=300) ? (bill * 15/100) : (bill * 20/100) 

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"