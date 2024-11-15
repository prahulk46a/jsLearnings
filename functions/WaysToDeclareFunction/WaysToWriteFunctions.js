// Declaring function as an expression(x=y)  
// Function that are passed as value are also called as first class/citizen function
let demo=function(){
    console.log("This is function declaration with expression"); 
}

// Declaring function without expression/simple functions  
function demo1(){
    console.log("This is function declaration without expression"); 
}

demo();
demo1();


// Arrow function no need to declare function and functionName just use => in between round paranthesis and curly paranthesis  
let way3=(a,b)=>{return a+b};
console.log(way3(4,5));

let intro=(name,age)=>{console.log(`My name is ${name}. I am ${age} years old.`)};
// console.log(intro("Rahul",23)); this will give intro output and undefine as well as cause firstly intro will be undefined as I am not returning

intro("Rahul",23);


let num=parseInt(prompt("Enter number"));
let sqr =(a)=>{return a*a};

console.log(sqr(num));


// Immediate Invoke function => will immediately get executed 
(function(){
    console.log("This is immediate invoke function using simple function");
})();

(()=>{console.log("Immediate invoke using arrow function")});

//we cannot recall immediate invoke function
//first bracket as parameters and in second we pass argument
//convention to follow=> should not use space between 2 parenthesis.Semicolon is mandatory before line 
((a,b)=>{console.log(a+b)})(5,10);


