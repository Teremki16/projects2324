let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function triangle (x,y, width, height) {
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(x,y)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x - width, y + height)
    ctx.fill()
    ctx.closePath()
}

triangle(200, 50, 150, 120);
triangle(200, 120, 150, 120);
triangle(200, 190, 150, 120);

function circle(x,y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(150, 130, 30, "orange")
circle(250, 130, 30, "orange")
circle(150, 200, 30, "orange")
circle(250, 200, 30, "orange")
circle(150, 270, 30, "orange")
circle(250, 270, 30, "orange")

function rect(x, y, width, height){
    ctx.beginPath()
    ctx.fillStyle = "brown"
    ctx.fillRect(x, y, width, height)
    ctx.beginPath()
}

rect(180,310, 50, 140)