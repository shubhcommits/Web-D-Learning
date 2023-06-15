// let num = [1,2,3,4,5,6,7,8,9]
// let num2 = [22,23,24,25,26,27,28]
// // console.log(num.length)
// // delete num[0]
// // console.log(num,num.length)
// let newArray = num.concat(num,num2)
// console.log(newArray)

// sort method
// let num = [1,66,24,16,87,3]
// num.sort()   // this sort the array thinking it is string by taking first element
// console.log(num)

// to sort in ascending order
// let compare = (a,b)=>{
//   return a-b
// }
// let num = [1,66,24,16,87,3]
// num.sort(compare)
// console.log(num)
// num.reverse()
 //console.log(num)

/*
 spline and slice

let num = [1,66,24,16,87,3]
num.splice(2,4,1024,2012,1025,1036)  // .splice(index frome where to remove,how many number to remove,numbers to add)
let valuesdeleted = num.splice(2,4,1024,2012,1025,1036)
console.log(num)
console.log(valuesdeleted)
*/

let num = [1,66,24,16,87,3]
let sliceitem = num.slice(2,3)
console.log(sliceitem)
