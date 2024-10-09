var n=Math.random();
n=Math.floor(n*6)+1;
var randomDiceImage="dice"+n+".png";
var randomImageSource="./images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var n2=Math.random();
n2=Math.floor(n2*6)+1;
var randomDiceImage2="dice"+n2+".png";
var randomImageSource2="./images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(n>n2){
    document.querySelector("h1").innerHTML="Player 1 win";

}
else if(n2>n){
    document.querySelector("h1").innerHTML="player 2 win";

}
else{
  document.querySelector("h1").innerHTML="draw";
}