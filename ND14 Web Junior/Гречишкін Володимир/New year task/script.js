let canvas =document.querySelector("canvas")
let ctx=canvas.getContext("2d")
function triangle(x,y,width,height){
    ctx.beginPath()
    ctx.fillStyle="green"
    ctx.moveTo(x,y)
    ctx.lineTo(x+width,y+height)
    ctx.lineTo(x-width,y+height)
    ctx.fill()
    ctx.closePath
    
}

triangle(200,50,150,100)

function circle(x,y, radius,color){
    ctx.beginPath()
        ctx.fillStyle=color
        ctx.arc(x,y,radius,0,2*Math.PI)
        ctx.fill()
        ctx.closePath()

    
}
triangle(200,70,160,170)
triangle(200,160,180,170)
circle(265,120,20,"orange")
circle(135,120,20,"orange")
circle(265,210,20,"orange")
circle(135,210,20,"orange")
circle(265,290,20,"orange")
circle(135,290,20,"orange")
function stowbur(x,y,width,height){
    ctx.fillStyle="brown"
    ctx.fillRect(x,y,width,height)
    ctx.closePath()
}
stowbur(170,330,60,160)
