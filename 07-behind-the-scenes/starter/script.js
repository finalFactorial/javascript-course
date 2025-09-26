'use strict';

// console.log('Starting program');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// function outerFunction() {
//   console.log('Outer function start');
//   innerFunction();
//   console.log('Outer function end');
// }

// function innerFunction() {
//   console.log('Inner function');
//   console.trace();
// }

// outerFunction();

// // global
// const globalVar = 'I am global';

// function anyFunction() {
//   console.log(globalVar);
// }

// anyFunction();

// // function
// function myFunction() {
//   const functionVar = 'I am function-scoped';
//   console.log(functionVar); // Works
// }
// // console.log(functionVar); // Error: functionVar is not defined

// // block
// if (true) {
//   let blockVar = 'I am block-scoped';
//   const alsoBlockVar = 'Me too';
//   var notBlockScoped = 'I leak out'; // var ignores block scope
// }

// // console.log(blockVar); // Error: blockVar is not defined
// // console.log(alsoBlockVar); // Error: alsoBlockVar is not defined
// console.log(notBlockScoped); // Works! var leaks out

// // const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
// //   console.log(outer, inner, blockConst, functionVar); // Error: blockConst is not defined
// }

// demoScope();

// const name = 'GlobalName';

// function a() {
// //   const name = 'FunctionName';
//   function b() {
//     console.log(name); // 'FunctionName' via scope chain
//   }
//   b();
// }

// a();


// // variable hoisting 
// console.log(varX); // undefined (var hoisted, initialized to undefined)
// // console.log(letX); // ReferenceError (TDZ) , cannot access before initialization
// // console.log(constX); // ReferenceError (TDZ) , cannot access before initialization

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(varX); // 1
// console.log(letX); // 2
// console.log(constX); // 3

// console.log('-------------')
// // function hoisting
// console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// // console.log(addExpr(2, 3)); // ReferenceError in TDZ
// // console.log(addArrow(2, 3)); // ReferenceError in TDZ

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// // Now all work:
// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // 5
// console.log(addArrow(2, 3)); // 5

// // console.log(apiUrl); // ReferenceError
// // const apiUrl = 'https://example.com';

// const apiUrl = 'https://example.com';
// console.log(apiUrl);

// // console.log(title); // Uncomment to test: TDZ with let
// let title = 'Behind the Scenes';

// function outer() {
//   const label = 'outer';
//   function inner() {
//     console.log('scope:', label); // expect 'outer'
//   }
//   inner();
// }
// outer();

// function one() {
//   two();
// }
// function two() {
//   console.log('stack: two');
// }
// one(); // expect 'stack: two'

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
//   print: this.name
// };

// person.greet();
// console.log(person.print);

// // Method borrowing
// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet(); // "Hello, I am Sarah"

// // Detached function call
// // const greetFunction = person.greet;
// // greetFunction(); // Error : Cannot read properties of undefined (reading 'name')

// const button = document.querySelector('button');
// // button.addEventListener('click', person.greet);

// // Fix: use arrow function wrapper
// // button.addEventListener('click', () => person.greet());
// // Or bind the method
// // button.addEventListener('click', person.greet.bind(person));

// // NOTE: Both has error on my end, specifically: 
// // Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name); // this = obj
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name); // this = global (undefined in strict mode)
//   },
// };

// obj.regularMethod(); // "Regular: Object"
// obj.arrowMethod(); // "Arrow: undefined"

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: Regular: Object
// quiz.arrowMethod(); // Predict: Arrow: 

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`); 
//     }, 1500);
//   },
// };

// timer.start(); // Uses self = this approach
// timer.startModern(); // Uses arrow function approach

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
// //   printHobbiesBad: () => {
// //     this.hobbies.forEach(hobby => {
// //       console.log(`${this.name} likes ${hobby}`); // Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
// //     });
// //   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// // user.printHobbiesBad(); // Fails - Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
// user.printHobbiesGood(); // Works - shows all hobbies

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     // console.log(arguments); // ReferenceError: arguments is not defined
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// const userCard = {
//   name: 'Sarah',
//   element: document.querySelector('.user-card'), // Commented for demo

//   setupEvents() {
//     // // BROKEN: this becomes the button element
//     // this.element.addEventListener('click', function() {
//     //   console.log('Clicked user:', this.name); // this = button element!
//     // });

//     // // FIXED: arrow function preserves outer this
//     // this.element.addEventListener('click', () => {
//     //   console.log('Clicked user:', this.name); // this = userCard object!
//     // });

//     console.log('Event setup for:', this.name);
//   },
// };

// userCard.setupEvents();

// // NOTE: Both has error on my end,
// // Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

// const calculator = {
//   numbers: [1, 2, 3, 4, 5],
//   multiplier: 2,

//   processNumbers() {
//     return this.numbers.map(num => num * this.multiplier);
//   },
// };

// console.log('Processed numbers:', calculator.processNumbers()); 

// const myTimer = {
//   name: 'My Timer',

//   startCountdown() {
//     console.log(`${this.name} starting countdown...`);

//     // Your code here: use setTimeout with arrow function
//     // to log "${this.name} countdown finished!" after 1 second
//     setTimeout(() => {
//       console.log(`${this.name} countdown finished!`); 
//     }, 1000);
//   },
// };

// myTimer.startCountdown();

let age = 30;
let oldAge = age; // Independent copy
age = 31;

console.log('age:', age);
console.log('oldAge:', oldAge);

const me = { name: 'Jonas', age: 30 };
const friend = me; // Shared reference

friend.age = 27;

console.log('me:', me);
console.log('friend:', friend); 

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); 
console.log('updated:', updatedPerson); 
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// shallow copy of object
// spread operator
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name); 
console.log('copy name:', shallowCopy.name); 

// shallow copy (nested objects are still shared)
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); 
console.log('copy hobbies:', shallowCopy.hobbies); 

// Object.assign 
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

// deep copy (includes nested objects and array)
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

// Modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address); 
console.log('copy address:', deepCopy.address); 
console.log('original hobbies:', deepOriginal.hobbies); 
console.log('copy hobbies:', deepCopy.hobbies); 

const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

// BROKEN: JSON method loses data
const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);

// FIXED: structuredClone preserves most types
// const workingCopy = structuredClone(problemObject);
// console.log('Working copy:', workingCopy);

// NOTE: structuredClone has error in my end,
//  Uncaught DataCloneError: Failed to execute 'structuredClone' on 'Window': function () {
//     return 'hello';
//   } could not be cloned.

const userManager = {
  users: [],

  addUser: function (userData) {
    // Your task: Add userData to users array
    // But make sure external changes to userData don't affect stored data
    // Hint: Use deep copying
    const deepCopy = structuredClone(userData);
    this.users.push(deepCopy)
  },

  getUsers: function () {
    // Your task: Return users array
    // But prevent external code from modifying the original array
    // Hint: Use shallow copying for the array
    return [...this.users];
  },
};

// Test your implementation
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); 

