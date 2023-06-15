// array methods
let num = [1, 2, 3, 4, 5]
let b = num.toString()  // this change to string
console.log(b)
let c = num.join("_")
console.log(c)
let d= num.pop()
// num.pop()
// console.log(num,d)  // this will remove the last value from the array
// let e = num.push(6)  // add an element at end of the array
// console.log(num,e)
// let f= num.shift()   removes first element of array 
// console.log(num,f)
let f= num.unshift(0)   //add givenelent start to array 
console.log(num,f)
