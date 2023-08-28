/*
let arr = [45,46,47]
// array map method  // value of orginal array does not change new array will formed
let a = arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value +1
})
console.log(a)
*/
/*
// array filter method
let arr2 = [45,46,47,5,6]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2)
*/

// ARRAY REDUCE METHOD

let arr = [1,4,4,4,4,5]
let a= arr.reduce((a1,a2)=>{
  return a1+a2
})     
console.log(a)

const reduc_func = (a1,a2)=>{
  return a1+a2
}
let a= arr.reduce(reduc_func)
console.log(a)
