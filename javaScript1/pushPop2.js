var output = [];
var count = 1;
function fizzBuzz(){
    if(count<=15){
    if(count%3===0 && count%5===0){
        output.push("Fizzbuzz");
    }
    else if(count%3===0){
        output.push("fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
    fizzBuzz();
}
}
fizzBuzz();
