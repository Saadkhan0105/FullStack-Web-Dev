// Check if a number is greater than another number:

let num1 = 5
let num2 = 8
console.log("I am reguar upper code")

if (num1 > num2) {
    console.log("The number1 is greater than number2")
} else {
    console.log("Nope, The number1 is not greater than number2")
}
console.log("I am reguar bottom code")

// Check if a string is equal to another string

let username = "Saad"
let anotherusername = "Saad"

if (username != anotherusername) {
    console.log("Pick another username")
} else {
    console.log("You can pick this username")
}


// Checking if a variable is a number or not:

let score = 44

if (typeof score === 'number'){
    console.log("Yep, this is a number");
} else {
    console.log("Nope, this is not a number"); 
}

// Checking if a boolean value is true or false:

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is Ready");
} else {
    console.log("Tea is NOT ready")
}

// Check if an array is empty or not:

let items = ["items"];

console.log(items.length);


if (items.length === 0) {
    console.log("The array is empty");
} else {
    console.log("The array is NOT empty");
}