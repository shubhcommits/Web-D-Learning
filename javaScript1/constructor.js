function BellyBoy (name,age,workExperience,languages){
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.languages = languages;
}
var BellyBoy1 = new BellyBoy("Rakesh",30,22,["English","Hindi","French"]);
var BellyBoy2 = new BellyBoy("John",25,9,["English","German"]);
// this will give output as 
// BellyBoy1;
// BellyBoy {name: 'Rakesh', age: 30, workExperience: 22, languages: Array(3)}
// age
// : 
// 30
// languages
// : 
// (3) ['English', 'Hindi', 'French']
// name
// : 
// "Rakesh"
// workExperience
// : 
// 22
// [[Prototype]]
// : 
// Object
// BellyBoy2;
// BellyBoy {name: 'John', age: 25, workExperience: 9, languages: Array(2)}
// age
// : 
// 25
// languages
// : 
// (2) ['English', 'German']
// name
// : 
// "John"
// workExperience
// : 
// 9
