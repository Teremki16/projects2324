let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function triangle(x, y, width, height) {
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(x, y)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x - width, y + height)
    ctx.fill()
    ctx.closePath()
}

triangle(200, 50);
