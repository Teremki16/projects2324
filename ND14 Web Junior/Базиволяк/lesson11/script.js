let canvases = document.querySelectorAll("canvas")
let ctx = []

for (let i = 0; i < canvases.length; i++) {
    canvases[i].width = 700;
    canvases[i].height = 500;
    ctx.push(canvases[i].getContext("2d"))
}

ctx[0].moveTo(100, 20)
ctx[0].lineTo(100, 180)

ctx[0].lineWidth = 5
ctx[0].moveTo(20,100)
ctx[0].lineTo(180,100)

ctx[0].lineWidth = 5
ctx[0].stroke ()

ctx.strokeStyle = `#00ff00`
ctx.lineWidth = 3;

ctx[0].moveTo(-10000,300)
ctx[0].lineTo(100, 180)
ctx[0].stroke ()
ctx[0].moveTo(20,100)
ctx[0].lineTo(180, -100000)
ctx[0].stroke ()
ctx[0].moveTo(175,100)
ctx[0].lineTo(175, 190)
ctx[0].stroke ()
ctx[0].moveTo(100,20)
ctx[0].lineTo(190, 20)
ctx[0].stroke ()
ctx[1].beginPath();
ctx

ctx[2].strokeRect (215,115,266,266)
ctx[2].strokeRect (218,118,260,260)
ctx[2].fillStyle = "brown"
ctx[2].fillRect(220,120,256,256)
ctx[2].fillStyle = "black"

for(let i = 0; i < 8; i+=2){
    for(let j = 0; j < 8; j+=2){
 ctx[2].fillRect(220 + i * 32, 120 + j * 32 , 32 ,32)
 ctx[2].fillRect(252 + i * 32, 152 + j * 32 , 32 ,32)
    }
}