
/*let age = prompt("What is your age ?")
if(age>10 && age<20){
  console.log("Your age lies between 10 and 20")
}
else{
  console.log("your age does not lies between 10 and 20")
*/
/*
let age = prompt("what is your age")
age = Number.parseInt(age)
switch (age) {
  case 12:
    console.log("your age is 12")
    break;
  default:
    console.log("You age is not 12")
} 
*/
let age = prompt("Enter your age")
age = Number.parseInt(age)
console.log(age>18?"You can drive ": "You can not drive")