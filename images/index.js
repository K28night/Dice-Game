
var a=Math.floor(Math.random()*6)+1;
var x="./images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",x);

var b=Math.floor(Math.random()*6)+1;
var y="./images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",y);
if(x===y){
    document.querySelector("h1").innerHTML="Drow";
}
else if(b>a){
    document.querySelector("h1").innerHTML="Player2 won";
}
else
    document.querySelector("h1").innerHTML="Player1 won";
