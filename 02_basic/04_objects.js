// -> 01
// const instaUser = new Object();
const instagramUser = {};
instagramUser["full name"] = "Sahil Bharti";
instagramUser.userName = "coder_sahil07";
instagramUser.categary = "content creater";
instagramUser.isLoggedIn = false;

// console.log(instagramUser);
// -> 02
const gitUser = {
  email: "some123@gamil.com",
  info: {
    userFullName: {
      firstName: "sahil",
      lastName: "Bharti",
      userId: "abj967",
    },
  },
};

gitUser.greeting = function () {
  console.log(
    `Welcome ${this.info.userFullName.firstName} to the GitHub world!`
  );
};
// console.log(gitUser);
// gitUser.greeting();
// console.log(gitUser.info);
// console.log(gitUser.info.userFullName);
// console.log(gitUser.info.userFullName.firstName);

// -> 03

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };

// const obj3 = { obj1, obj2 }; // Nesting using object literal
// const obj3 = Object.assign({}, obj1, obj2); // Merging with Object.assign()
const obj3 = { ...obj1, ...obj2 }; // Merging with spread operator (...) best !!
// console.log(obj3);

// -> 04
console.log(instagramUser);
console.log(Object.keys(instagramUser));
console.log(Object.values(instagramUser));
console.log(Object.entries(instagramUser));

console.log(instagramUser.hasOwnProperty('isLoggedIn'))