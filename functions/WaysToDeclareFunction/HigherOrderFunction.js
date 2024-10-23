// //Higher order functions and callback functions
// //HOF=> Function which accepts another function as an argument is hof
// //cbf=> Function which is passed to hof is called call back function(cbf)
// simple function are hoisted hence can be access before declaring hence function assigning came into picture and arrow functions too


// let hof=(a)=>{
//     console.log(a);
// }
// let cbf=()=>{
//     console.log("CBF called");
// }

// hof(cbf); //here entire cbf function will be printed not executed but we need to call in hof body inorder to execute function (cbf)

// let hof2=(a)=>{
//     a();
// }
// let cbf2=()=>{
//     console.log("CBF called");
// }

// hof2(cbf2);  //op will be a get executed 



// //passing argument to cbf

// let hof3=(a)=>{
//     a(10);
// }

// let cbf3=(val)=>{
//     console.log("cbf with value "+val);
// }

// hof3(cbf3);


//arguments value passing into hof
// let hof=(cbf,num1,num2)=>{
//     cbf(num1,num2);
// }







let add=(a,b)=>{
    console.log("Adding values which are passed while calling hof",a+b);
}
// hof(add,10,20);


//Substraction using hof
// let higherSub=(sub,num1,num2)=>{
//     sub(num1,num2);
// }

let substract=(num1,num2)=>{
    console.log("Substraction is ",num1-num2);
}

// higherSub(substract,10,5);


//Multiplication
//let higherMult=(mult,num1,num2)=>{
//     mult(num1,num2);
// }
let mult=(a,b)=>{
    console.log("Multiplication is ",a*b);
}

// higherMult(mult,10,20);
//common oprtn hof 
let operation=(opt,num1,num2)=>{
    opt(num1,num2);
}

operation(add,10,20);
operation(substract,20,10);
operation(mult,20,10);


let add2=(a,b)=>{console.log(`sum with backticks ${a+b}`)};
let sub2=(a,b)=>{console.log(`substract with backticks ${a-b}`)};
let mult2=(a,b)=>{console.log(`multiplication with backticks ${a*b}`)};

operation(add2,10,20);
operation(sub2,50,10);
operation(mult2,20,10);