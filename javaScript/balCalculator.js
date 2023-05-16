function balCalculator(weight,height){
    var bai = weight/(height*height);
    // return bai;
    return Math.round(bai);
}
var bml = balCalculator(65,1.8);
console.log(bml);