// guess the number until it found
let random = Math.random()*100
random = Math.floor(random)
let num
do{
 num = prompt("Guess the number")
if(num == random){
  console.log("Correct")
}
else if(num > random){
  console.log("Number guessed is greater than random number")
}
else{
  console.log("Number guessed is smaller than the number")
}
} while(num!=random);
console.log(random)