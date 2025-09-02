const myNum = [1, 2, 3]

// const total = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currVal: ${currval}`);
//     return acc + currval;
// }, 0);

const total = myNum.reduce( (acc, currVal) => (acc + currVal), 0)

console.log("total: " + total);


const soppingCard = [
    {
        course: "javaScript",
        price: 2999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "Java",
        price: 2199
    },
    {
        course: "C++",
        price: 1999
    }
]
const priceToPay = soppingCard.reduce((acc, item) => (item.price + acc), 0)
console.log(priceToPay);
