let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let credentials = {
  user: "",
  pass: "",
  id: Date.now(),
};

username.addEventListener("input", (e) => {
  credentials.user = e.target.value;//user= targeted event value will get stored
//   console.log(credentials);
});
password.addEventListener("input", (e) => {
  credentials.pass = e.target.value;
//   console.log(credentials);
});
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(credentials.user && credentials.pass){
        localStorage.setItem('username', credentials.user)
        localStorage.setItem('password', credentials.pass)
        console.log(localStorage);
    }
})


