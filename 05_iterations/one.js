// for loop 

// -> 1
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// -> 2
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${i} and inner loop value: ${j}`)
        // console.log(i + '*' + j + '=' + i * j);
    }
}

// -> 3
let arr = ['superman', 'spaiderman', 'flash'];
// console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

//--------------------- Break and Continue-----------------------------

for (let i = 1; i < 15; i++) {
    if (i == 7) {
        console.log("7 is detected! ");
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i < 10; i++) {
    if (i == 5) {
        console.log('5 is detected!');
        continue;
    }
    console.log(`value of i is ${i}`);
}