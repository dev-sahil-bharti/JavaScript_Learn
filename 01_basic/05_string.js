const name = "Sahil";
const repo = 78;

// console.log(name);
// console.log(name + " in " + repo + " repo on GitHub account"); // outDated
// console.log(`${name} in ${repo} repositry on gitHub account`); // mordern

const gameName = new String("sahil-hc-com"); // string declear on object type
// string Methods
// console.log(gameName[5]); // fild on key base
// console.log(gameName.length); // string length is
// console.log(gameName.__proto__); // string protoType
// console.log(gameName.toLocaleUpperCase()); // conmvert string in uperCase
// console.log(gameName.charAt(6)); // on index find element

// console.log(gameName.indexOf("h")); // element on index find:

// const newString = gameName.substring(0, 5); // string to substring 
// console.log(newString);

const anotherString = gameName.slice(-3, 1);
// console.log(anotherString);

let tempStr = "    rs_graphics     "
// console.log(tempStr)
// console.log(tempStr.trim())

let url = "https://sahil.com/mds%20jkdfydf/home"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('sahils'))

console.log(gameName.split('-'));