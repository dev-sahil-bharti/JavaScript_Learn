// ->> 01
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = myNumbers.map((num) => {
    return num + 10
});
console.log(result);

// ->> 02

const newArray = [1, 2, 3, 4, 5]

const result1 = newArray
    .map((num) => num * 5)
    .map((num) => num + 1)
    .filter((num) => num > 20)
    .f
console.log(result1);
