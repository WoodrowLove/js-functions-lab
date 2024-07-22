/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

  const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
};



console.log('Exercise 2 Result:', isAdult(21));
// referenced AI for help with a thrown error.

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
  return char === 'a' || char === 'e' || char ===
  'i' || char === 'o' || char === 'u'
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
  const greeting = {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
  }
  return `${greeting[timeOfDay]}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3)
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
//referenced AI for assistance


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => 
{
  const tipAmount = (billAmount * tipPercentage)
/ 100
return tipAmount
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale) =>
{
  if (scale === 'C') {
    return (temperature * 9/5) + 32
  } else if (scale === 'F') {
    return (temperature - 32) * 5/9 
  } else {
    return 'Invalid scale. Please use "C" for Celsius or "F" for Fahrenheit.'

  }
}
// referenced AI for the celsius and farenheit numbers.

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) =>
{
  switch (operation) {
    case 'add':
        return num1 + num2;
    case 'subtract':
        return num1 - num2;
    case 'multiply':
        return num1 * num2;
    case 'divide':
        return num1 / num2;
    default:
        return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
}
};


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
// direct copy and paste from AI after "const basicCalculator = (num1, num2, operation) =>".  Do not understand and need assistance.


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  }else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername =(firstName, lastName) => {
  const firstThreeFirstName = firstName.slice(0,3)
  const firstThreeLastName = lastName. slice(0,3)
  const totalCharacterCount = firstName.length + lastName.length

    return
  `${firstThreeFirstName}${firstThreeLastName}${totalCharacterCount}`
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));
//Got undefined. Could not resolve.


const numArgs = (...args) => {
  return args.length;
};

// Example usage:
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4)); // Should return 4 (number of arguments)
//direct copy and paste from AI. Need help with understanding.