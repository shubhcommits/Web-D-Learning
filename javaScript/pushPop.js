var output = [];
var count = 1;
function fizzBuzz(){
    if(count<=20){
    output.push(count);
    count++;
    console.log(output);
    fizzBuzz();
    }
}
fizzBuzz();
//we can use pop() to remove element from  an array