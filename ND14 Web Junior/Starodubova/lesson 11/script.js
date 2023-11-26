let canvases = document.querySelectorAll("canvas")
let ctx = []

for(let i = 0; i < canvases.length; i++){
    canvases[i].width = 700;
    canvases[i].height = 500;
    ctx.push(canvases[i].getContext("2d"))
}
ctx[0].moveTo(270,200)
ctx[0].lineTo(350,300)
ctx[0].lineTo(450,150)
ctx[0].lineWidth = 5
ctx[0].stroke()

ctx[1].beginPath()
ctx[1].arc(350, 250, 100, (20* Math.PI) / 180,(330* Math.PI) / 180)
ctx[1].lineTo(350, 250)
ctx[1].fillStyle = "yellow"
ctx[1].lineWidth = 5

ctx[1].closePath()
ctx[1].fill()
ctx[1].stroke()

ctx[1].beginPath()
ctx[1].fillStyle = "black"
ctx[1].arc(370, 200, 7, 0,2* Math.PI)
ctx[1].closePath()
ctx[1].fill()

ctx[2].beginPath()
ctx[2].moveTo(250,200)
ctx[2].lineTo(350, 300)
ctx[2].lineTo(450, 200)
ctx[2].moveTo(250,200)
ctx[2].arc(300, 200, 50, Math.PI ,2* Math.PI)
ctx[2].moveTo(350,200)
ctx[2].arc(400, 200, 50, Math.PI ,2* Math.PI)
ctx[2].fillStyle = "purple"
ctx[2].lineWidth = 5
ctx[2].closePath()
ctx[2].stroke()
ctx[2].fill()


ctx[3].strokeRect(215, 115, 266, 266)
ctx[3].strokeRect(218, 118, 260, 260)
ctx[3].fillStyle = "brown"
ctx[3].fillRect(220, 120, 256, 256)
ctx[3].fillStyle = "orange"

for(let i = 0; i<8; i+=2){
    for(let j = 0; j<8; j+=2){
        ctx[3].fillRect(220+ i*32,120+j*32, 32, 32)
        ctx[3].fillRect(252+ i*32,152+j*32, 32, 32)
    }
}