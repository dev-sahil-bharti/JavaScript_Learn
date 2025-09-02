const myObject = {
    name: "sahil",
    roll: 2489,
    course: "MCA",
};
// console.log(myObject);

// for of

for (const [key, value] of Object.entries(myObject)) {
    // console.log(`${key} :- ${value}`);
}
 
// for in
for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}


const programming = ["C", "JavaScript", "Java", "Python", "Ruby"];

for (const key in programming) {
    console.log(programming[key]);
}