//Array literal way
let arr=[10,20,"Rahul"];
console.log(arr.toString());

let arr1=[{name:"Rahul"}];
console.log(arr1[0].name);

//flat()
console.log("flat method");
let arr2=[10,20,30,[40,50],[60,70]];
console.log(arr2.flat());//flats and remove 1 nested array 10,20...,40,50,60,70
let arr3=[10,20,30,[40,50],[60,70,[80,90]]];
console.log(arr3.flat());//flats and remove 1 nested array 10,20...,40,50,60,70,[80,90]
console.log(arr3.flat(2));//flats(times) and remove times=2 nested array 10,20...,40,50,60,70

//CRUD

//Create
let car=["porshe","alto","safari","Curvv","Drive","Wagonr"];

//add
console.log("push method");
let pushed=car.push("Omni");//returns new length
console.log(car);
console.log(pushed);//7 

//remove last 
console.log("pop method");
let popped=car.pop();
let popped2=car.pop(5);//popped element at 5th index
console.log(car);//
console.log(popped);//omni
console.log(popped2);

//remove first
console.log("Shift method");
let shifted=car.shift();//returns removed from index1
console.log(car);

//unshift
console.log("unshift method");
let unshifted=car.unshift("mustang")
console.log(shifted);//porshe.
console.log(unshifted);//returns length of new array

//slice(start,end)=>from start to end-1
console.log("Slice method");
let newCar=car.slice(0,3);//returns new array from index to index
console.log(car);//will not modify in this array
console.log(newCar);//["mustang","alto","safari"]

//splice=> modifiable slice method=> will modify array=>(start,length)
console.log("Splice method");
console.log(car);
let newCarSplice=car.splice(2,2);
console.log(car);
console.log(newCarSplice);//['safari', 'Curvv']

//for each
// car.forEach((element) => {
//     console.log(element);
// });

let forEachUD=(cbf,arr)=>{
    for (let i = 0; i < arr.length; i++) {
        cbf(arr[i],i,arr);
    }
}

let cbf=(val,ind,arr)=>{
    console.log(val);
}

console.log(forEachUD(cbf,car));