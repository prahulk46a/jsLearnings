let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let credentials = {
  user: "",
  pass: "",
};

username.addEventListener("input", (e) => {
  credentials.user = e.target.value;
  console.log(credentials);
});
password.addEventListener("input", (e) => {
  credentials.pass = e.target.value;
  console.log(credentials);
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let localUsername = localStorage.getItem('username')
  let localPassword = localStorage.getItem('password')



  if(credentials.user == localUsername && credentials.pass == localPassword){
    alert(`welcome ${localUsername}`)
    
  }else{
    alert('invalid credentials')
  }
});
