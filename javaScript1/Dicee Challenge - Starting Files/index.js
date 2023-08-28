var randomnum1 = Math.floor(Math.random()*6)+1;
var randomdice = "images/dice"+randomnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdice);
var randomnum2 = Math.floor(Math.random()*6)+1;
var randomdice2 = "images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}