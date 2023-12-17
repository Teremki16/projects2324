let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

let bird = new Image()
let road = new Image()
let back = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

let fly_audio = new Audio()
let score_audio = new Audio()

bird.src = "img/bird.png"
road.src = "img/road.png"
back.src = "img/back.png"
pipeUp.src = "img/pipeUp.png"
pipeBottom.src = "img/pipeBottom.png"

fly_audio.src= "audio/fly.mp3"
score_audio.src= "audio/score.mp3"

let scoreText = document.querySelector(".score")
let bestScoreText = document.querySelector(".bestScore")

let score = 0;
let bestScore = 0;

let gamePause = false

let Xpos = 10;
let Ypos = 150;
let g= 0.2;
let velY= 0;

let gap = 100

let pipe = []
pipe[0]={
    x: canvas.width,
    y: 0,
}

function draw(){
    if(!gamePause){

    
    ctx.drawImage(back, 0, 0)
    ctx.drawImage(bird, Xpos, Ypos)

    velY += g
    Ypos += velY

    if(Ypos + bird.height > canvas.height - road.height){
        reload()
    }

    for(let i=0; i<pipe.length; i++){
        if(pipe[i].x + pipeUp.width<0){
            pipe.shift();
        }

        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x -= 2

        if(pipe[i].x==90){
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random()* pipeUp.height) - pipeUp.height
            })
        }

        if(Xpos + bird.width  >= pipe[i].x &&
            Xpos<= pipe[i].x + pipeUp.width && 
            (
                Ypos <= pipe[i].y + pipeUp.height ||
                Ypos + bird.height >= pipe[i].y +pipeUp.height + gap
            )){
                reload()
            }
            if(pipe[i].x + pipeUp.width <0){
                score_audio.play()
                score++;
            }
    }
    scoreText.innerHTML = "Score: " + score
    bestScoreText.innerHTML = "Best Score: " + bestScore
    ctx.drawImage(road, 0, canvas.height - road.height)
}
}
setInterval(draw, 20)


function moveUp(){
    velY= -5
}

canvas.addEventListener("click", moveUp)

function reload() {
    if(score > bestScore) {
        bestScore = score
    }
    Xpos = 10;
    Ypos = 150;
    velY = 0;
    score = 0;
    pipe = []
    pipe[0] = {
        x: canvas.width,
        y: 0,
    }

}

function pause(){
    gamePause = !gamePause
}

document.addEventListener("keydown", (e)=>{
    if(e.code =="ArrowUp") moveUp()
})