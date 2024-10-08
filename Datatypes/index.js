let a= 10;
let b=0;
console.log(a);             //number
console.log(b);
console.log(typeof a);

let bool=true;              
console.log(bool);          //boolean
console.log(typeof bool);

let lng= 10n;
console.log(lng);           //bigInt
console.log(typeof lng);

let empt= null;
console.log(empt);          //Null
console.log(typeof empt);   //object

let undfn;
console.log(undfn);        //Undefined
console.log(typeof undfn); 

let x=NaN;                 //Nan
console.log(x);

let str="Rahul"
console.log(str);          //String     "Rahul
                           //             "     this will give me error 
console.log(typeof str);

let str2=`Water
Quantity:1L`;        //String using backticks multilines will not possible if simple quotes used backticks allows multiline
console.log(str2);

//js allows directly use of variables into your code  ex.
let str3="Rahul";
console.log(`${str3} is Java Fullstack Developer`);

//Boolean 
console.log(Boolean(0)); //0 false
console.log(Boolean(2)); //2 true => some value assigned other than 0
console.log(Boolean()); // false no space
console.log(Boolean( )); //true as space present
console.log(Boolean(true)); //true 
console.log(Boolean(false)); //false 
console.log(Boolean(null)); //false 
console.log(Boolean(undfn)); //false 
console.log(Boolean(NaN));   //false


//Coercion
console.log(10+"10");   //for + Gives priority to concatination first => 1010
console.log(10-"10");   //any operation other than + (-,*,/,%) Gives priority to arithmatic operations=> 0
console.log("10"-"10"); //0
console.log(10-"a");    //Nan
console.log("a"-"a");   //Nan if operants cannot get typecasted then Nan will be output
console.log(10*"2");    //20
console.log(10%"2");    //0

//Symbols
var p=10;
var q=10;
// console.log(p===q);                  //symbol are used to create unique identity of objects. 
console.log(Symbol(p)==Symbol(q));      //Use case when we want to uniquely identify existance
console.log(typeof (Symbol(10)));                //symbol
console.log(Boolean(Symbol(10)));       //True

var l=Object(a);
console.log(typeof l);

