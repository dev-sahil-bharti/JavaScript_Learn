// Primtive
// 7 types: String, Number , Boolean, null, undefined, Symbol, BigInt, 
    let stdName = "Shail"
    const score = 100
    const marks = 29.09
    const match = true
    const outSideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')
    // console.log(id === anotherId);
    
    const BigNumber = 16789877757n;

    // console.table([stdName, score, marks, match, outSideTemp, userEmail, id, anotherId, BigNumber]);

// Refrence type (Non Primtive)
// Types : Array, Objects, Functions

const array = ["saktiman", "Batman", "flingJat"];

// Object
let mtObj = {
    name: "sahil",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World");
}

//++++++++++++++++++++++++++++++++++++++++++++++++ Stack and Heap memory Use +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primtive),    Heap(Non-Primtive)

let myYoutubeName = "sahil199" 
let anotherName = myYoutubeName
anotherName = "official_coder"

// console.log(anotherName)

let user_sahil = {
    userId: 1023,
    userEmail: "xyz@gmail.com",
}

let user_SahlBharti = user_sahil;
console.log(user_SahlBharti);
console.log(user_sahil);

user_SahlBharti.userEmail = "newpassword@google.com"

console.log(user_sahil.userEmail);
console.log(user_SahlBharti.userEmail);