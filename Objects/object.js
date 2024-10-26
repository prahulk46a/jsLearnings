// Ways of object creation

console.log("Ways to create objects in javascript")
// 1.Obj literal way
let user={ 
    name: "Rahul", 
    age: 23, 
    degree: "BE" 
} 
console.log(user);

// 2.Using own class 
class Demo{
//constructors is declare like this
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
}

let obj=new Demo("Rahul",23);
console.log(obj);


// 3. Using object class

let example=new Object();       //3.1 create obj and then assign using dot operator
example.name="Rahul"

let example2=new Object({name:"Rohit"})    //3.2 direct passing onj into object constructor

console.log(example2);


// 4. Object.create method
let example3=Object.create({});//compulsory to pass empty object 
example3.name="Tinku";
console.log(example3);



//5. using constructor function=> as soon as we use this in function it will can be treated as class 
function Student(name,age){
    this.name=name;
    this.age=age;
}
let student1= new Student("yash",21);
console.log(student1);


//6. by returning obj into function 
let example5=(name,age)=>{
    return {
        name:name,
        age:age
    };
}
let val=example5("surya",36)//this will not treated as class 
let val2=example5("Rishabh",32)
console.log(val);
console.log(val2);






console.log("Object manipulation");

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

let jsonObj=JSON.stringify(car);
//Object conversion into json format
console.log(jsonObj);
//Json to js obj
console.log(JSON.parse(jsonObj));






