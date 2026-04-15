let username = {
  firstname: "John",
  isLoggedIn: true,
};
username.firstname = "Saad";
username.lastname = "Khan";

console.log(username.firstname); 
console.log(username.lastname); 
console.log(username.isLoggedIn); 

let obj = { name: "John", age: 30, city: "New York" };

// Accessing properties using dot notation
console.log(obj.name); 
console.log(obj.age); 
console.log(obj.city); 

// Accessing properties using bracket notation
console.log(obj["name"]); 
console.log(obj["age"]); 
console.log(obj["city"]); 

// Adding new properties to the object using dot notation
obj.email = "john@example.com";
console.log(obj.email); 

// Adding new properties to the object using bracket notation
obj["phone"] = "123-456-7890";
console.log(obj.phone); 
// Deleting properties from the object using dot notation
delete obj.age;
console.log(obj.age); 

// Deleting properties from the object using bracket notation
delete obj["city"];
console.log(obj.city); 

// Accessing non-existent properties using dot notation
console.log(obj.gender); 

// Accessing non-existent properties using bracket notation
console.log(obj["gender"]); 

let today = new Date();
console.log(today.getDay()); 

// Array
let heroes = ["Iron Man", "Hulk", "Thor", true];
console.log(heroes[0]); 