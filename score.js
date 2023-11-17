// Iteration 8: Making scoreboard functional

var score=document.getElementById('score-board')
var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams)
console.log(window.location.search)
var show = urlParams.get("score");
var playagain = document.getElementById('play-again-button')
playagain.addEventListener('click',()=>{
    location.href="index.html"
})
score.innerText=show