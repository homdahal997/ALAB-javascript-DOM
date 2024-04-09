// Part 1: Math Problems
// Variables initilization
const number1 = 7;
const number2 = 14;
const number3 = 19;
const number4 = 10;

//Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleByFive = number1 % 5 ===0 && number2 % 5 ===0 && number3 % 5 ===0 && number4 % 5 ===0;
console.log(`Are all numbers divisible by 5? ${allDivisibleByFive}`);

//Check if the first number is larger than the last. Cache the result in a variable.
//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number.