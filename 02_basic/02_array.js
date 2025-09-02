const marval_Heros = ["Thor", "Hulk", "Daredevil"];
const dc_heros = ["Aquaman", "Flash", "Green_Lantern"];

// marval_Heros.push(dc_heros);
// console.log(marval_Heros);
// console.log(marval_Heros[3][1]);

// const all_heros = marval_Heros.concat(dc_heros);
// console.log(all_heros);

const new_allHeros = [...marval_Heros, ...dc_heros];
// console.log(new_allHeros);

let anotherArr = [1, 2, 4, 5, [23, 43, 52], [[453, 456, 325], 34, 22]];
let realArr = anotherArr.flat(Infinity);
// console.log(realArr);


const name = "sahil";
const charArr = [...name];
// console.log(newArr);

const newArr = name.split("");
// console.log(charArr);

console.log(Array.isArray("sahil"));
console.log(Array.from("sahil"));
console.log(Array.from({ name: "sahil" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
