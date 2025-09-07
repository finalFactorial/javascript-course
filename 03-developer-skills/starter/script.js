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


console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer
/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

function calculateTempAlt(temperatures) {
  let highestTemp = temperatures[0]
  let lowestTemp = temperatures[0]

  for (let i = 0; i < temperatures.length; i++) {
    if (highestTemp > temperatures[i]) {
      highestTemp = highestTemp
    }
    else if (highestTemp < temperatures[i]) {
      highestTemp = temperatures[i]
    }
  }

  for (let i = 0; i < temperatures.length; i++) {
    if (lowestTemp < temperatures[i]) {
      lowestTemp = lowestTemp
    }
    else if (lowestTemp > temperatures[i]) {
      lowestTemp = temperatures[i]
    }
  }

  console.log(highestTemp, lowestTemp);
  return highestTemp - lowestTemp
}

console.log(calculateTempAlt(temperatures));

// EXTENDED PROBLEM: Two Arrays

function calculateTempAltNew(temp1, temp2) {
  const temperatures = temp1.concat(temp2)
  let highestTemp = temperatures[0]
  let lowestTemp = temperatures[0]

  for (let i = 0; i < temperatures.length; i++) {
    if (highestTemp > temperatures[i]) {
      highestTemp = highestTemp
    }
    else if (highestTemp < temperatures[i]) {
      highestTemp = temperatures[i]
    }
  }

  for (let i = 0; i < temperatures.length; i++) {
    if (lowestTemp < temperatures[i]) {
      lowestTemp = lowestTemp
    }
    else if (lowestTemp > temperatures[i]) {
      lowestTemp = temperatures[i]
    }
  }

  console.log(highestTemp, lowestTemp);
  return highestTemp - lowestTemp
}

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
console.log(calculateTempAltNew(array1, array2));