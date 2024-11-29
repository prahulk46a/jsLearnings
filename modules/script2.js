// import {a} from "./script.js"       //In default exp we dont need to add curly braces w can import as any name in another script using default
import obj from "./script.js"          //Where we are importing that script is needed to be declared as type="module"
// console.log(a);
// console.log(val);
// console.log(val.a);

let {add,sub,mul,div}=obj;
add(100,200);
sub(200,100)
mul(100,3);
div(300,100);