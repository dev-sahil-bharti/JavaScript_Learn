//+++++++++++++++++++++++++++++++ ============Numbers ========= +++++++++++++++++++++++++++++++++++++++++
const score = 400;

const balance = new Number(100);

// console.log(score)
// console.log(balance.toString().length);

// console.log(balance.toFixed(1));

let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

let inAmmount = 100000;
// console.log(inAmmount.toLocaleString('en-IN'));

//------------------------------------------- Maths -----------------------------------------------------------
console.log(Math);

console.log(Math.abs(-10)); // negative value print to postive value
console.log(Math.round(49.08)); // round figure value print
console.log(Math.ceil(56.9));
console.log(Math.floor(8.2));
console.log(Math.min(5, 6, 2, 4, 3));
console.log(Math.max(4, 5, 6, 7, 3, 6, 9));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
