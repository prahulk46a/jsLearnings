let hello= new String("Hello");
let str1="Hello World"
console.log(hello); //will get stored as separate object  
// console.log(this);

console.log(hello.toLowerCase());//hello
console.log(hello.toUpperCase());//HELLO


// //padding
// //custom impl
// let str2="1234";
// let addPadding=(str2,len,val)=>{
//     if(str2.length>=len){
//         return str2;
//     }
//     else{
//         for(let i=str2.length;i<len;i++){
//             str2+=val;
//         }
//         return str2;
//     }
// }
// console.log(addPadding(str2,10,"x"));
// console.log(str2);

//default impl
let num= "83"
console.log(num.padEnd(8,"x"));//83xxxxxx total 8 length if possible will try to push char mention next if there is space if more than length then it will not slice string ex.1234567890 will remail as it is
console.log(num.padStart(8,"*"));//******83
//find
let Name="Rahul";
console.log(Name.includes("Ra"));//false case sensitive string match


//Slice method=> will have negative indexing that start from end
//custom impl
let sliceString= (str3,num1,num2)=>{
    let ans="";
    for(let i=num1;i<num2;i++){
        ans+=str3[i];
    }
    return ans;
}
let ans1=sliceString("Rahul",2,5);
console.log(ans1);//hul

//default impl
let str4="Pancheshwar";
console.log(str4.slice(0,7));//Panche =>0 to 6 all will be sliced (startindex,endindex) only possible syntax
console.log(str4.slice(5));//eshwar from 5 to end 
console.log(str4.slice(7,3));// will not give any o/p as indexes not properly passed
console.log(str4.slice(-3,-1));// wa
console.log(str4.slice(-1));//r






//Substring=> no negative indexing for substring
let player="Yuvraj Singh";
console.log(player[-2]); // undefined
console.log(player.substring(1,4));//uvr  (startIndex,endLength)

//substr
console.log(player.substr(2,5));//vraj=> (startIndex,length from that index) 
console.log(player.substr(9,7));//ngh=> if more than string length passed it will take upto end

//Replace method=> replaces first occurrence if you want to replace all use replaceAll method
console.log(player.replace("Yuvraj","Milkha"));

let tut="Qspiders";
let a= tut.split("s");  
console.log(a);

//startsWith
console.log("Hi");
console.log("Rahul".startsWith("Ra"));

//String reversal in js
let ex1="Rahul Patil"
console.log(ex1.split("").reverse().join(""));


// dynamically adding a[count]=index in object
let obj={}
let ex2="Rahul Patil";
let count=1;
for(let i=0;i<ex2.length;i++){
    
    if(ex2[i]=="a"){
      obj[`a${count}`]=i;
      count++;
    }
}
console.log(obj);


//charAt=> returns character at that point 
let ex3="Abhishek";
console.log(ex3.charAt(2));//h
//charCodeAt=> return character ascii at that position
console.log(ex3.charCodeAt(0));//65


//Concat
let ex4="Hi";
let ex5="! How are you??"
console.log(ex4.concat(ex5));

console.log(ex5.indexOf("H"));//return index of first occurrence 












