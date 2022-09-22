/* 
There several ways of generating random numbers in JS but I'm going to explain about three ways. 
1. Random decimal numbers between 0 and 1
2. Random whole numbers within a range
3. Random numbers in an array
4. Pushing random numbers into an array 
*/

// 1. Generating random decimal numbers between 0 and 1
(Math.random());

//We can also generate random decimal numbers within a range
const randDec = (min, max) => (Math.random() * (max - min)) + min
(randDec(3,9)); //calling the function with parameters to give results

// 2. Generating random whole numbers within a range
const randWhole = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
(randWhole (5, 10));

// 3. Generating random numbers from an array of numbers
const randArray = (arr) => {
    let indexOfArray = (Math.floor(Math.random() * arr.length));
    return arr[indexOfArray]; 
}

randArray([1,2,3,4,5,6,7,8,9]);

//We can also generate random numbers and push them into an array
//Here, we are creating random numbers using a forloop to give us as much as we want.

let randomNumbers = [];   //an array to store the random numbers
for(let i = 0; i < 6; i++) { // a for loop to loop through as many times as we specify
  // generating random numbers and rounding them up
  randomNumbers.push(Math.floor(Math.random() * 10) + 10); 
}
console.log(randomNumbers);

//4. A function that generates random numbers and store them in an array
const storeRand = (min, max) => {
    let randdy = [];
    for (let i = 0; i < 10; i++){
    randdy.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randdy;
}
console.log (storeRand(3,7));


