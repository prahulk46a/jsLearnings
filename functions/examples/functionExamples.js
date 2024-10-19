//1
function sayHello(){
    console.log("Hello");
}
// sayHello();


//2
let farewell=function(){
    console.log("GoodBye!");
}
// farewell();


//3
let cheerUp=()=>{
    console.log("Cheer Up Buddy!");
}
// cheerUp();


//4
let introduce=(name)=>{
    console.log(`My name is ${name}`);
}
// introduce("Rahul");


//5
let placeOrder=(flavour)=>{
    console.log(`Ordered a ${flavour} pizza`);
}

// placeOrder("cheese");
// placeOrder("pepperoni");

//6
let greetPerson=(name)=>{
    console.log(`hi, ${name}`);
}
// greetPerson("Rahul");


//7 
function startMorning(){
    makeCoffee();
}

function makeCoffee(){
    console.log("makes coffee...");
}
// startMorning();



//8 
let morningRoutine=(funct1,funct2)=>{
    funct1();
    funct2();
}

function brushTeeths(){
    console.log("Brush your teeths");
}

function getDressed(){
    console.log("GetDressed fast!");
}
// morningRoutine(brushTeeths,getDressed);


//9
function takeAction(cbf){
    console.log("Action processed..");
    cbf()
}
function callback(){
    console.log("Action Completed!");
}

// takeAction(callback);


//10
let calculateArea=(length,width)=>{
    console.log("Area of rectangle is "+ length*width);
}

// calculateArea(10,20);
// calculateArea(5,10);

//11
let lunchBreak=(funct1,funct2)=>{
    funct1();
    funct2();
}

function eatLunch(){
    console.log("Have a lunch...");
}

function takeNap(){
    console.log("Take a rest...");
}

// lunchBreak(eatLunch,takeNap);

//12
function supportTeam(){
    console.log("Go, Team....");
}
// supportTeam();
// supportTeam();
// supportTeam();


// 13
let updateWeather=()=>{
    console.log("The whether is great today...");
}

// updateWeather();

// 14
let petTalk=()=>{
    console.log("Who's a good pet?");
}

// petTalk();


//15
let favoriteMovie=(name,year)=>{
    console.log(`My favorite movie is ${name} from ${year}`);
}
// favoriteMovie("3 Idiots",2008);

//16
function dailySchedule(){
    morningWork();
    work();
    eveningChill();
}

function morningWork(){
    console.log("Morning works..");
}
function work(){
    console.log("Work in afternoon..");
}
function eveningChill(){
    console.log("Evening chill...");
}
// dailySchedule();

//17
let exerciseRoutine=(stretch,run)=>{
    stretch();
    run();
}
function stretch(){
    console.log("Stretching...");
}
function run(){
    console.log("Running...");
}

// exerciseRoutine(stretch,run);

//18
let motivateMe=()=>{
    console.log("Motivate Me...");
}

// motivateMe();

//19
let iceCreamTime=(flavour)=>{
    console.log(`Ordering a ${flavour} icecream`);
}
// iceCreamTime("vanilla");

//20
let nightRoutine=()=>{
    brushTeethsNight();
    goBed();
}

function brushTeethsNight(){
     console.log("Brush your teeths every night");
}

function goBed(){
     console.log("going to bed");
}

// nightRoutine();

//21
let setAlarm=(cbf)=>{
    console.log("Alarm set for 7 AM");
    cbf();
}

function wakeUp(){
    console.log("Time to wakeup..");
}

// setAlarm(wakeUp);

//22
let placeGroceryOrder=(cbf)=>{
    console.log("Order placed for groceries...");
    cbf();
}

function deliveryNotification(){
    console.log("Your grocery order has arrived...");
}

// placeGroceryOrder(deliveryNotification);

//23
let cookDinner=(cbf)=>{
    console.log("Dinner is cooking...");
    cbf();
}

function dinnerReady(){
    console.log("Dinner is ready..");
}
// cookDinner(dinnerReady);


//24
let startExercise=(cbf)=>{
    console.log("Starting workout...");
    cbf();
}
function completWorkout(){
    console.log("Workout completed...");
}
// startExercise(completWorkout);

//25
let chargePhone=(cbf)=>{
    console.log("Charging phone...");
    cbf();
}
function fullCharge(){
    console.log("phone fully charged...");
}
// chargePhone(fullCharge);

//26

let startLaundry=(cbf)=>{
    console.log("Laundry started...");
    cbf();
}
function laundryDone(){
    console.log("Laundry Done...");
}
// startLaundry(laundryDone);

// 27
let sendEmail=(cbf)=>{
    console.log("Sendimg email...");
    cbf();
}

function emailSend(){
    console.log("Email Send...");
}
// sendEmail(emailSend);


//28
let startMeeting=(cbf)=>{
    console.log("Zoom meeting Started ...");
    cbf();
}
let meetingStarted=()=>{
    console.log("Metting started...");
}

// startMeeting(meetingStarted);

//29
let carSevice=(cbf)=>{
    console.log("Car service scheduled..");
    cbf();
}

function seviceCompleted(){
    console.log("Car service completed...");
}

// carSevice(seviceCompleted);


//30
let brewCoffee=(cbf)=>{
    console.log("Brewing Coffe..");
    cbf();
}

function coffeeReady(){
    console.log("Coffee is ready....");
}
// brewCoffee(coffeeReady);