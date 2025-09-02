// Imedatelay Invoked function Expressions (IIFE)

// Regular Function Call
function one() {
  console.log("DB CONNECTED");
}
one();

// IIFE (Named Function)
(function one() {
  console.log("DB CONNECTED");
})();

// IIFE (Arrow Function with Parameter)
((name) => {
  console.log(`DB ${name} CONNECTED`);
})("empDB");

// one()
 
function name (){
  console.log('helo')
  
}