// // let hello= new String("Hello");
// let str2="Hello World"
// console.log(hello); //will get stored as separate object  
// // console.log(this);

// console.log(hello.toLowerCase());//hello
// console.log(hello.toUpperCase());//HELLO


//padding
//custom impl
let str="1234";
let addPadding=(str,len,val)=>{
    if(str.length>=len){
        return str;
    }
    else{
        for(let i=str.length;i<len;i++){
            str+=val;
        }
        return str;
    }
}
console.log(addPadding(str,10,"x"));
console.log(str);

//default impl
let num= "83"
console.log(num.padEnd(8,"x"));//83xxxxxx total 8 length if possible will try to push char mention next if there is space if more than length then it will not slice string ex.1234567890 will remail as it is
console.log(num.padStart(8,"*"));//******83
//find
console.log(Name.includes("ra"));//false case sensitive string match






//Slice method=> will have negative indexing that start from end
//custom impl
let sliceString= (str,num1,num2)=>{
    let ans="";
    for(let i=num1;i<num2;i++){
        ans+=str[i];
    }
    return ans;
}
let ans=sliceString("Rahul",2,5);
console.log(ans);

//default impl
let str3="Pancheshwar";
console.log(str3.slice(0,7));//Panche =>0 to 6 all will be sliced (startindex,endindex) only possible syntax
console.log(str3.slice(5));//eshwar from 5 to end 
console.log(str3.slice(7,3));// will not give any o/p as indexes not properly passed
console.log(str3.slice(-3,-1));// wa
console.log(str3.slice(-1));//r






//Substring=> no negative indexing for substring
let str4="Yuvraj Singh";
console.log(str4[-2]); // undefined
console.log(str4.substring(1,4));//uvr  (startIndex,endLength)
console.log(str4.substr(2,5));//vraj=> (startIndex,length from that index) 
console.log(str4.substr(9,7));//ngh=> if more than string length passed it will take upto end


//Replace method=> replaces first occurrence if you want to replace all use replaceAll method
console.log(str4.replace("Yuvraj","Milkha"));

let tut="Qspiders";
let a= tut.split(s);    
















