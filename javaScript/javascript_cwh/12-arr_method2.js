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
let compare = (a,b)=>{
    return a-b
  }
  let num = [1,66,24,16,87,3]
  num.sort(compare)
  console.log(num)
  num.reverse()
  console.log(num)
  
  