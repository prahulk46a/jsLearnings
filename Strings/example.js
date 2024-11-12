/* Some string methods predefined+ userdefined*/
//1
let countChar=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        count++;
    }
    return count
}
console.log(countChar("Rahul")); //5



//2
let findThirdChar=(str)=>{ 
    if(str.length<3){
        return "Not enough characters";
    }
    else{
        return str[2];
    }
}
console.log(findThirdChar("Rahul")); //h



//3
let getUnicode=(char)=>{
    return char.codePointAt(0);
}
console.log(getUnicode("A")); //65



//4
let startsWithHello = (str) => {
    return str.startsWith("hello");
};
console.log(startsWithHello("hello world")); //true



//5
let endsWithGoodBye = (str) => {
    return str.endsWith("Goodbye");
};
console.log(endsWithGoodBye("hello world Goodbye")); //true



//6
let containsJavascript=(str)=>{
    return str.includes("Javascript");
}
console.log(containsJavascript("Javascript dev"));  //true



//7
let findFirstA=(str)=>{
    return str.indexOf("a");
}
console.log(findFirstA("Agrawal")); //3



//8
let replaceDayWithNight=(str)=>{
    return str.replace("day","Night");
}
console.log(replaceDayWithNight("What a beautiful day it is !! Hope next day will be same !")); //"What a beautiful Night it is !! Hope next day will be same !"



//9
let replaceAppleWithOrange=(str)=>{
    return str.replaceAll("apple", "orange");
}
console.log(replaceAppleWithOrange("apple pie and apple juice")); //"orange pie and orange juice"



//10
let getFirstFive=(str)=>{
    return str.slice(0,5);
}
console.log(getFirstFive("Rahul Patil"));   //"Rahul"



//11
let splitIntoWords=(str)=>{
    return str.split(" ");
}
console.log(splitIntoWords("This is splitted word"));  // ['this','is','splitted','word']



//12
let toLowercase=(str)=>{
    return str.toLowerCase();
}
console.log(toLowercase("RAHUL"));  //"rahul"



//13
let toUppercase=(str)=>{
    return str.toUpperCase();
}
console.log(toUppercase("patil")); //"PATIL"



//14
let numberToString=(num)=>{
    return num.toString();
}
console.log(numberToString(45));// "45"
console.log(typeof(numberToString(45))); //string



//15
let trimWhitespace=(str)=>{
    return str.trim();
}
console.log(trimWhitespace("    Rahul")); //"Rahul"



//16
let trimStartWhitespace=(str)=>{
    return str.trimStart();
}
console.log(trimStartWhitespace("    gupta")); //"gupta"



//17 
let trimEndWhitespace=(str)=>{
    return str.trimEnd();
}
console.log(trimEndWhitespace("    kumar     "));//"    kumar"



//18
let padWithZeros = (num) => {
    return num.toString().padStart(5, "0");//00045
}
console.log(padWithZeros(45));  



//19
let padWithTrailingZeros = (num) => {
    return num.toString().padEnd(5, "0");
};
console.log(padWithTrailingZeros(45)); //45000



//20
let getLastThree=(str)=>{
    return str.length<=3?str:str.slice(-3);
}
console.log(getLastThree("Javascript")); //ipt



//21
let capitalizeIfContainsJavascript=(str)=>{
    if(str.includes("Javascript")){
        return str.toUpperCase();
    }
    return str
}
console.log(capitalizeIfContainsJavascript("Hello Javascript dev")); //HELLO JAVASCRIPT DEV


//22
let lowercaseFirstCharacter = (str) => {
    if (str.length === 0) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
};
console.log(lowercaseFirstCharacter("HeLLo")); //hello



//23
let checkStartAndEnd = (sentence) => {
    return sentence.startsWith("Good") && sentence.endsWith("Morning");
};
console.log(checkStartAndEnd("Good morning! Good Morning"));    //true



//24
let replaceAndUppercase=(str)=>{
    if(str.includes("Hello")){
        return str.replace("Hello","Hi").toUpperCase();
    }
    return str;
}
console.log(replaceAndUppercase("Hello world")); //Hi world



//25
let reverseWords = (sentence) => {
    return sentence.split(" ").reverse().join(" ");
};
console.log(reverseWords("JavaScript is fun")); //fun is JavaScript



//26
let cleanAndMeasureLength = (sentence) => {
    return sentence.replace(/\s+/g, '').length;   
};
console.log(cleanAndMeasureLength("Hello World")); //10



//27
let extractAndReplace = (sentence) => {
    let firstFiveChars = sentence.slice(0, 5); 
    return firstFiveChars.replace(/a/g, 'o'); 
};
console.log(extractAndReplace("JavaScript is fun")); //JovoS



//28
let replaceAtPosition = (sentence) => {
    return sentence.replace("JavaScript", "JS");
};
console.log(replaceAtPosition("I love JavaScript!")); //I love JS!



//29
let padWithAsterisks = (str) => {
    let totalLength = 10;
    let paddingNeeded = totalLength - str.length;
    if (paddingNeeded <= 0) {
        return str; 
    }
    let leftPadding = Math.floor(paddingNeeded / 2);
    let rightPadding = paddingNeeded - leftPadding;
    return '*'.repeat(leftPadding) + str + '*'.repeat(rightPadding); //****hi****
};
console.log(padWithAsterisks("Hi")); 


//30
let checkForWordInArray = (sentence) => {
    let words = sentence.split(" "); 
    return words.includes("JavaScript"); 
};
console.log(checkForWordInArray("I love JavaScript and coding!")); //true