let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

function triangle(x, y){
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 100, y + 100)
    ctx.lineTo(x - 100, y + 100)
    ctx.fill()
    ctx.closePath()
}

triangle(150, 0)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(150, 0)