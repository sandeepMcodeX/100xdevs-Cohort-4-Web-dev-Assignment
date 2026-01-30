// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log
let color = 'Purple';
console.log(color);
const height = 178;
console.log(height);
let isLikePizza = true;
console.log(isLikePizza);

// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?
function sumOfNumbers(a, b) {
  let sum = a + b;
  return sum;
}
const result = sumOfNumbers(10, 20);
console.log(result);
//
const resultTwo = sumOfNumbers('10', '20');
console.log(resultTwo);
// It Behave like a string it join the 1020.

// Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
const canVoteResult = canVote(19);
console.log(canVoteResult);

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd.
function isOddEvenNumber() {
  if (number % 2 == 0) {
    console.log('The number is even');
  } else {
    console.log('The number is Odd');
  }
}
isOddEvenNumber(2);
isOddEvenNumber(5);

// Write a function called sum that finds the sum from 1 to a number
function sumOfGivenNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(` Sum of Number is ${sum}`);
}
sumOfGivenNumbers(10);

// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
  console.log(`Welcome ${user.name}, your age is ${user.age}`);
}
// greet({
//   name: 'sandeep',
//   age: 15,
// });

// greet({
//   name: 'ram',
//   age: 12,
// });

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(user) {
  let greetFirstWord;
  if (user.gender === 'male') {
    greetFirstWord = 'Mr';
  } else if (user.gender === 'female') {
    greetFirstWord = 'Mrs';
  } else {
    greetFirstWord = 'Mx';
  }

  // if (user.age >= 18) {
  //   console.log('Your are eligible for vote');
  // } else {
  //   console.log('Your are not eligible for vote');
  // }
  console.log(
    ` Hello ${greetFirstWord}${user.name}, your age is ${user.age} and your ${user.age >= 18 ? 'Legal' : 'Illegal'} to vote`,
  );
}
greet({
  name: 'sandeep',
  age: 15,
  gender: 'male',
});
greet({
  name: 'ram',
  age: 12,
  gender: 'male',
});
greet({
  name: 'Jiya',
  age: 12,
  gender: 'female',
});

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function filteredArray(arr) {
  const evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArray.push(arr[i]);
    }
  }

  return evenArray;
}

// function filteredArray(arr) {
//   const evenNumbers = arr.filter((arr) => {
//     return arr % 2 == 0;
//   });
//   console.log(evenNumbers);
// }

const numbers = [1, 2, 4, 5, 6, 7, 8, 10];
const evenValuesArr = filteredArray(numbers);
console.log(evenValuesArr);
filteredArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function userEligible(user) {
  const newUsers = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].age >= 18) {
      newUsers.push(user[i]);
    }
  }
  return newUsers;
}

// const userList = [
//   {
//     name: 'Sandeep',
//     age: 20,
//   },
//   {
//     name: 'ram',
//     age: 16,
//   },
//   {
//     name: 'jiya',
//     age: 15,
//   },
// ];

const userResult = userEligible(userList);
console.log(userResult);

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function userEligible(user) {
  const newUsers = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].age >= 18 && user[i].gender === 'male') {
      newUsers.push(user[i]);
    }
  }
  return newUsers;
}
const userList = [
  {
    name: 'Sandeep',
    age: 20,
    gender: 'male',
  },
  {
    name: 'ram',
    age: 19,
    gender: 'male',
  },
  {
    name: 'jiya',
    age: 15,
    gender: 'female',
  },
];

// userEligible(userList);
// const userResult = userEligible(userList);
// console.log(userResult);