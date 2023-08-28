const sentence = 'The lazy fox  jumps over the dog'
// const word = "fox"
// console.log(sentence.includes(word))   // here .includes() will give the function is in the given senteance or not  
  console.log(sentence.startsWith('Th'))  // this check whether it start with the given word or letter or not
console.log(sentence.endsWith('og'))
console.log(sentence.toLowerCase())
// to print the required word of in a sentence
let str = "please give me 1000 Rs"
console.log(str.slice("please give me".length))
// to change the required character in string
console.log(str.replace("pl","al"))
