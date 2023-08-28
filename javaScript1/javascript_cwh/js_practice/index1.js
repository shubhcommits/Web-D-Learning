// let age = prompt("Enter your age")
// age=Number.parseInt(age)
// if(age>18){
//     document.write("you can drive")
// }
// else{
//     document.write("you can not drive")
// }

let runAgain = true;
const canDrive = (age)=>{
    return age>18?true:false
}
while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age<0){
    console.error("Please enter a valid age")
    break;
}
if(canDrive(age)){
    alert("You can drive")
}
else{
    alert("You can not drive")
}
runAgain = confirm("Do you want to play again")
}