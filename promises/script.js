// //Promise=> It is javascript object.It is used to achieve async programming.
// console.log("Start");
// let value=prompt("Enter value");
// let p=new Promise((resolve,reject)=>{
//     if(value=="Expected"){
//         resolve();
//     }else{
//         reject();
//     }
// });

// p.then(()=>{
//     console.log("Matches expected value");
// });
// p.catch(()=>{console.log("Unexpected value")
// // });
// p.finally(()=>{
//     console.log("Execution complete");
// })
// console.log("end");


// // resolve call=> then will get called 
// // reject=> catch will get called

// // There are 3 state in promises=> pending, rejected, fulfilled
// //promises can be either resolve or reject no two simultaneously get executed
// let isTaskCompleted=false;
// let prom=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(isTaskCompleted){
//             res()
//         }
//         else{
//             rej()
//         }},5000);
// })
// console.log(prom);//pending  till 5 sec after 5 sec it will show me rejected
// prom.then(()=>{
//     console.log("Very good!!");
// });
// prom.catch(()=>{console.log("Complete your task bastard")
// });
// prom.finally(()=>{
//     console.log("Execution complete");
// })
// console.log("end");




// let p=fetch("http://api.github.com/users")
// console.log(p);//promise
// p.then(()=>{
//     console.log(p);
//     p.then((res)=>{
//         console.log("Data fetched...");
//         let promiseResult=res.json();//this will be promise 
//         console.log(promiseResult);
//         promiseResult.then((resp)=>{
//             console.log(resp);
//         })
//     })
// });

//promiseout=>promisin=>json=>data

// if you return from then() then it will passed to next then as a parameter 
// p1.then(()=>{return res}).then((res2)=>{return res2}).then((res3)=>{clg res3).catch()
// at any point then get error it will call catch .All then will get executed even if no then returns in between
// chaining 
let x=10;
let p=new Promise((resolve,reject)=>{
    if(x==10){
        resolve(x);
    }
    else{
        reject("Number is not 10");
    }
}).then((res)=>{return res*10}).then((res2)=>{console.log("This is return 2");return res2*10}).then((res3)=>{console.log(res3);}).catch((rej)=>{console.log(rej);})
//.then((res)=>{return res*10}).then((res2)=>{console.log("This is return 2");return res2*10}).then((res3)=>{console.lo(res3);}).catch((rej)=>{console.log(rej);})//will get catch executed as in last block lo is written instead of log



// //
// let clickButton=()=>{
//     // let fetching=fetch('http://api.github.com/users');
//     let data;
//     setTimeout(()=>{
//         data=[{},{},{}];
//     },500)

//     let p5=new Promise((res,rej)=>{
//         setTimeout(()=>{if(Array.isArray(data)){
//             res(data);
//         }
//         else{
//             reject("Data is not api");
//         }},1000);
//     }).then((resp)=>{console.log(resp);}) //this resp is coming from response(parameter)
// }

