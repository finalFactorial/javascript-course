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

////////
// Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);


// if-else statements
const age = 10;

if (age >= 18) {
  console.log("Sarah can start a driivng license");
}
else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Waitng another ${yearsLeft} years`)
}


// Truthy/Falsy Values
console.log(Boolean(0)); //falsy value
console.log(Boolean(undefined)); //falsy value
console.log(Boolean(jonas)); //truthy value
console.log(Boolean({})); //truthy value
console.log(Boolean("")); //falsy value


// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is ${BMIMark} and is higher than John's BMI which is ${BMIJohn}`);
} else {
  console.log(`John's BMI is ${BMIJohn} and is higher than Mark's BMI which is ${BMIMark}`);
}

// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
