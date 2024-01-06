let canvas = document.querySelector("canvas")
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

triangle(200, 50, 150, 100);
triangle(200, 120, 150, 100);
triangle(200, 190, 150, 100);

function circle(x, y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, 2* Math.PI)
    ctx.fill()  
}


circle(250, 190, 20, "orange")
circle(150, 190, 20, "orange")
circle(250, 120, 20, "orange")
circle(150, 120, 20, "orange")
circle(250, 260, 20, "orange")
circle(150, 260, 20, "orange")

ctx.fillStyle = "brown"
ctx.fillRect(170, 290, 60, 150)
