// let greetWithCallback=(helloWorld)=>{
//     helloWorld();
// }

// let helloWorld=()=>{
//     console.log("Hello World");
// }

//14
// let forLoopCallBack=(a,cbf1,cbf2)=>{
//     for(let i=1;i<a;i++){
//         if(i==5){
//             cbf2(i);
//             break;
//         }
//         cbf1(i);
//     } 
// }

// let firstCallback=(a)=>{
//     console.log(a);
// }

// let secondCallback=(a)=>{
//     console.log(a);
// }

// forLoopCallBack(10,firstCallback,secondCallback);


//11 
// let checkEligibility=(age,cbf)=>{
//     cbf(age);
// }

// let isEligible=(age)=>{
//     let eligible=((age>=18)?("Eligible for voting..."):("Not eligible for voting..."))
//     console.log(eligible);
// }

// checkEligibility(21,isEligible);

//16
// let recursivePrintWithCallback=(num,cbf)=>{
//     cbf(num);
// }

// let printRecursive=(num)=>{
//     if(num==0){
//         return;
//     }
//     printRecursive(num-1);
//     console.log(num);
// }

// recursivePrintWithCallback(10,printRecursive)

//17
// let fizzPrintWithCallback=(a,cbf)=>{
//     cbf(a);
// }

// let print=(a)=>{
//     for(let i=1;i<a;i++){
//         if(i%3==0){
//             console.log("fizz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzPrintWithCallback(10,print);


// 18
// function whileLoopWithBreakCallback(limit, callback, callbackForSeven) {
//     let i = 1;
    
//     while (i <= limit) {
//       if (i === 7) {
//         // Call the second callback when the number is 7 and break the loop
//         callbackForSeven(i);
//         break; // Exit the loop when i is 7
//       }
  
//       // Call the first callback for all other numbers
//       callback(i);
//       i++; // Increment the counter
//     }
//   }
  
//   // Example usage:
//   function handleNumber(num) {
//     console.log("Number:", num);
//   }
  
//   function handleNumberSeven(num) {
//     console.log("Breaking at:", num);
//   }
  
//   whileLoopWithBreakCallback(10, handleNumber, handleNumberSeven);
  

let multiplyWithDefaultAndCallback=(num1, num2 = 2, callback)=>{
    // Multiply num1 and num2, using the default value of 2 if num2 is not provided
    const result = num1 * num2;
  
    // Call the callback with the result
    callback(result);
  }
  
  // Example usage:
  let printResult=(result)=> {
    console.log("Result of multiplication:", result);
  }
  
  // Calling with both numbers
  multiplyWithDefaultAndCallback(5, 3, printResult); // Output: 15
  
  // Calling with only the first number (second number will default to 2)
  multiplyWithDefaultAndCallback(5, undefined, printResult); // Output: 10
  