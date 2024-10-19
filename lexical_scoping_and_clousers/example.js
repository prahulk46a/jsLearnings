let outer=()=>{
    let bike="Bullet";
    let car="Mustang";

    let anna=()=>{
        console.log(bike);//clouser will get created and bike will get stored in clouser even if outer function execution context is destroyed
    };
    anna()
}
outer()