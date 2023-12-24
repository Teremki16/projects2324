let canvas=document.querySelector("canvas")
let ctx=canvas.getContext("2d")
ctx.fillStyle="brown"
ctx.fillRect(225,240, 50, 400)
function triangle(x,y){
    ctx.fillStyle="green"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+100,y+100)
    ctx.lineTo(x-100,y+100)
    ctx.lineTo(x,y)
    ctx.fill()
    ctx.closePath()
}

function circle(x,y){
    ctx.fillStyle="red"
    ctx.beginPath()
    ctx.arc(x,y, 20, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
}
triangle(250,100)
triangle(250,170)
triangle(250, 230)
circle(155,218)
circle(350,218)
circle(155,288)
circle(350,288)
circle(155,348)
circle(350,348)
