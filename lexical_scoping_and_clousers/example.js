let outer=()=>{
    let bike="Bullet";
    let car="Mustang";

    let inner=()=>{
        console.log(bike);//clouser will get created and bike will get stored in clouser even if outer function execution context is destroyed
    };
    return inner// lexical scoping
}
let inner2=outer()
inner2()