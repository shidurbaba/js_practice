// Math = built in object that provides a collection of properties and methods.

let x = 3.21;
let y = 2;
let z ;
let flrnum = 4.99;
let flr;
let cilnum = 5.21;
let cil;
let trunknum = 3.2384798272;
let trunk;
let pwrbase = 9;
let pwr;
let sqroot;
let logNum;

z = Math.round(x);
console.log(z);

//To round the number down
flr = Math.floor(flrnum);
console.log(flr);

//To round the number up
cil = Math.ceil(cilnum);
console.log(cil);

//To Truncate a number
trunk = Math.trunc(trunknum);
console.log(trunk);

//To power to number
pwr = Math.pow(pwrbase,y);
console.log(pwr)

//To find the square root
sqroot = Math.sqrt(pwr);
console.log(sqroot);

//Find the Log of a Number
logNum = Math.log(sqroot);
console.log(logNum);