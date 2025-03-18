// There are 3 state in promises=> pending, rejected, fulfilled
// promises can be either resolve or reject no two simultaneously get executed

let isTaskCompleted = false;
//Promise Constructor
let prom = new Promise((res, rej) => {
  setTimeout(() => {
    if (isTaskCompleted) {
      res();
    } else {
      rej();
    }
  }, 5000);
});
console.log(prom); //pending  till 5 sec after 5 sec it will show me rejected
prom.then(() => {
  console.log("Very good!!");
});
prom.catch(() => {
  console.log("Complete your task bastard");
});
prom.finally(() => {
  console.log("Execution complete");
});
console.log("end");
