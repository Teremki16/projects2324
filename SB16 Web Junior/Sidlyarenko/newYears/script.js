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

circle(50, 100)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(250, 100)

function triangle(x, y){
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 100, y + 100)
    ctx.lineTo(x - 100, y + 100)
    ctx.fill()
    ctx.closePath()
}

triangle(150, 80)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(50, 200)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(250, 200)

function triangle(x, y){
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 100, y + 100)
    ctx.lineTo(x - 100, y + 100)
    ctx.fill()
    ctx.closePath()
}

triangle(150, 160)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(50, 270)

function circle(x, y){
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(250, 270)

function fillRect(x, y, width, height){
    ctx.fillStyle = "brown"
    ctx.fillRect(120, 260, 50, 150);
     
}

fillRect(370, 370)