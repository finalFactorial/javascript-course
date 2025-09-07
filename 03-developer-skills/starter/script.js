// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log(messyExample('John', 25));

// // Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// // Prettier Configuration Test

// const prettierTest = {
//   firstName: 'Sarah',
//   lastName: 'Johnson',
//   skills: ['JavaScript', 'React', 'Node.js'],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );

// const studentTest = {
//   firstName: 'your-name',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   experience: 'beginner',
//   goals: ['become-developer', 'build-projects'],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// // Live Server Testing

// // Test 1: Basic live reload
// let liveServerTest = 'Updated message - change #2';
// console.log('Live Server test:', liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// // Code Snippets Testing
// console.log('Testing snippet functionality - cl + Tab created this!');

// function testSnippets() {
//   console.log('Function created with snippet - func + Tab!');
//   return 'Snippets working perfectly!';
// }

// testSnippets();

// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest('Snippets save so much typing time!');

// // Environment Setup Verification

// console.log('🎉 Professional Development Environment Complete!');
// console.log('✅ Prettier: Automatic code formatting');
// console.log('✅ Live Server: Automatic browser refresh');
// console.log('✅ Snippets: Fast code generation');
// console.log('✅ Extensions: Enhanced productivity');
// console.log('Ready for professional JavaScript development!');

// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer
// /*
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Temperature amplitude = difference between highest and lowest temperature
// - Sensor errors = 'error' strings that should be ignored
// - Return a number representing amplitude (max - min)

// STEP 2: SUB-PROBLEMS
// 1. How to ignore errors? (Skip non-number values)
// 2. Find max value in temperature array
// 3. Find min value in temperature array
// 4. Subtract min from max and return result
// */

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// function calculateTempAlt(temperatures) {
//   let highestTemp = temperatures[0]
//   let lowestTemp = temperatures[0]

//   for (let i = 0; i < temperatures.length; i++) {
//     if (highestTemp > temperatures[i]) {
//       highestTemp = highestTemp
//     }
//     else if (highestTemp < temperatures[i]) {
//       highestTemp = temperatures[i]
//     }
//   }

//   for (let i = 0; i < temperatures.length; i++) {
//     if (lowestTemp < temperatures[i]) {
//       lowestTemp = lowestTemp
//     }
//     else if (lowestTemp > temperatures[i]) {
//       lowestTemp = temperatures[i]
//     }
//   }

//   console.log(highestTemp, lowestTemp);
//   return highestTemp - lowestTemp
// }

// console.log(calculateTempAlt(temperatures));

// // EXTENDED PROBLEM: Two Arrays

// function calculateTempAltNew(temp1, temp2) {
//   const temperatures = temp1.concat(temp2)
//   let highestTemp = temperatures[0]
//   let lowestTemp = temperatures[0]

//   for (let i = 0; i < temperatures.length; i++) {
//     if (highestTemp > temperatures[i]) {
//       highestTemp = highestTemp
//     }
//     else if (highestTemp < temperatures[i]) {
//       highestTemp = temperatures[i]
//     }
//   }

//   for (let i = 0; i < temperatures.length; i++) {
//     if (lowestTemp < temperatures[i]) {
//       lowestTemp = lowestTemp
//     }
//     else if (lowestTemp > temperatures[i]) {
//       lowestTemp = temperatures[i]
//     }
//   }

//   console.log(highestTemp, lowestTemp);
//   return highestTemp - lowestTemp
// }

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// console.log(calculateTempAltNew(array1, array2));

console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

//RESEARCH CHALLENGE: Find Maximum Value in Array
const arr = [3, 7, 2, 9, 1, 5];

// Method 1 - For Loop (Site: Geekforgeeks)
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];

  return max;
}

console.log(largest(arr));

// Method 2 - Recursion (Site: Geekforgeeks)
function findMax(arr, i) {
  if (i === arr.length - 1) {
    return arr[i];
  }

  let recMax = findMax(arr, i + 1);

  return Math.max(recMax, arr[i]);
}

function largest(arr) {
  return findMax(arr, 0);
}

console.log(largest(arr));

// Method 3 - Math.max (Site: Geekforgeeks)
function largest(arr) {
  return Math.max(...arr);
}

console.log(largest(arr));

// Research question: "How to reverse a string in JavaScript?"

// STACK OVERFLOW RESEARCH RESULTS
// Method 1
function reverse(s) {
  return s.split('').reverse().join('');
}

console.log(reverse('hello'));

// Method 2
function reverse(s) {
  return [...s].reverse().join('');
}

console.log(reverse('hello'));

// Method 3
function reverse(s) {
  return s.split(/(?:)/u).reverse().join('');
}

console.log(reverse('hello'));

// Research and implement the Array.concat method

// MDN DOCUMENTATION MASTERY
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// SYSTEMATIC DEBUGGING METHODOLOGY

function calculateAverageScore(scores) {
  let total = 0; // BUG: Should be initialized to 0

  for (let i = 0; i < scores.length; i++) {
    // BUG: Should be < not <=
    total += scores[i];
  }

  return total / scores.length; // BUG: Should be scores.length
}

const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log('Buggy result:', buggyResult);

// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group('Debugging Session');

  console.log('Input data:', data);

  if (typeof data !== 'object') {
    console.warn('Warning: Expected object, got', typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: 'John', age: 30, city: 'New York' };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  debugger; // This will pause execution in browser dev tools

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === 'number') {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log('Final results:', { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, 'error', 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log('Debug session result:', debugResult);

// SYSTEMATIC BUG FIXING APPLICATION

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

STEP 5: PREVENT
- Add input validation
- Add type checking for array elements
*/

function calcAveScoreNew(scores) {
  if (!Array.isArray(scores)) {
    return false;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === 'number') {
      total += scores[i];
    } else {
      console.warn(`Not a number at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length;
}

const testScoresNew = [85, 92, 78, 96, 88];
const buggyResultNew = calcAveScoreNew(testScoresNew);
console.log('Buggy result:', buggyResultNew);


// Comprehensive debugging verification
console.group("Debugging Verification Tests");

// Test 1 - Normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calcAveScoreNew(normalScores);
console.log("Normal case result:", normalResult);

// Test 2 - Edge case with invalid data
const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calcAveScoreNew(mixedScores);
console.log("Mixed data result:", mixedResult);

// Test 3 - Error case with invalid input
const errorResult = calcAveScoreNew("not an array");
console.log("Error case result:", errorResult);

// Test 4 - Edge case with empty array
const emptyResult = calcAveScoreNew([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log("All bugs identified, isolated, investigated, fixed, and prevented");
