// Array's

const myArr = [10, 20, 30, 40];
const otherArr = ["sahil", "bharti", "rahul"];

const myyArr2 = new Array(12, 43, 5, 2, 5);
const strArr = new Array("sb", "rk", "ss");

// console.log(myArr)
// console.log(otherArr)
// console.log(myyArr2)
// console.log(strArr)

// console.log(typeof myArr);
// console.log(typeof otherArr);

// console.log(otherArr[1])

// Array methods

// console.log(myArr);
myArr.push(50); // push element at last index
myArr.push(60); // push element at last index
// console.log(myArr);
myArr.pop(); // revome / pop the value at last index
// console.log(myArr);

const newArr = [1, 2, 3, 4, 5]
newArr.unshift(98) // insert at 0 index then other value is shift 
newArr.unshift(97) 
// console.log(newArr);
newArr.shift(98) // remove the element at 0 index
// console.log(newArr);

// console.log(newArr.includes(54)); // return the boolean value
const mynewarr = [0, 13, 24, 3, 41]
// console.log(mynewarr.indexOf(3));

// slice and splice
const arr = [0, 1, 2, 3, 4, 5]
console.log("Orignil 'A'", arr)
const pro1 = arr.slice(1, 3);
console.log(pro1);

console.log("Orignel 'B'", arr)

const pro2 = arr.splice(0, 3);
console.log("Orignel 'c'", arr)
console.log(pro2);

console.log(`next part array 02`);


