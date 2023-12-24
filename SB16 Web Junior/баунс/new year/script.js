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
triangle(150, 80)
triangle(150, 165)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(150, 0)
circle(100, 70)
circle(200, 70)
circle(180, 150)
circle(120, 150)
circle(120, 230)
circle(190, 230)

function rect(x, y){
    ctx.beginPath
    ctx.fillStyle = "brown"
    ctx.fillRect(x, y, 50, 150)
    ctx.closePath
}

rect(125, 265)