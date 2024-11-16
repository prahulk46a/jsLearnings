
// Destructuring=> Process of extracting out values from obj/arr(used for repetitive use of that element from arr/obj )
let bag={
    item1:"Camera",
    item2:"shirts",
    item6:"Torch",
    item3:"Snacks",
    item4:"charger",
    item5:"chaddi",
    item7:"Brush"

}

// let{item2,item3}=bag;
// console.log(item2); //Torch 

let{item1,item3,item4,item6,...personalThings}=bag
console.log(personalThings);//will keep all except specified keys :rest in object

// console.log(...bag);//this will give error as we cannot iterate over keys directly and print that into console you need to store all spreaded ele in to another obj first
console.log({...bag});//spread in object


// let myWindow={
//     myAlert:()=>{
//          alert("Alert function called");
//     },
//     myConfirm :()=>{
//          confirm("This is confirm")
//     }
// }

// myWindow.myAlert();//need to access this alert again and again so it is destructured

// let {myAlert,myConfirm}=myWindow;
// myAlert();      //this is how alert works in js.Internally all window obj are destructed 

//Array Destructuring=> we have to take our variables as we dont have keys for array and need to follow sequence 
let arr=[1,2,3,4,5,6,7,8,9,0];
// let[a,b,c]=arr;
// console.log(a);//1
// console.log(b);//2

//rest and spread
let[a,b,...c]=arr
console.log(c);//returns array of element except than first 2
//1=a,2=b,[3,4,5,6,7,8,9,0]=c   this is called rest

let arr2=[10,20,30]
console.log(...arr2);//spread in js all array element is directly accessible 1005 destructuring 
//will not work with obj works with only iterable one

let arr3=[10,20,30]
let sum=(a,b,c)=>{
    console.log(a+b+c);
}
console.log(sum(...arr3));//internally sum(10,20,30)

//




