
//10
let people=[{name:"Rahul",age :23},{name:"Yash",age :21},{name:"Madhu",age :7},{name:"Krushnali",age :18}];
let eligiblePeople=people.filter(val=>val.age>=18);
console.log(eligiblePeople);

//11
let sales=[3000,5000,2700,4130,2189];
let totalSales=sales.reduce((arg,val)=>arg+val,0);
console.log(totalSales);

//12
let students=["Dolly","Akash","Abhi","Amardeep","Prajakta","Kshitija"];
students.forEach((val)=>console.log(`Good morning ${val}!`));

//13
let guest=["Sachin Tendulkar","Virat Kohli","Saina Nehwal","Lebron James","Cristiano Ronaldo"];
let guestIndex=guest.findIndex(val=>val=="Virat Kohli");
console.log(guestIndex);

//14
let items=["Sugar","Tea","Fruits","Rice","Wheat"]
let lastItem=items.at(-1);
console.log(lastItem);

//15
let menu=["Paneer Kabab","Chicken Tikka","Khichadi","Veg masala","Jerra Rice"];
let isAvailable=menu.includes("Chicken Tikka");
console.log(isAvailable);