/* 
There several ways of generating random numbers in JS but I'm going to explain about three ways. 
1. Random decimal numbers between 0 and 1
2. Random decimal numbers within a range
3. Random whole numbers within a range
4. Random numbers from an array
5. Pushing random numbers into an array 
*/

// 1. Generating random decimal numbers between 0 and 1
console.log ((Math.random()));

// 2. Generating random decimal numbers within a range
const prompt = require('prompt-sync')({sigint:true});
let highestvalue = Number(prompt('Enter the maximum number:'));
let lowestvalue = Number(prompt('Enter the minimum number:'));
let randnumber1 = (Math.random() * (highestvalue - lowestvalue)) + lowestvalue;

console.log(randnumber1);



// 3. Generating random whole numbers within a range
//const prompt = require('prompt-sync')({sigint:true});
let greatestvalue = Number(prompt('Enter the maximum number:'));
let smallestvalue = Number(prompt('Enter the minimum number:'));
let randnumber2 = Math.floor(Math.random() * (greatestvalue - smallestvalue)) + smallestvalue;

console.log(randnumber2);



//4. Generating random numbers from an array of numbers
const randArray = (arr) => {
    let indexOfArray = (Math.floor(Math.random() * arr.length));
    return arr[indexOfArray]; 
}

console.log(randArray([1,2,3,4,5,6,7,8,9]));



//  5.  Generate random numbers and push them into an array

let randomNumbers = [];   //an array to store the random numbers
//const prompt = require('prompt-sync')({sigint:true});
let asmuchvalue = Number(prompt('How many numbers do you want in your array?:'));
let highvalue = Number(prompt('Enter the maximum number:'));
let lowvalue = Number(prompt('Enter the minimum number:'));

  // a for loop to loop through as many times as we specify
for(let i = 0; i < asmuchvalue; i++) {
  let randnumber = Math.floor(Math.random() * (highvalue - lowvalue)) + lowvalue;
  // generating random numbers and rounding them up
  randomNumbers.push(randnumber); 
}
console.log(randomNumbers);




