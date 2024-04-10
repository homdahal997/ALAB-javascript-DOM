// Part 1: Math Problems - Start
//-----------------------------------------------------------------------------------------
// Variables initilization
const number1 = 7;
const number2 = 14;
const number3 = 19;
const number4 = 10;

//Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleByFive = number1 % 5 ===0 && number2 % 5 ===0 && number3 % 5 ===0 && number4 % 5 ===0;
console.log(`Are all numbers divisible by 5? ${allDivisibleByFive}`);


//Check if the first number is larger than the last. Cache the result in a variable.
const firstNumberGreaterThanLast = number1 > number4
console.log(`Is first number greater than last number? ${firstNumberGreaterThanLast}`)


//-------Accomplish the following arithmetic chain:--------
//Subtract the first number from the second number.
const subtractionResult = number2 - number1;
console.log(`Result after subtracting number1 from number2 is ${subtractionResult}`);



//Multiply the result by the third number.
const multiplicationResult = subtractionResult * number3;
console.log(`Result of multiplying subtraction result with number3 is ${multiplicationResult}`)


//Find the remainder of dividing the result by the fourth number.
const remainder = multiplicationResult % number4;
console.log(`The remainder of dividing the result by the fourth number is ${remainder}`)

// Part 1: Math Problems - End
//-----------------------------------------------------------------------------------------



//Part 2: Practical Math- start
//-----------------------------------------------------------------------------------------
/**
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
 */

// constants
const tripDistance = 1500;
const fuelbudget = 175;
const fuelCostPerGallon = 3;

//fuel efficiencies
const efficiency55Mph = 30;
const efficiency60Mph = 28;
const efficiency75Mph = 23;

// Calculate fuel needed for each speed
const fuelNeeded55Mph = tripDistance / efficiency55Mph;
const fuelNeeded60Mph = tripDistance / efficiency60Mph;
const fuelNeeded75Mph = tripDistance / efficiency75Mph;

// Trip duration for each speed
let duration55Mph = tripDistance / 55;
let duration60Mph = tripDistance / 60;
let duration75Mph = tripDistance / 75;

//Fuel expenses for each speed
const fuelExpense55Mph = fuelNeeded55Mph * fuelCostPerGallon;
const fuelExpense60Mph = fuelNeeded60Mph * fuelCostPerGallon;
const fuelExpense75Mph = fuelNeeded75Mph * fuelCostPerGallon;

//is budget engough ?
let isBudgetEnough55Mph = fuelExpense55Mph <= fuelbudget ? "yes" : "No";
let isBudgetEnough60Mph = fuelExpense60Mph <= fuelbudget;
let isBudgetEnough75Mph = fuelExpense75Mph <= fuelbudget;

// Lets compare result for each speed

const comparisonResults = `
Results for traveling at 55 mph:
Gallons of fuel needed: ${fuelNeeded55Mph}
Will the budget cover the fuel expense? ${isBudgetEnough55Mph}
Trip duration: ${duration55Mph} hours`;

// logo the result
console.log(comparisonResults);
