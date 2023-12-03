let bird = new Image()
let back = new Image()
let pipeBottom = new Image()
let pipeUp = new Image()
let road = new Image()

bird.src = "img/bird.png"
back.src = "img/back.png"
pipeBottom.src = "img/pipeBottom.png"
pipeUp.src = "img/pipeUp.png"
road.src = "img/road.png"

let scoreAudio = new Audio()
let flyAudio = new Audio()

scoreAudio.src = "audio/score.mp3"
flyAudio = "audio/fly.mp3"

let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

let Xpos = 10
let Ypos = 150

let g = 0.2
let velY = 0


function draw(){
    ctx.drawImage(back, 0, 0);
    ctx.drawImage(bird, Xpos, Ypos);

}

setInterval(draw, 20);