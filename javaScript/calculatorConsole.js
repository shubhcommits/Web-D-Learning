function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num1>num2){
        return num1/num2;
    }else{
        return num2/num1;
    }
}
function subtract(num1,num2){
    if(num1>num2){
        return num1-num2;
    }else{
        return num2-num1;
    }
}
function calculator(num1,num2,operator){
    return operator(num1,num2);
}
calculator(5,10,divide);
//this will give value 2