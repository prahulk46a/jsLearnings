// Examples and CASES=>
// Case1: Global Variables
var globalVar = "I am global VAR";
let globalLet = "I am also global LET";

function showGlobalScope() {
  console.log(globalVar); // ✅ Accessible
  console.log(globalLet); // ✅ Accessible
}

showGlobalScope();
console.log(globalVar); // ✅ Accessible
console.log(globalLet); // ✅ Accessible

//Case2: Function Scope (Hoisting Not applied)
function testFunctionScope() {
  var functionVar = "I exist only in this function";
  let functionLet = "Me too!";
  console.log(functionVar); // ✅ Accessible
  console.log(functionLet); // ✅ Accessible
}

testFunctionScope();
// console.log(functionVar); // ❌ ReferenceError: Outside function you cannot access var as well as let
// console.log(functionLet);

//Case3: Function Scope (hoisting applied)
function testFunctionScopeHoisted() {
  console.log(functionVar2); // Hoisted Var variable => undefined => var variables can be access anywhere in function scope.
  console.log(functionLet2); // Error => Variables declared using let are hoisted but they are in temporal dead zone (TDZ) untill they dont get initialized.
  var functionVar2 = "I exist only in this function";
  let functionLet2 = "Me too!";
}

testFunctionScopeHoisted();
console.log(functionVar2); // ❌ ReferenceError: Outside function you cannot access var as well as let
console.log(functionLet2);

//Case4:Block scope
if (true) {
  var x = "I exist beyond this block";
  let y = "I am block-scoped";
}

console.log(x); // ✅ Accessible (var is NOT block-scoped)
console.log(y); // ❌ ReferenceError (let is block-scoped)

//Case5: Lexical scoping
function outer() {
  let a = "I am from outer scope";
  function inner() {
    console.log(a); // ✅ Accessible
  }
  inner();
}

outer();
console.log(a); // ❌ ReferenceError (not in global scope)

// Case6: Function scope vs block scope
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); //  3,3,3 => Same variable that is declared in window obj get updated and after that event loop will execute settimeout
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000); //  0,1,2 => Every time new variable get created and then value get stored
}

//Case7: Closure
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer();
increment(); // ✅ 1   Even though Function execution context of outer is closed or not created still we can access counter variable
increment(); // ✅ 2   Because of special memory called closure
increment(); // ✅ 3
