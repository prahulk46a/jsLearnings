//SetTimeout(evenHandle,time in milisec)
//Executes only once at the end of timeEnd
// setTimeout(() => {
//     console.log("challo paper do...");
// }, 15100);

// //setInterval(evenHandler=>Repetitive event,time in milisec)
// //Executes in every time interval
// let count=0;
// let myInterval=setInterval(()=>{
//     count++;
//     console.log(count);
//     if(count==15){
//         console.log("Done");
//         clearInterval(myInterval);
//     }
// },1000);


// let start=(data)=>{
//     console.log("loading...");
//     setTimeout(()=>{
//         console.log("You are almost there...");
//         setTimeout(()=>{
//             console.log("Data is sucessfully loaded and your data is",data);
//         },3000);
//     },3000)
// }

//generate random number every sec.
let cnt=0;
let generate=setInterval(()=>{
    console.log(Math.random());
    if(cnt==5){
        clearInterval(generate);
    }
    cnt++;
},1000);

//
let start=(data)=>{
    console.log("loading...");
    setTimeout(()=>{
        console.log("You are almost there...");
        setTimeout(()=>{
            console.log("Data is successfully loaded and your data is",);
        },3000);
    },3000)
} 


//this is going to print 10 times 10 as 10 async settimeout func will get executed after sync for loop execution
for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    });
}

