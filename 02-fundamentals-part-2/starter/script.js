// console.log("Part 2: Functions ready!");

// console.log("=== FUNCTIONS ===");

// function logger() {
//     console.log("My name is Rishaye");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// };

// console.log(fruitProcessor(5, 3));

// const juice1 = fruitProcessor(1, 9);
// const juice2 = fruitProcessor(9, 1);

// console.log(juice1, juice2);


// // Function expressions

// // console.log(calcAge(1991));

// const calcAge =  function (birthyear) {
//     return 2025 - birthyear;
// };

// const age1 = calcAge(2003);

// console.log(age1);
// console.log(calcAge(2003));

// console.log(introduce("Cotton", "Buds", 20));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`
//     return introduction
// };

// console.log(introduce("Rishaye", "Melad", 21));

// function yearsUntilRetirement(birthyear, firstName) {
//     const age = calcAge(birthyear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired!`
//     }
// }

// console.log(yearsUntilRetirement(2003, "Rishaye"));
// console.log(yearsUntilRetirement(1995, "Cotton"));

// const globalVariable = "I am global";

// function testScope() {
//     const localVariable = "I am local";
//     console.log(globalVariable);
//     console.log(localVariable);
// };

// testScope();
// console.log(globalVariable);
// // console.log(localVariable);


// ////////////////////////////////////
// // Coding Challenge #1

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   // Your code here
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   // Your code here
//   // Remember: team needs DOUBLE the score to win
//   // Use template literals for nice output
//   if (avgDolphins >= (avgKoalas * 2)) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//   } else if (avgKoalas >= (avgDolphins * 2)) {
//     return `Koala wins (${avgKoalas} vs. ${avgDolphins})`
//   } else {
//     return `No team wins! Dolphins ${avgDolphins}, Koalas: ${avgKoalas}`
//   }
// }


// console.log("=== ARRAYS ===");

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// // Array

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ["Hajj", "Gly", "Julie"];
// console.log(friends);

// const mixed = ['Jonas', 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// friends[2] = "Panpan";
// console.log(friends);

// const firstName = 'Rishaye'
// const rishaye = [firstName, "Melad", 2025 - 2003]
// console.log(rishaye);

// const calcAge = function(birthyear) {
//     return 2025- birthyear;
// }

// const ages = [calcAge(2003), calcAge(2000), calcAge(1995)];
// console.log(ages);

// const newLength = friends.push('Julie');
// console.log(friends);
// console.log(friends.length);

// const newLength2 = friends.push("Liclic");
// console.log(friends);

// friends.unshift("Maria");
// console.log(friends);

// const popped = friends.pop();
// const popped2 = friends.pop();

// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf('Hajj'));
// console.log(friends.indexOf('Maria'));

// console.log(friends.includes('Hajj'));
// console.log(friends.includes('Maria'));


// // Array Iteration - Loops
// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];

//     console.log(element)
// }

// friends.forEach(function(friend, index) {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// )

// friends.forEach((friend, index) => {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// )

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     const element = grades2[i];

//     total += grades2[i]
// }

// const average = total / grades2.length
// console.log(`Average Grade: ${average.toFixed(2)}`);

// let passedCount = 0;

// grades2.forEach(grade => {
//         if (grade >= 70) {
//             passedCount++
//         }
//     }
// );

// console.log(`${passedCount} out of ${grades2.length} students passed.`);


// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades3) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
    
//   let total = 0;

//   grades3.forEach(grade => {
//     total += grade
//   })

//   return total / grades3.length
// }

// // Function to find highest grade
// function findHighestGrade(grades3) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade

//   let highestGrade = 0;

//   for (let i = 0; i < grades3.length; i++) {
//     let currentGrade = grades3[i];
        
//     if (highestGrade > currentGrade) {
//         highestGrade = highestGrade
//     }
//     else if (highestGrade < currentGrade) {
//         highestGrade = currentGrade
//     }
//   }

//     return highestGrade
// }

// // Function to find lowest grade
// function findLowestGrade(grades3) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison

//   let lowestGrade = grades3[0];

//   for (let i = 0; i < grades3.length; i++) {
//     let currentGrade = grades3[i];
        
//     if (lowestGrade < currentGrade) {
//         lowestGrade = lowestGrade
//     }
//     else if (lowestGrade > currentGrade) {
//         lowestGrade = currentGrade
//     }
//   }

//   return lowestGrade
// }

// // Function to count passing students
// function countPassing(grades3, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met

//   let passedCount = 0;

//   grades3.forEach(grade => {
//     if (grade > passingGrade) {
//         passedCount++
//     }
//   })

//   return passedCount
// }

// // Generate complete report
// const average3 = calculateAverage(grades3);
// const highest = findHighestGrade(grades3);
// const lowest = findLowestGrade(grades3);
// const passing = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average3.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades3.length}`);


// Objects

const rishayeArray = [
  "Rishaye",
  "Melad",
  2025 - 2003,
  "Student",
  ["Panpan", "Liclic", "Shiro"]
];

console.log(rishayeArray[0]);
console.log(rishayeArray[1]);

const rishayeObject = {
  firstName : "Rishaye",
  lastName : "Melad",
  age: 2025 - 2003,
  job: "Student",
  friends : ["Panpan", "Liclic", "Shiro"]
};

console.log(rishayeObject);

// Property access method
// Dot notation
console.log(rishayeObject.firstName);
console.log(rishayeObject.lastName);
console.log(rishayeObject.age);

// Bracker notation
console.log(rishayeObject['firstName']);
console.log(rishayeObject['lastName']);
console.log(rishayeObject['age']);

const nameKey = "Name";
console.log(rishayeObject["first" + nameKey]);

// Modifying existing properties
rishayeObject.job = "Programmer";
rishayeObject['age'] = 30;
console.log(rishayeObject);

// Add new properties
rishayeObject.location = "Philippines";
rishayeObject["twiiter"] = "rishaye";
rishayeObject.hasDriversLicensse = false;
console.log(rishayeObject);

// When to use dot vs. bracket notation
const property = "job";
console.log(rishayeObject[property]);

// Objects vs. Arrays Decision Making

// Arrays
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

const person = {
  name: "Jonas",
  age: 46,
  occupation: "teacher",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

// Objects can contain arrays, arrays can contain objects
const student = {
  name: "Sarah",
  grades: [85, 92, 78], 
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(student.grades[0]);
console.log(student.address.city);


// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    return 2025 - birthYear
  }
};

console.log(jonas.calcAge(2003));
console.log(jonas.calcAge(jonas.birthYear));

const jonasImproved = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    // console.log(this);
    // return 2025 - this.birthYear
    this.age = 2025 - this.birthYear
    return this.age;
  },
  getSummary: function () {
     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonasImproved.calcAge());
console.log(jonasImproved.age);
console.log(jonasImproved.getSummary());

// Complex object with multiple methods
const bankAccount = {
  owner: "John Doe",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,

  // Method to calculate balance
  calcBalance: function () {
    this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
    return this.balance;
  },
  
  // Method to add movement
  deposit: function (amount) {
    this.movements.push(amount);
    this.calcBalance();
  },

  withdraw: function (amount) {
    this.movements.push(-amount);
    this.calcBalance();   
  },

  // Method for account summary 
  getStatement : function () {
    return `${this.owner}'s account balance: ${this.calcBalance()}`
  }
};

console.log(bankAccount.getStatement());
bankAccount.deposit(500);
console.log(bankAccount.getStatement());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Rishaye",
  lastName: "Melad",
  birthYear: 2003,
  location: "Manila",
  interests: ["Coding", "Watching", "Eating"],
  friends: [
    { name: "Panpan", status: "active" },
    { name: "Liclic", status: "inactive" },
    { name: "Shiro", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
    this.age = new Date().getFullYear() - 2003;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
    this.friends.push({ name : name, status : status});
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    // Your code here
    const activeFriends = this.friends.filter(friend => friend.status === "active");
    return activeFriends.length
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
    // this.isActive = false; // my answer - wrong
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
    return `=== User Profile ===
    
    Name: ${this.firstName}
    Age: ${this.calcAge()}
    Status: ${this.isActive ? 'active' : 'inactive'}
    Active Friends: ${this.getActiveFriends()} out of ${this.friends.length} friends are active
    Interests: ${this.interests}`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());