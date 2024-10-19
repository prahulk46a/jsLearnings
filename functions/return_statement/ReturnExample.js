// let f1=()=>{
//     return"Hello";
// }

// console.log(f1());   //Hello

// let f2=()=>{
//     console.log("hello");    //no return statement 
// }

// console.log(f2());   //hello(8th line) and undefined(11 line)

// let f3=()=>{
//     let f4=()=>{
//         console.log("f4 called");
//     }
//     // return f4();
//     return f4;//function will be return at this line that means body not call.
// }
// let returnf4=f3();
// returnf4();
// console.log(returnf4());//here it will call  to that f4 function f4 will get executed

// console.log(f3());//function body will be printed




let outer=()=>{
    console.log("Outer called");
    let inner=()=>{
        console.log("Inner func Called");
    }
    return inner;
}
            // js currying  (outer()=> output of first paranthesis. 
outer()();  // will be returned function and that is immediately get called using 2nd brace)
  


