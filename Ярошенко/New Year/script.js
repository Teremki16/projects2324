let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function triangle(x,y, width, height){
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(x,y)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x - width, y + height)
    ctx.fill()
    ctx.closePath()
}


triangle(200, 50, 150, 100);
triangle(200, 130, 150, 100);
triangle(200, 220, 150, 100);

function circle(x, y, radius, color){
    ctx.beginPath()
    ctx.fillStyle=color
    ctx.arc(x, y, radius, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(200, 44, 30, "orange")
circle(350, 165, 15, "orange")
circle(350, 250, 20, "orange")
circle(45, 250, 20, "orange")
circle(45, 160, 15, "orange")
circle(45, 345, 25, "orange")
circle(350, 345, 25, "orange")