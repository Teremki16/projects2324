let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function fillin(){
    ctx.fillStyle = "pink"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
 function clearAll(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
 }
























































