var timer = 60;
var score = 0;
var hrnn = 0;
function getNewHit(){
    hrnn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hrnn;
}
function makeBubble(){
    var clutter = "";
    for(var i=1 ; i<=108 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>` ;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
    var timerint = setInterval(function(){if(timer>0){timer--;
    document.querySelector("#timerval").textContent = timer;}
else{
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML = "";
}},1000);
}
function increaseScore(){
    score +=  10;
    document.querySelector("#scoreVal").textContent = score ; 
}

document.querySelector("#pbtm").addEventListener("click" , function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum == hrnn ){
        
        increaseScore();
        makeBubble();
        getNewHit();

    }
});

getNewHit();
runTimer(); 
makeBubble();

