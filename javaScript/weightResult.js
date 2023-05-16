// this is a code whic will give particular message according to the weight enter
function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
if(bmi<18.5){
    return "Your BMI is "+ bmi +", so you are underweight."
}
else if(bmi>=18.5&&bmi<=24.5){
       return "Your BMI is "+ bmi +", so you have a normal weight." 
}
else{
        return "Your BMI is "+ bmi +", so you are overweight."
}
}
bmiCalculator(60,1.7);