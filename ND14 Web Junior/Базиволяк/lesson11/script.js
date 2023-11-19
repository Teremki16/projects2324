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