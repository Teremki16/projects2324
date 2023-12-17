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

// let scoreAudio = new Audio()
// let flyAudio = new Audio()

// scoreAudio.src = "audio/score.mp3"
// flyAudio.src = "audio/fly.mp3"

let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")


let Xpos = 10
let Ypos = 150

let g = 0.2
let velY = 0

let gap = 100

let gameScore = 0
let bestGameScore = 0
let gamePause = true

let pipe = []
pipe[0] = {
    x: canvas.width,
    y: 0,
}


function draw() {
    if (gamePause) {

        ctx.drawImage(back, 0, 0)
        ctx.drawImage(bird, Xpos, Ypos)

        velY += g
        Ypos += velY

        if (Ypos + bird.height > canvas.height - road.height) {
            reload()
        }

        for (let i = 0; i < pipe.length; i++) {
            ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
            pipe[i].x -= 2

            if (pipe[i].x == 90) {
                pipe.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
                })
            }
            if (
                Xpos + bird.width >= pipe[i].x &&
                Xpos <= pipe[i].x + pipeUp.width &&
                (
                    Ypos <= pipe[i].y + pipeUp.height ||
                    Ypos + bird.height >= pipeUp.height + pipe[i].y + gap
                )
            ) {
                reload()
            }
            if (pipe[i].x == 0) {
                // scoreAudio.play()
                gameScore++
            }

            document.querySelector(".score").innerHTML = `Score: ${gameScore}`
            document.querySelector(".bestscore").innerHTML = `Best Score: ${bestGameScore}`

        }





        ctx.drawImage(road, 0, canvas.height - road.height)
    }
}

setInterval(draw, 20)

function moveUp() {
    if (Ypos >= 0) {
        velY = -5
        // flyAudio.play()
    }
}


canvas.addEventListener("click", moveUp)
document.addEventListener("keydown", (e) => {
    if (e.code = "W") {
        moveUp()
    }
})

function reload() {
    if (gameScore > bestGameScore) {
        bestGameScore = gameScore
    }
    gameScore = 0
    Xpos = 10
    Ypos = 150
    velY = 0
    pipe = []
    pipe[0] = {
        x: canvas.width,
        y: 0,

    }
}

function pause() {
    gamePause = !gamePause
}

