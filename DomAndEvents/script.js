// console.log(document);
// let container=document.getElementById('container')//
// console.log(container);
// console.log(container.id);

// let elements=document.getElementsByTagName('h1')
// console.log(elements);


// let elements2=document.getElementsByClassName('heading')
// console.log(elements2);

// let element3=document.querySelector('.heading')
// console.log(element3);//returns first tag which has 

// let elements4=document.querySelectorAll('.heading')
// console.log(elements4);
// element3.innerText="Text Changed"//this will change text inside html

// // console.log(element3.style.backgroundColor="red");
// let count = 0;
// let countClick=()=>{
//     count+=1;
//     element3.innerText=`Count is ${count}`;
// }

// let main=document.querySelector('main')
// let h1=document.createElement('h1')
// console.log(h1);
// h1.setAttribute('title',"tooltip");
// h1.innerText("Hello")
// main.append(h1);



// Iterating on dom collection ele 
// let allDivs=document.getElementsByTagName("div");
// console.log(allDivs);
// //allDivs.style is not possible as it is collection  allDivs.map is also not possible 
// for(let i=0;i<allDivs.length;i++){
//     if(i%2){
//         allDivs[i].style.color="green";
//     }
//     else{
//         allDivs[i].style.color="blue";
//     }
// }

// allDivs.array.forEach(element => {
//     element.style.color="red";
// });

// //chaining and inner html
// let main=document.querySelector("main");
// let div1=document.createElement('div').style.color="red";
// main.innerHTML=`<div style="color:red">
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
// officiis recusandae praesentium atque sint est doloremque nobis deleniti
// optio vero!
// </div>
// <div>
// Minus saepe est quisquam, repellendus nostrum vitae ut repudiandae
// blanditiis explicabo numquam quibusdam non ea recusandae illo possimus rem
// necessitatibus.
// </div>`
// main.appendChild(div1);
// console.log(main);


let main=document.querySelector('main')
let removeEle=()=>{
    console.log("Element removed");
    main.remove();
}
