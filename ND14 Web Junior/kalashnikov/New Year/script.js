let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
 
function triangle(x, y, width, height) {
    ctx.beginPaath()
    ctx.fillSTyle = "green"
    ctx.moveTo(x, y)
    ctx.lineTo(x, y)
    ctx.lineTo(x + innerWidth, y + height)
    ctx.lineTo(x - width, y + height)
    ctx.fill()
    ctx.closePath()
}

triangle(200, 50, 150, 100)

function circle(x,y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(200, 50, 20, "orange")