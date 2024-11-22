//Async and await are keywords used to perform asynchronous
// async function getData(){
//     console.log("Fetching...");
//     const data=await fetchData();
//     console.log(data);
// }  
// getData();
const fetchProduct=async ()=>{
    try{
        console.log("Fetching...");
        const resp=await fetch("http://api.github.com/users");
        const data=await resp.json();
        console.log(data);
    }catch{
        console.log("Error...");
    }
}

let output= fetchProduct();
console.log(output);
const display=(products)=>{
    console.log(products);
    // const section=document.getElementById("container");
    // section.innerHTML=products
    // .map(
    //     (e)=>
    // <h1>${e.title}</h1>
    // );
}

display(data);

