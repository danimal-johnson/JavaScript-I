// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
console.log("\n\n\n"); // Add some space between the files.

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => 
    console.log("Function was invoked!");
myFunction();



// let anotherFunction = function (param) {
//   return param;
// };
//anotherFunction("Example");

const anotherFunction = (param) => param;
console.log(anotherFunction("Example"));



// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (num1, num2) => num1 + num2;
console.log(add(1,2));




// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (num1, num2) => num1 - num2;
console.log(subtract(1,2));




// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
let exampleArray = [1,2,3,4];
let triple = exampleArray.map(a => a * 3);
console.log (triple);