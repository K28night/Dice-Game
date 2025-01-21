const button1 = document.getElementById('btn1');
let a=0;
let b=0;
    // Add a click event listener to the button
    button1.addEventListener('click', function () {
 a=Math.floor(Math.random()*6)+1;
let x="./images/dice"+a+".png";

document.querySelectorAll("img")[0].setAttribute("src",x);
});
const button2=document.getElementById('btn2');
button2.addEventListener('click', function (){
     b=Math.floor(Math.random()*6)+1;
    let y="./images/dice"+b+".png";
    document.querySelectorAll("img")[1].setAttribute("src",y);
    
    if(a===b){
        document.querySelector("h1").innerHTML="Drow";
    }
    else if(b>a){
        document.querySelector("h1").innerHTML="Player2 won";
    }
    else
        document.querySelector("h1").innerHTML="Player1 won";

});
