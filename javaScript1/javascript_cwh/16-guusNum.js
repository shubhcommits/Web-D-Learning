let random = Math.random()*100
random = Math.floor(random)
let num
let c=0;
do{
 num = prompt("Guess the number")
if(num == random){
  console.log("Correct")
}
else if(num > random){
  console.log("Number guessed is greater than random number")
}
else{
  console.log("Nuber guessed is smaller than the number")
}
  c++
} while(num!=random);
console.log("number of chances taken "+c)
console.log(random)