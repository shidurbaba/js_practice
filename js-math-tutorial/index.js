// Math = built in object that provides a collection of properties and methods.

let x = 3.21;
let y = 2;
let z ;
let nega = -3.14;
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
let sin;
let tan;
let absoluteNumber;

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

//To find sin number
sin = Math.sin(y)
console.log(sin);

//To find tangent number
tan = Math.tan(y);
console.log(tan);

//To find the absolute value of a number
absoluteNumber = Math.abs(nega);
console.log(absoluteNumber);

//To find the sign of the number
let signNumber;
signNumber = Math.sign(nega);
console.log(signNumber);

//To find the maximum and minimum value between numbers
let max = Math.max(x, y, nega,cilnum);
let min = Math.min(x,y,nega,cilnum);
console.log(max);
console.log(min);