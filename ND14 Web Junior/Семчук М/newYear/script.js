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

triangle(200, 50, 150, 100);

function circle(x, y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, 2* Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(200, 50, 20, "orange")

triangle(200, 125, 170, 100);

triangle(200, 200, 200, 100);

triangle(200, 275, 230, 100);

triangle(200, 350, 270, 100);

circle(250, 120, 22, "orange")

circle(150, 120, 22, "red")

circle(120, 200, 23, "orange")

circle(200, 200, 23, "red")

circle(280, 200, 23, "orange")

circle(300, 278, 27, "red")

circle(200, 278, 27, "orange")

circle(100, 278, 27, "red")

circle(50, 356, 27, "red")

circle(125, 356, 27, "orange")

circle(200, 356, 27, "red")

circle(275, 356, 27, "orange")

circle(350, 356, 27, "red")

circle(400, 424, 27, "red")

circle(325, 424, 27, "orange")

circle(250, 424, 27, "red")

circle(170, 424, 27, "orange")

circle(90, 424, 27, "red")

circle(10, 424, 27, "orange")