let aside = document.querySelector("aside");
let section = document.querySelector("#singleProduct");

let fetching = async () => {
  let jsonData = await fetch(`https://dummyjson.com/products`);//Data will get fetched 
  let data = await jsonData.json();//json to js array 
  data = data.products;
  console.log(data[0].title);

  let div = document.createElement("div");
  div.innerHTML = `
  <img src='${data[0].images[0]}' width='500px'>
   <h1>${data[0].title}</h1>`;
  section.append(div);
  showAside(data);
};
let showAside = (data) => {
  data.map((val, i) => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerText = "view product";
    div.setAttribute("id", "productDiv");
    console.log(val.price);
    div.innerHTML = `
        <img src="${val.images[0]}" width='200px' alt="" />
        <h1>${val.title}</h1>
        <p>&dollar;${val.price}</p>         
    `;
    div.append(btn);
    aside.append(div);

    //After clicking button view product product should get displayed in right div
    btn.addEventListener('click', ()=>{
        section.innerHTML = `<img src="${val.images[0]}" width='200px' alt="${val}" />
        <h1 >${val.title}</h1>
        <p font-size='25px'>&dollar;${val.price}</p>
        <p>${val.description}</p>`  
    })
  });
};
fetching();
