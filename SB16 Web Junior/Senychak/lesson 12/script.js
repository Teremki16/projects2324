let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

let colorPicker = document.getElementById("color")
let range = document.getElementById("range")
let rangeText = document.getElementById("rangeValue")

let lw =  10;
let color = "black"
let isMouseDown = false;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function fillin(){
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function clearAll(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}