//if-else
// var a=10
// if(a==10){
//     console.log("A is equals to 10");
// }
// else{
//     console.log("A is not equals to 10");
// }

// let age=prompt("Enter Your age")
// if(age>=18){
//     console.log("Cpngrats you are eligible for driving license");
// }
// else{
//     console.log(`You will be eligiblie afer ${18-age} years`);
// }



// let savingAccountBalance=100;
// let currentAccountBalance=100;
// let ccAccountbalance=100;
// let options=parseInt(prompt(`Select account type...
//         1.savingq
//         2.current
//         3.cc
//     `));

// let isDeposit=confirm("Do you want to deposit money??");
// let isBalanceCheck=confirm("Do you want to Check Balance??");


// if(isDeposit){

//     let depositAmount=parseInt(prompt("Enter amount you want to deposit.."));
//     switch(options){
//         case 1:
//             let updateSavingBalance=savingAccountBalance+depositAmount;
//             console.log(`Balance in your saving account ${updateSavingBalance}`);
//             break;

//         case 2:
//             let updateCurrentBalance=currentAccountBalance+depositAmount;
//             console.log(`Balance in your saving account ${updateCurrentBalance}`);
//             break;

//         case 3:
//             let updateCCBalance=ccAccountbalance+depositAmount;
//             console.log(`Balance in your saving account ${updateCCBalance}`);
//             break;
//         default:
//             console.log("Invalid Option...");
//     }
    
// }
// if(!isDeposit & isBalanceCheck){
//     switch(options){
//         case 1:
//             console.log(`Balance in your saving account ${savingAccountBalance}`);
//             break;

//         case 2:
//             console.log(`Balance in your saving account ${currentAccountBalance}`);
//             break;

//         case 3:
//             console.log(`Balance in your saving account ${ccAccountbalance}`);
//             break;
//         default:
//             console.log("Invalid Option...");
//             break
//     }
// }

// if(!isDeposit & !isBalanceCheck){
//     let isWithDraw=confirm("Do you want to withdraw amount??")
//     let withdrawAmmount=parseInt(prompt("Enter amount you want to withdraw"));
//     if(isWithDraw){

//         switch(options){
//             case 1:
//                 let updateSavingBalance=savingAccountBalance-withdrawAmmount;
//                 console.log(`Balance in your saving account ${updateBalance}`);
//                 break;
    
//             case 2:
//                 let updateCurrentBalance=currentAccountBalance+withdrawAmmount;
//                 console.log(`Balance in your saving account ${updateCurrentBalance}`);
//                 break;
    
//             case 3:
//                 let updateCCBalance=ccAccountbalance+withdrawAmmount;
//                 console.log(`Balance in your saving account ${updateCCBalance}`);
//                 break;
//             default:
//                 console.log("Invalid Option...");
//         }
//     }
// }




// Ternary operators=> let y=((condition) ? exp1: exp2)




//for
// let arr=[10,20,30,40,"Rahul"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }




//while 
// let count=4;
// while(count>0){
//     console.log(arr[count]);
//     count--;
// }




// do while=> In js while is entry control and do-while is exit control 
//i.e you always enter into loop and will get exit if condition is false 

// func();
func2();

function func(){
    console.log("Simple Function ");
}

let func2= function(){
    console.log("Funct 2 called");
}
