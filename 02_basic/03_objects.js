// What is an Object in JavaScript?
// In JavaScript, an object is a collection of key-value pairs, where the keys (also called properties) are strings (or Symbols), and the values can be  Symbol("keyTwo") data type — including other objects, arrays, or functions.

// objects literals
const sym = Symbol("mySymbol");
// const sym1 = new Symbol("keyOne"); // not allowed new keyword
// console.log(typeof sym);

const user = {
  name: "Sahil",
  "full name": "Sahil Bharti",
  id: 1011,
  post: "devloper",
  age: 22,
  location: "noida",
  email: "sahil_bharti@google.com",
  [sym]: 123, // refer to up to declere sym
};

// console.log(typeof user);

// console.log(user.name);
// console.log(user["full name"]);
// console.log(typeof user[sym]);

// user.post = "head of department";
// console.log(user);
// Object.freeze(user);
// user.name = "sahil singh";
// console.log(user);

user.greeting = function () {
  console.log("Welcome to user!");
};
user.greetingTwo = function () {
  console.log(`Welcome to user! : ${this["full name"]}`);
  console.log(`Your email is: ${this.email}`);
};

user.greeting();
user.greetingTwo();
