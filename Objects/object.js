//obj in js 
let user={ 
    name: "Rahul", 
    age: 23, 
    degree: "BE" 
} 
console.log(user);

//using class 
class Demo{
    //constructors is declare like this
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
 }

 let obj=new Demo("Rahul",23);
 console.log(obj);

// will get in alphabetical order inside browser=>
//In js you can use number as key also if space seprated key we want we can use string for that not proper convention
 let car={
    brand:"BMW",
    price:"200k",
    type:"seden",
    color:"Red",            //Create
    capacity:"7 seater",
    "fuel type":"petrol",
    engine:"v8"
 };

 car.color="Black";//update

 console.log(car["brand"]);
 console.log(car.color);
 console.log(car.price); //Read

 let deleted=delete car["fuel type"]//boolean return type
 
 console.log(deleted);
 console.log(car);

  let allkey=Object.keys(car);
  let allValues=Object.values(car)
  console.log(allValues);
  console.log(allkey);

  Object.assign(user,car);
 
  console.log(user);//useer will get all  properties of car obj init

//   Used to convert obj into an array. it will get store individual property as 1 array and nested array will get created[[prop1],[prop2]...]
  console.log(Object.entries(car));

  //array into obj=> must follow this syntax arr=[10,20,30] not possible
  let person=[["name","yash"],["age",24]];
  let objFromArr=Object.fromEntries(person);
  
  