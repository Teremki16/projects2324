let canvases = document.querySelectorAll("canvas")
let ctx = []

for(let i = 0; i < canvases.length; i++){
    canvases[i].width = 700;
    canvases[i].height = 500;
    ctx.push(canvases[i].getContext("2d"))
}

ctx[0].moveTo(270, 200)
ctx[0].lineTo(350, 300)
ctx[0].lineTo(450, 150)
ctx[0].lineWidth = 5;
ctx[0].stroke()

ctx[1].beginPath()
ctx[1].arc(350, 250, 100, (20 * Math.PI) / 180, (330 * Math.PI) / 180);
ctx[1].lineTo(350, 250);
ctx[1].fillStyle = "Yellow"
ctx[1].lineWidth = 5
ctx[1].closePath()
ctx[1].fill()
ctx[1].stroke()