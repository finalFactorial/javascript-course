'use strict';

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace();
}

outerFunction();

// global
const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar);
}

anyFunction();

// function
function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); // Works
}
// console.log(functionVar); // Error: functionVar is not defined

// block
if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}

// console.log(blockVar); // Error: blockVar is not defined
// console.log(alsoBlockVar); // Error: alsoBlockVar is not defined
console.log(notBlockScoped); // Works! var leaks out

// const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
//   console.log(outer, inner, blockConst, functionVar); // Error: blockConst is not defined
}

demoScope();

const name = 'GlobalName';

function a() {
//   const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();


// variable hoisting 
console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ) , cannot access before initialization
// console.log(constX); // ReferenceError (TDZ) , cannot access before initialization

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

console.log('-------------')
// function hoisting
console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// console.log(addExpr(2, 3)); // ReferenceError in TDZ
// console.log(addArrow(2, 3)); // ReferenceError in TDZ

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Now all work:
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

// console.log(apiUrl); // ReferenceError
// const apiUrl = 'https://example.com';

const apiUrl = 'https://example.com';
console.log(apiUrl);

// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'