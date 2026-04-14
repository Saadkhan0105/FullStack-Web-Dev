// Number

let balance = 1000
let anotherBalance = new Number(2000)
 
console.log(typeof(balance));
// console.log(balance);
console.log(typeof(anotherBalance));
// console.log(anotherBalance.valueOf());

let isActive = true
let isReallyActive = new Boolean(true) // not recommended

// null and undefined
let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

// string
let myString = "Hello"
let myString1 = 'Hola'
let userName = 'Saad Khan'

let oldGreet = myString + " " + userName + "!"
console.log(oldGreet);

let greetMessage = `Hello, ${userName}! Welcome to JavaScript.`
console.log(greetMessage);

let demoOne = `Value is ${2*2}`
console.log(demoOne)


let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 === sm2); // false

