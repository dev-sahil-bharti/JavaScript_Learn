// -> 01
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(10, 10, 500, 1000));

// -> 02

const user = {
  username: "Sahil Bharti",
  price: 199,
}

function handleObject(Obj) {
  console.log(`Username is: ${Obj.username} and price is: ${Obj.price}`);
}
handleObject(user);

handleObject({
    username: 'sahilu',
    price: 499
})
 
// -> 03
const myArr = [100, 200, 300, 400, 500]

function arrReturnValue(getArray){
    return getArray[3]
}

// console.log(arrReturnValue(myArr));
console.log(arrReturnValue([20, 30, 40, 50]));