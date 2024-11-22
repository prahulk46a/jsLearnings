console.log(document);
let container=document.getElementById('container')//
console.log(container);
console.log(container.id);

let elements=document.getElementsByTagName('h1')
console.log(elements);


let elements2=document.getElementsByClassName('heading')
console.log(elements2);

let element3=document.querySelector('.heading')
console.log(element3);//returns first tag which has 

let elements4=document.querySelectorAll('.heading')
console.log(elements4);