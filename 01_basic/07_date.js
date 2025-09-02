// Dates

let myDate = new Date();
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let creteDate = new Date(2024, 0, 16)
// let creteDate = new Date(2024, 0, 16, 5, 30)
// let creteDate = new Date("2023-01-14");
let creteDate = new Date("01-21-2023");
// console.log(creteDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(creteDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date("2020-2-12")
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

let mydate = new Date();
let formatted = `Today is ${mydate.toDateString()} and current time is ${mydate.toLocaleTimeString()}`;
console.log(formatted);

newDate 