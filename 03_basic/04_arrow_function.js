// -> 01
const user = {
  username: "sahil",
  course: "JavaScript",
  price: 999,
  welcome: function () {
    console.log(`${this.username} are you in role the ${this.course} course.`);
    console.log(this);
  },
};

// user.welcome();
// user.username = "sonu";
// user.course = "python";
// user.welcome();

// console.log(this);

// -> 2

function one() {
  username: "sahil";
  console.log(this.username);
}
// one();

const two = function one() {
  username: "sahil";
  console.log(this.username);
};
// two();

const three = () => {
  username: "sahil";
  console.log(this);
};
// three();

// -> 03

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// const other = (num1, num2) =>  num1 + num2;
// const other = (num1, num2) => (num1 + num2)
const other = (num1, num2) => ({ username: "sahil" });

// console.log(addTwo(5, 9));
console.log(other());
