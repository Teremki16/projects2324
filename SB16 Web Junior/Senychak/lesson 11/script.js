let canvases = document.querySelectorAll("canvas");
let ctx = [];

for (let i = 0; i < canvases.length; i++) {
    canvases[i].width = 700;
    canvases[i].height = 500;
    ctx.push(canvases[i].getContext("2d"));
}

ctx[0].moveTo(200, 200);
ctx[0].lineTo(350, 400);
ctx[0].lineTo(400, 170);
ctx[0].lineWidth = 3;
ctx[0].stroke();

ctx[1].beginPath();
ctx[1].arc(350, 250, 100, (30 * Math.PI) / 180, (340 * Math.PI) / 180);
ctx[1].lineTo(350, 250);
ctx[1].fillStyle = "yellow";
ctx[1].lineWidth = 5;
ctx[1].closePath();
ctx[1].fill();
ctx[1].stroke();

ctx[1].beginPath()
ctx[1].fillStyle = "black"
ctx[1].arc(380, 200, 10, 0, 2 * Math.PI)
ctx[1].closePath();
ctx[1].fill();

ctx[2].strokeRect(215, 115, 266, 266)
ctx[2].strokeRect(218, 118, 260, 260)
ctx[2].fillStyle = "orange"
ctx[2].fillRect(220, 120, 256, 256);
ctx[2].fillStyle = "black"

for(let i = 0; i < 8; i += 2){
    for(let j = 0; j < 8; j += 2){
        ctx[2].fillRect(220 + i * 32, 120 + j * 32, 32, 32)
        ctx[2].fillRect(252 + i * 32, 152 + j * 32, 32, 32)
    }
}

ctx[3].fillStyle = "yellow"
ctx[3].beginPath()
ctx[3].arc(200, 200, 100, 0, 2 * Math.PI)
ctx[3].closePath()
ctx[3].fill()

ctx[3].beginPath()
ctx[3].arc(250, 50, 100, 0, 2 * Math.PI)
ctx[3].closePath()
ctx[3].fill()