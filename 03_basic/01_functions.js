const { useReducer } = require("react");

// -> 01
    function myName(){
        console.log('S');
        console.log('A');
        console.log('H');
        console.log('I');
        console.log('L');
    }
    myName()

// -> 02
    // with arguments without retuen value
    // function addTowNumber(num1, num2){
    //     console.log(num1 + num2)
    // }

    // addTowNumber(10, 30);

    //with argumens with retuen value

    function addTowNumber(num1, num2){
        // let result = num1 + num2;
        // return result;
        return num1 + num2;
    }

    const  result = addTowNumber(10, 20);
    // console.log('result: ', result);
// -> 03
    function logInUserMassage(username){
        // if(username === undefined){
        //     console.log("Please enter user name!");
        //     return
        // }
        if(!username){
            console.log("please enter user name!");
            return 
        } 
        return `${username} just logged in`
    }

    console.log(logInUserMassage());
    // console.log(logInUserMassage('coder_sahil'));