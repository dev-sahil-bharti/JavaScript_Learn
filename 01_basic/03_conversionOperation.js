/********************************* Conversion **************************************/
let score = undefined;

// console.log("'score' variable type is : "+ typeof (score));
// console.log(typeof (score))
// console.log(typeof score)

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
/* 
type conversion
33 -> 33
'33asb' -> NaN
true -> 1; false -> 0
null -> 0
undifined ->  NaN
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggedIn))
// console.log(booleanIsLoggedIn)
/*
1 -> true; 0 -> false
" " -> false 
"sahil" -> true 
*/

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber);

//********************************* Operations **************************************/
let value = 3;
let negValue = -value;
// console.log(typeof(negValue));
// console.log(negValue);

// basic arithmenic opertions
// console.log(4*4);
// console.log(4**4);
// console.log(4-4);
// console.log(4+4);
// console.log(4/4);
// console.log(4%4);

let str1 = "sahil ";
let str2 = "bharti";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" +"2");
// console.log("1" + 2);
// console.log(1 +"2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++
// console.log(gameCounter)
let x = 3
let y = x++
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

console.log(3 + true);