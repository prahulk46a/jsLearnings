let date=new Date();
let a=date.getUTCFullYear()
let c=date.getSeconds()

let d=date.setHours(8);
let b=date.getHours();
let v=date.getMonth();

console.log(a);
console.log(c);
console.log(v);

switch (date.getDay()) {
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thursday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    case 0:console.log("Sunday");break;
    
    default:
        break;
}


switch (date.getMonth()) {
    case 0:console.log("Jan");break;
    case 1:console.log("Feb");break;
    case 2:console.log("Mar");break;
    case 3:console.log("Apr");break;
    case 4:console.log("May");break;
    case 5:console.log("June");break;
    case 6:console.log("Jul");break;
    case 7:console.log("Aug");break;
    case 8:console.log("Sept");break;
    case 9:console.log("Oct");break;
    case 10:console.log("Nov");break;
    case 11:console.log("Dec");break;
    
    default:
        break;
}