var a=10;
if(true){
    var a=20;
    console.log(a); //20
}

if(true){
    var l=10;
}
var l;
console.log(l);//10 can access from any where

var b=20;
if(true){
    var b;
    console.log(b); //20 local can accesed in global and vice-versa only for var this is problematic
}


let d=10;
if(true){
    let d=20;
    console.log((d));//20 let follows all scopes rules
}

const z=10;
if(true){
    const z=20;
    console.log(z);// 20
}




