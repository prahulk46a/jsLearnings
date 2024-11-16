// //Array literal way
// let arr=[10,20,"Rahul"];
// console.log(arr.toString());

// let arr1=[{name:"Rahul"}];
// console.log(arr1[0].name);

// //flat()
// console.log("flat method");
// let arr2=[10,20,30,[40,50],[60,70]];
// console.log(arr2.flat());//flats and remove 1 nested array 10,20...,40,50,60,70
// let arr3=[10,20,30,[40,50],[60,70,[80,90]]];
// console.log(arr3.flat());//flats and remove 1 nested array 10,20...,40,50,60,70,[80,90]
// console.log(arr3.flat(2));//flats(times) and remove times=2 nested array 10,20...,40,50,60,70

// //CRUD

// //Create
let car=["porshe","alto","safari","Curvv","Drive","Wagonr"];

// //add
// console.log("push method");
// let pushed=car.push("Omni");//returns new length
// console.log(car);
// console.log(pushed);//7 

// //remove last 
// console.log("pop method");
// let popped=car.pop();
// console.log(car);//
// console.log(popped);//omni

// //remove first
// console.log("Shift method");
// let shifted=car.shift();//returns removed from index1
// console.log(car);

// //unshift
// console.log("unshift method");
// let unshifted=car.unshift("mustang")
// console.log(shifted);//porshe.
// console.log(unshifted);//returns length of new array

// //slice(start,end)=>from start to end-1
// console.log("Slice method");
// let newCar=car.slice(0,3);//returns new array from index to index
// console.log(car);//will not modify in this array
// console.log(newCar);//["mustang","alto","safari"]

// //splice=> modifiable slice method=> will modify array=>(start,length)
// console.log("Splice method");
// console.log(car);
// let newCarSplice=car.splice(2,2);
// console.log(car);
// console.log(newCarSplice);//['safari', 'Curvv']
// // splice() => splice(start: number, deleteCount: number, ...items: []): newArray[]
// let arr=["start","center","end"];
// arr.splice(1,1,"mid");
// console.log(arr);

// //for each
// // car.forEach((element) => {
// //     console.log(element);
// // });

// let forEachUD=(cbf,arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         cbf(arr[i],i,arr);
//     }
// }

// let cbf=(val,ind,arr)=>{
//     console.log(val);
// }

// forEachUD(cbf,car);

// //reverse
// console.log(car);
// car.reverse()
// console.log(car);

//map=> Similar to forEach will return array which will get modified
let num=[25,30,62,42,100,10]
let rv=num.map((val,i,arr)=>{
    return val*10;
});
console.log(rv);
let returnedGreater=num.map((val)=>{
    if(val>30){
        return val;
    }
})
console.log(returnedGreater);

//mockaro api
let data=[{name:"Rahul",age:21},{name:"Tejas",age:52},{name:"Abhi",age:26},{name:"Pratham",age:30},{name:"Yash",age:23},{name:"Aditya",age:63},{name:"Rohit",age:24},{name:"Dhruv",age:34}];
let ans=data.map((val)=>{
     return val.name;
});
console.log(ans);

//filter()=> will get filtered array based on condition
let filtered=data.filter((val)=>
    // if(val.age<30){
         val.age<30 //you cannot return custom, filter will return current iteration 
                        //i.e in this case entire obj even we are fetching name 
    // }
);

//if we dont want to use curly braces to hof then it will implicitly returns just don't return. ex. val=>val>10
console.log(filtered);

//reduce() => Reduces an array to single value by executing logic 
//reduce(clb(accumulator,value,index,array),initial value of accumulator=> default arr[0])=> 4 arguments can be passed
let sum=num.reduce(((acc,num)=>acc+num),100);
console.log(sum);//169+100=269

// sort() => will modify sorted array and return
let sortedDigitWise=num.sort();//sort all on basis of digits ex. 100,10,20 like this
console.log(sortedDigitWise);
let sorted=num.sort((a,b)=>a-b)//sort 10,20,100 in a-b=> increasing b-a=> decreasing
console.log(sorted);


//find()=> similar to filter but filter will check for entire array and find will match 1st time and return from that point only
let finded= num.find(val=>val>30);
console.log(finded);//42 1st occ in num greater than 30


let findName=data.find(val=>val="Rahul");
console.log(findName);

//isArray()=> checks if passed val is array or not
let checkArray=Array.isArray(num);//true
console.log(checkArray);

//from()=> converts string into array
let str="Rahul"
let cnvArray=Array.from(str);//['R','a','h', 'u', 'l']
console.log(cnvArray); 

//join()=> join array into string 
let originalStr=cnvArray.join('');
console.log(originalStr);



// delete
delete arr[1];//deletes arr[1] but didn't remove index 
console.log(arr);// ['start', empty, 'end']
