
// let a=10;    //named export
// let b=20;
// let container=[a,b];
// // export default container;       // collect all that we want to export together and send once
// export default {a,b};              // Can export object like this



let add=(a,b)=>{
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
let sub=(a,b)=>{
    console.log(`Sum of ${a} and ${b} is ${a-b}`);
}
let mul=(a,b)=>{
    console.log(`Sum of ${a} and ${b} is ${a*b}`);
}
let div=(a,b)=>{
    console.log(`Sum of ${a} and ${b} is ${a/b}`);
}

export default{add,sub,mul,div};