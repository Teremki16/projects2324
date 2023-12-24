let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

function triangle(x,y){
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x + 100, y + 100)
    ctx.lineTo(x - 100, y + 100)
    ctx.fill()
    ctx.closePath()
}

triangle(150, 0)
triangle(150, 70)
triangle(150, 140)

function circle(x,y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(150, 50)
circle(150, 140)
circle(150, 220)
circle(90, 100)
circle(210, 100)
circle(220, 180)
circle(80, 180)
circle(80, 250)
circle(220, 250)

function rectangle(x,y){
    ctx.beginPath()
    ctx.fillStyle = "brown"
    ctx.fillRect(x, y, 50, 100)
}

rectangle(125, 240)