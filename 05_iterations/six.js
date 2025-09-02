// -> 01
const coding = ["js", "java", "c", "ruby", "py"];
const values = coding.forEach((items) => {
    // console.log(items);
    // return items
});

// console.log(values);

// -> 02
const myNum = [10, 22, 34, 35, 78];
// const result = myNum.filter( (num)=> num > 30 )  // without scope
const result = myNum.filter((num) => {
    return num > 30;
})
// console.log(result);


const myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNum2.forEach((num) => {
    if (num > 5) {
        myNum2.push(num)
    }
})
// console.log(myNum2);


// -> 03

const books = [
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        year: 2008,
        price: 350
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        year: 2018,
        price: 450
    },
    {
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        year: 2015,
        price: 400
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        price: 600
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        year: 2009,
        price: 800
    }
];

const userBooks = books.filter((bks) => bks.author === "Robert C. Martin");

console.log(userBooks);
