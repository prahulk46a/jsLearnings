console.log("first line before function declaration");

function describe(name){
    console.log("first line after function call inside function");
    console.log(`${name} is learning js
    using vs code`);

}

console.log("before calling function");
describe("Rahul");