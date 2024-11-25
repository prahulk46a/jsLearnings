// let action=()=>{
//     console.log("Button Clicked using Html");
// }

// // way 2: Using JS: dom
// // let btn=document.querySelector("button");
// // //xyz will be be pointer event object inside which all content related to ur btn is present
// // btn.onclick=(xyz)=>{
// //     console.log("Button Clicked using js dom");
// //     console.log(xyz);
// // }


// //way 3: Using Js: With event listeners

// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log("Button Clicked and event triggered using eventlistener");
// });

// // attributes of html are actually keys of html objects and when you give value to then it will get stored in that key
// //ex obj{key1:val1,key2:val2}=> (button{color:"red", click:"()"=>{}} Example


// let inputField=document.querySelector('input');
// let uname=document.querySelector('h1')
// inputField.addEventListener('input',()=>{
//     console.log(inputField.value);
//     uname.innerText=inputField.value;
// })



let inputField=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('ul');

let todoText="";
inputField.addEventListener(('input',()=>{
    todoText=inputField.value;
    console.log(todoText);
}));

btn.addEventListener(('click',()=>{
    let li=document.createElement('li');
    let update=document.createElement('button');
    update.innerText="update"
    li.innerText=todoText;
    list.append(li,update)
    inputField.value=""
}))





