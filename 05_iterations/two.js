// // WHILE LOOP EXAMPLES

// // 1. While loop (1 to 9)
// let n = 1;
// while (n < 10) {
//     console.log(`Current value of n is ${n}`);
//     n++;
// }

// // 2. Print array using while loop
// const myArray = ["flash", "batman", "superman", "thor"];
// let arr = 0;
// while (arr < myArray.length) {
//     console.log(myArray[arr]);
//     arr++;
// }

// // 3. Reverse print array using while loop
// const myArray1 = ["flash", "batman", "superman", "thor"];
// let arr1 = myArray1.length - 1;
// while (arr1 >= 0) {
//     console.log(myArray1[arr1]);
//     arr1--;
// }



// // DO WHILE LOOP EXAMPLES

// // 4. Do while loop (1 to 9)
// let m = 1;
// do {
//     console.log(m);
//     m++;
// } while (m < 10);

// // 5. Print array using do while loop
// const heros = ["saktiman", "superman", "thor", "balveer"];
// let index = 0;
// do {
//     console.log(heros[index]);
//     index++;
// } while (index < heros.length);

// 6. Reverse print array using do while loop
const heros = ["saktiman", "superman", "thor", "balveer"];
let indexRev = heros.length - 1;
do {
    console.log(heros[indexRev]);
    indexRev--;
} while (indexRev >= 0);
