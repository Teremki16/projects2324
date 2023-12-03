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

scoreAudio.scr = "audio/score.mp3"
flyAudio.src = "audio/fly.mp3"

let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")


let Xpos = 10
let Ypos = 150

let g = 0.2
let velY = 0

let gap = 100

let pipe =[]
pipe[0] = {
    x: canvas.width,
    y:0,
}


function draw(){
    ctx.drawImage(back, 0, 0)
    ctx.drawImage(bird, Xpos, Ypos)

    velY += g
    Ypos += velY

if(Ypos + bird.height > canvas.height  - road.height){
    location.reload()
}

for(let i = 0; i < pipe.length; i++){
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
    pipe[i].x -=2

    if(pipe[i].x == 90){
        pipe.push({
            x: canvas.width,
            y: Math.floor(Math.random()*pipeUp.height) - pipeUp.height
        })
    }   
}





ctx.drawImage(road, 0, canvas.height - road.height)
}

setInterval(draw, 20)

function moveUp(){
    if(Ypos >= 0){
        velY = -5
        flyAudio.play()    
    }
    
}

canvas.addEventListener("click", moveUp)

