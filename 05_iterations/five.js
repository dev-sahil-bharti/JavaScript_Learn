const coding = ['c++', 'java', 'javascript', 'python'];

// 1 forEach with named function
function print(item) {
    console.log(item);
}
coding.forEach(print);

// 2 forEach with arrow function + index + array
coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

//  Array of objects (languages with file extensions)
const myCoding = [
    { languageName: 'java', fileName: 'java' },
    { languageName: 'C++', fileName: 'cpp' },
    { languageName: 'python', fileName: 'py' }
];

// 3 forEach to print language names
myCoding.forEach((item) => {
    console.log(item.languageName);
});
