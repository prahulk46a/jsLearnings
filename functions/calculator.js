function add(a,b){
    console.log("addition", a+b);
}

function substract(a,b){
    console.log("Substraction ", a-b);
}
function multiply(a,b){
    console.log("multiplication", a*b);
}

function divide(a,b){
    console.log("divide", a/b);
}

function remainder(a,b){
    console.log("modulo", a%b);
}

//explicit typecasting 
let a= Number(prompt("Enter First Number"));
let b= Number(prompt("Enter Second Number"));

let num1=parseInt(prompt());
let num2=parseInt(prompt());  //will parse from start 

add(a,b);
multiply(a,b);
substract(a,b);
divide(a,b);
remainder(a,b);
add(num1,num2);




