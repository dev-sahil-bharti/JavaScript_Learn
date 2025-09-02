// -> 01
const course = {
    name: 'JavaScript',
    price: 999,
    courseInstructor: 'Sahil_Singh'
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course; //  Destructuring with renaming
console.log(instructor);

// JSON, API Notaion
 /*
 {
    "name": "Sahil",
    "age": 22,
    "email": "sahil_bharti@google.com",
    "isStudent": true,
    "skills": ["JavaScript", "Python", "MySQL"]
}
*/