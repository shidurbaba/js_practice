// Random number generator

//Random number between a certain range, such as 50 in a 100.
// const min = 50;
// const max = 100;

// let random = Math.random() * (max-min);
// let nondecimalRandom = Math.floor(random) + min;

// console.log(`The random number is between 1 to 6 in a dice: ${nondecimalRandom}`);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;
let randomNum;
let randomNonDecimalNum;

myButton.onclick = function() 
{
    randomNum = Math.random() * max;
    randomNonDecimalNum = Math.floor(randomNum) + min;
    myLabel.textContent = randomNonDecimalNum;
}