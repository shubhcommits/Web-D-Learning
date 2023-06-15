// MAKE ARRAY OF NUMBERS ANS ADD NUBERS TO ARRAY
// let array = [1, 5, 6, 4, 4, 5]
// let a = 1
// while (a != 0) {
//   a = prompt("enter the number to add")
//   a = Number.parseInt(a)
//   array.push(a)
// }
// console.log(array)

// FILTER A NUMBER DIVISIBLE BY 10 IN A NUMBER

// let array = [10,25,36,20,100,130,120,200]
// let  n = array.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// CREATE AN ARRAY OF SQUARE OF GIVEN NUMBERS

// let array = [1,2,3,4,5]
// let n = array.map((x)=>{
//   return x*x
// })
// console.log(n)

// FACTORIAL OF FIRST N NATURAL NUMBER
let array = [1,2,3]
let n = array.reduce((x1,x2)=>{
  return x1*x2
})
console.log(n)
