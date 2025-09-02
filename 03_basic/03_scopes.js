//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sahil";
  function two() {
    const website = "youtube";
    // console.log(username);
  }

  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "sahil";
  if (username === "sahil") {
    const website = "google.com";
    // console.log(username + website);
  }
  // console.log(website); // throw error
}
// console.log(username);  // throw error

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Function Declaration:
console.log(addOne(10));
function addOne(num) {
  return num + 1;
}

// Function Expression:
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(20));
