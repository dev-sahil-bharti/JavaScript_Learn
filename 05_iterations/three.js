// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [10, 20, 30, 40, 50]
for (const element of arr) {
    // console.log(element);
}

const myArray = [1, 2, 3, 4, 5]
for (const [index, value] of myArray.entries()) {
    // console.log(`index ${index} on value ${value}`);
}


const greetings = "hello world"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log('space detected!');
        continue;
    }
    // console.log(greet);

}

// Map

const myMap = new Map();
myMap.set('IN', 'india');   
myMap.set('USA', 'United satats of America');
myMap.set('FR', 'France');
// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(`${key} :- ${value}`);
}

const myObject = {
    name: "sahil",
    rollN: 47,
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} :- ${value}`);
}