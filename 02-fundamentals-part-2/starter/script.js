console.log("Part 2: Functions ready!");

console.log("=== FUNCTIONS ===");

function logger() {
    console.log("My name is Rishaye");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
};

console.log(fruitProcessor(5, 3));

const juice1 = fruitProcessor(1, 9);
const juice2 = fruitProcessor(9, 1);

console.log(juice1, juice2);


// Function expressions

// console.log(calcAge(1991));

const calcAge =  function (birthyear) {
    return 2025 - birthyear;
};

const age1 = calcAge(2003);

console.log(age1);
console.log(calcAge(2003));

console.log(introduce("Cotton", "Buds", 20));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`
    return introduction
};

console.log(introduce("Rishaye", "Melad", 21));

function yearsUntilRetirement(birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired!`
    }
}

console.log(yearsUntilRetirement(2003, "Rishaye"));
console.log(yearsUntilRetirement(1995, "Cotton"));

const globalVariable = "I am global";

function testScope() {
    const localVariable = "I am local";
    console.log(globalVariable);
    console.log(localVariable);
};

testScope();
console.log(globalVariable);
// console.log(localVariable);


////////////////////////////////////
// Coding Challenge #1

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  // Your code here
  const average = (score1 + score2 + score3) / 3;
  return average;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here
  // Remember: team needs DOUBLE the score to win
  // Use template literals for nice output
  if (avgDolphins >= (avgKoalas * 2)) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  } else if (avgKoalas >= (avgDolphins * 2)) {
    return `Koala wins (${avgKoalas} vs. ${avgDolphins})`
  } else {
    return `No team wins! Dolphins ${avgDolphins}, Koalas: ${avgKoalas}`
  }
}







