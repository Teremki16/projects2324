let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

function triangle(x, y , width, height){
ctx.beginPath()
ctx.fillStyle = "green"
ctx.moveTo(x, y)
ctx.lineTo(x + width, y + height)
ctx.lineTo(x - width, y + height)
ctx.fill()
ctx.closePath()
}

triangle(200, 50, 150, 130)
triangle(200, 120, 150, 130)
triangle(200, 190, 150, 130)

function circle(x, y , radius, color,){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()

}

circle(150, 140, 27, "yellow")
circle(250, 140, 27, "yellow")
circle(150, 210, 27, "yellow")
circle(250, 210, 27, "yellow")
circle(150, 280, 27, "yellow")
circle(250, 280, 27, "yellow")

function rect(x, y, width, height){
    ctx.beginPath()
    ctx.fillStyle = "brown"
    ctx.fillRect(x, y, width, height)
    ctx.closePath()
}

rect(180, 320, 50, 140)