//In javascript call apply bind are used to point current obj to this.
//The primary reason to use call, apply, and bind in JavaScript is to control the value of this in a function.
//This can be especially useful when a function needs to work in different contexts or when borrowing methods.
//By default this will point to window obj so if we want it to point to our specified obj we can use this methods

//call=> functionName.apply(thisArg, arg1, arg2, ...);

//Example1
function logDetails() {
  console.log(`${this.name} is ${this.age} years old.`);
}
const user = { name: "Rahul", age: 23 };
// Rahul is 23 years old.
logDetails.call(user);

//Example2
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: "Rahul" };
greet.call(person, "Hello", "!"); //Hello, Rahul!

//apply=>functionName.apply(thisArg, [arg1, arg2, ...]);
// Example1
const user2 = { name: "Rahul", age: 23 };
logDetails.apply(user);

//Example2
const person2 = { name: "Dolly" };
greet.apply(person2, ["Hello", "!"]);

// bind=> The bind method creates a new function with this bound to the specified value.
//        Unlike call and apply, bind does not immediately invoke the function; instead,
//        it returns a new function that can be called later.

// Using bind
const boundGreet = greet.bind(person, "Hey", ".");
boundGreet(); // Invoking the bound function
