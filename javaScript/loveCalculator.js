//to calculate random percentage and give a message according to it
prompt("What is your name");
prompt("What is his name");
var n = Math.random();
    n = n*101;
    n = Math.floor(n);
    if(n>20&&n<=100){
     console.log( "Your love percentage is " + n +"% and you both love each other very most");
    }
    else{
        console.log("Your love percentage is " + n + "%");
    }