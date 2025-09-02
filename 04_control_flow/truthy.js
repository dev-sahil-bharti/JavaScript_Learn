// -> 01
const userEmail = "sahl123@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
false, 0, -0, BigInt = 0n, "", null, undefined, NaN
 

// truthy values
// "0", 'false', " ", [], {}, function(){}
// true, "non-empty string", " ", "0", "false", any non-zero number, Infinity, -Infinity, [], {}, function(){}, new Date(), Symbol(), any non-zero BigInt


// -> 02
const data = []
if(data.length === 0){
    console.log("Array is Empty");
}else{
    console.log("Array is not Empty");
}

// -> 03

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
}

// Nullish Coalescing Operator (??): null undefined

let name = null;
let result = name ?? "Guest";
console.log(result); // Output: "Guest"

let name2 = undefined;
console.log(name2 ?? "Guest"); // Output: "Guest"

let name3 = "";
console.log(name3 ?? "Guest"); // Output: "" (kyunki "" null ya undefined nahi hai)

let val1;
// val1 = 8 ?? 10
// val1 = null ?? 10
val1 = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator 
// condition ? true : false

coldCoffePrice = 100;
coldCoffePrice <= 80 ? console.log("less then 80") : console.log("More then 80");