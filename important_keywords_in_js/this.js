//this will not include name as this will point towards current obj using arrow
// const person={
//     name:"alice",
//     greet:()=>{
//         console.log("hello"+this.name);
//     }
// };
// person.greet();


const person={
    name:"Rahul",
    //function should be simple only no arrow function should be used as it will points towards window
    greet:function(){
        console.log(this); //this will point to current obj 
    }
}
// person.greet();

// console.log(this);

let obj={
    expression:"😭",
    f1:function(){
        //only this synario will point towards current obj using arrow because of lexical scoping(ability to search in global)
        let f2=()=>{
            console.log(this);
        }
    }
}

//
let obj2={
    name:"Rahul",
    age:24
};
function f1(){
    console.log(this);
}

// f1(); //this will point towards window obj but we want that this inside func should point to current obj2 

// f1.call(obj2); //by doing this it will point towards current obj.





let obj3={
    name:"Akanksha",
    age:24
};
function f2(a,b,c){
    console.log(this);
    console.log(a,b,c);
}

f2.call(obj3,10,20,30);// by doing this f2 will point towards obj3 

f2.apply(obj3,[10,20,30]);   //just syntax difference here in 3 methods

let returnedFunc=f2.bind(obj3,10,20,30); //will return reference of this current func and can be called in future
returnedFunc()



// console.error("unexpected error");
// console.warn("This is warning!");
// console.log(typeof(x));



