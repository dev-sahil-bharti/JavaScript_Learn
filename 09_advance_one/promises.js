/*
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async taks is completed !");
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log(("promis consumed"));
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 is complete")
        resolve()
    }, 2000)
}).then(() => {
    console.log("promis consumed");

})

let value = 10;
// let error = "promis is incomplete!!";
error = true;
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task three is complete!")
        if (!error) {
            resolve("Success value")
        } else {
            reject("Error Happened")
        }
    })
}, 1500).then(function () {
    console.log("the block is execute : ", value);

}).catch(() => {
    console.log("catch block is execute, ", error);

}).finally(() => {
    console.log("Finally block is execute, cleenup if needed");

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javaScript", password: 123 });
        } else {
            reject('error js in not exesit')
        }
    }, 1000)
})
async function consumedPromiseFour() {
    try {
        const response = await promiseFour
        console.log("resolved response:", response);
    } catch (error) {
        console.log("Caught Error:", error);
    }

}
consumedPromiseFour()
*/

// async function gitHubuserConsumed() {
//     try {
//         const response = await fetch('https://api.github.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// gitHubuserConsumed();

fetch("https://api.github.com/users")
    .then((response) =>{
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);

    })