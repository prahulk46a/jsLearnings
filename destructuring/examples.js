//1
const color=["Red","Green","Blue"];
let[firstColor,secondColor,thirdColor]=color;
console.log(firstColor);

//2
const numbers=[1,2,3,4,5];
const[first,,third]=numbers
console.log(first); //1
console.log(third); //3

//3
const matrix=[[1,2],[3,4],[5,6]];
const[[a1,a2],a3]=matrix
console.log(a1); //1
console.log(a3); //[3,4]



//4
// const user ={
//     name:"Alice",
//     age:30,
//     add:"WonderLand"
// };
// console.log(user);
// let{name,age,add} = user;
// console.log(name,age,add); // Alice 30 Wonderland

//5
const point={
    x:10,
    y:20
} 
let {y:vertical,x:horizontal}=point;
console.log(horizontal);//10
console.log(vertical);//20

//6
const book={
    title:"Javascript Basics",
    year:2021
}

let{title,year,author="Rahul"}=book;
console.log(book);//not get added author in original obj
console.log(author);

// //7
// let person1={name:"Rahul",age:23,country:"India"};
// let getProfile=({name,age,country})=>{   //Instead of passing obj we pass destructured obj elements=> useful as no need to write person1.age like this.
//     console.log(country);
// }
// getProfile(person1);

//8 nested destructuring
const person2={
    name:"Bob",
    details:{
        age:27,
        address:{
            city:"New York",
            country:"USA"
        },
    },
};

let{name,details:{age,address:{city,country}}}=person2;
console.log(name,age,city,country);


//9 Rest
let arr=["a","b","c","d","e","f"];
let [p,...q]=arr;
console.log(q);//["b","c","d","e","f"]


//10
const setting={
    theme:"Dark",
    notifications:"true",
    layout:"grid",
    lang:"eng"
};
let {theme,...rest}=setting;
console.log(rest);
console.log(theme);


//11 Spread... 
const originalArray=[1,2,3];
let newArray=[...originalArray]; 
newArray.push(4);
console.log(newArray);
console.log(originalArray);//not affects to original arr

// Deep copy
let copy={...setting}
copy.theme="Light"

console.log(setting);
console.log(copy);//changes will not reflect into original array 


//12
const arr1=[10,20];
const arr2=[30,40];
let ans=[...arr1,...arr2];
console.log(ans);

//13
const start=[1,2]
const end=[9,10]

end.unshift(...start);
console.log(end);

//14
const car = { 
    make: "Toyota", 
    model: "Corolla" 
};
const copiedCar={...car};
copiedCar.model="camry";
console.log(car);
console.log(copiedCar);

//15
const defaultSetting={volume:50,brightness:50};
const userSetting={volume:30};

const mergeSetting={...defaultSetting,...userSetting};
console.log(mergeSetting);

//16
function sum(a,b,c){
    return a+b+c;
}
let num=[1,2,3];
console.log(...num);

//17
function calculateTotal(...price){
    return price.reduce((arg,price)=>arg+price,0);
}
console.log(calculateTotal(5,10,15));

//18
function combinneArray(...array){
    return [].concat(...array);
}
console.log(combinneArray([10,20],[30,40]));

//19
const num2=[1,2,3,4,5]
const[one,...other]=num2;
console.log(other);

//20
const config={host:"localhost",port:3030,user:"admin",password:"1234"}
const{host,port,...restConfig}=config;
const modifiedConfiguration={...restConfig,user:"NewUser"};
console.log(host);
console.log(port);
console.log(restConfig);
console.log(modifiedConfiguration);