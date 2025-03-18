// There are 3 state in promises=> pending, rejected, fulfilled
// promises can be either resolve or reject no two simultaneously get executed

/*Why Promises??=> Simple more readable more Controlled. 
//using callbacks
getUser(1, (user) => {
  getOrders(user, (orders) => {
      getOrderDetails(orders[0], (details) => {
          console.log(details);
      });
  });
});

//using Promises
getUser(1)
  .then(getOrders)
  .then(getOrderDetails)
  .then(console.log)
  .catch(console.error);
*/

//Example1 => Simple fulfilled promise
let promise1 = new Promise((resolve, reject) => {
  resolve("Resolved promise");
});
promise1.then(console.log("Promise1 resolved"));

//Example2 => Promise Rejected
const promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong ❌ Promise rejected");
});

promise2
  .then(console.log) // Won't execute
  .catch(console.error);

//Example3=> Promise with async task(setTimeOut)
// let isTaskCompleted = false;
// //Promise Constructor
// let prom = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (isTaskCompleted) {
//       res();
//     } else {
//       rej();
//     }
//   }, 5000);
// });
// console.log(prom); // Initially pending
// console.log("End of script execution"); // Prints immediately
// prom
//   .then((message) => {
//     console.log("Very good!!", message);
//   })
//   .catch((error) => {
//     console.log("Complete your task bastard. Reason:", error);
//   })
//   .finally(() => {
//     console.log("Execution complete 🚀");
//   });

//Example4=> Handling multiple then
const promise4 = new Promise((res, rej) => {
  res(10);
});
promise4
  .then((res) => {
    return res * 2; // The value which you have returned will be given to next then block=>20
  })
  .then((res2) => {
    return res2 * 3; //20*3 => 60
  })
  .then((res3) => {
    console.log("Final Answer is " + res3);
  })
  .catch(() => {
    console.error("Unexpected error occurred");
  });

//Example 5=> Chaining promise with multiple Async block
function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve("Step 1:Second Asynchronous task completed ✅"),
      1000
    );
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve("Step 2:Second Asynchronous task completed ✅"),
      900
    );
  });
}

asyncTask1()
  .then((result) => {
    //After 1st promise resolved second block of promise get resolved
    console.log(result);
    return asyncTask2();
  })
  .then(console.log);

//Example6=> Handling error in promise chains
let promise6 = new Promise((resolve) => {
  return resolve(10);
});
promise6
  .then((num) => {
    throw new Error("Something went wrong!");
  })
  .then((num) => num * 2)
  .catch(console.error);

//Example 7=> Run Multiple promises => Promise.all() static method takes an iterable of promises as input and returns a single Promise.
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 ✅"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 ✅"), 2000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 ✅"), 500)
);

Promise.all([p1, p2, p3]).then(console.log);

//Example8 => Promise.allSettled()
const p5 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 ✅"), 1000)
);
const p6 = new Promise((_, reject) =>
  setTimeout(() => reject("Task 2 ❌"), 2000)
);
const p7 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 ✅"), 500)
);

Promise.allSettled([p5, p6, p7]).then(console.log);

//Example8 => promise.race()=> returns first settled promise, whether fulfilled or rejected.
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        return resolve(value);
      } else {
        return reject(new Error(value));
      }
    }, time);
  });
}

const p8 = sleep(2500, "one", "fulfill");
const p9 = sleep(2100, "two", "fulfill");

Promise.race([p8, p9]).then((value) => {
  console.log("Example8=> Promise.race");
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

//Example9 =>
Promise.any([p8, p9]).then((value) => {
  console.log("Example9=> Promise.any");
  console.log(value); // "Two"
  //First fulfilled returned but ignores rejected
});
