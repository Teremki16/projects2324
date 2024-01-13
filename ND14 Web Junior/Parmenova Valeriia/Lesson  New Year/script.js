let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function triangle (x, y, width, height){
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(x,y)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x - width, y + height)
    ctx.fill()
    ctx.closePath()
}

triangle(200,50,120,100);
triangle(200,100,120,100);
triangle(200,150,120,100);

function circle(x,y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x,y,radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
}

circle(160,120,20,"orange")
circle(160,180,20,"orange")
circle(160,230,20,"orange")

circle(240,120,20,"orange")
circle(240,180,20,"orange")
circle(240,230,20,"orange")

function rect (x,y,width, height){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect 
    ctx.beginPath()
}