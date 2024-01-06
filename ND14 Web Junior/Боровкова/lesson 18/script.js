let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

function triangle(x,y, witdh, height) {
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(x,y)
    ctx.lineTo(x + witdh,y + height)
    ctx.lineTo(x - witdh,y + height)
    ctx.fill()
    ctx.closePath()
}

triangle (200, 50, 150, 100)

function circle(x, y, radius, color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x,y, radius, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
}

function tree(x, y, witdh, height){
    ctx.fillStyle = "brown"
    ctx.fillRect(190,260, 30, 100)
}

tree (200, 2200, 20, 20)

circle(250, 120, 20, "orange")
circle(150, 120, 20, "orange")
triangle (200, 120, 150, 100)
circle(250, 200, 20, "orange")
circle(150, 200, 20, "orange")
triangle (200, 190, 150, 100)
circle(250, 260, 20, "orange")
circle(150, 260, 20, "orange")
