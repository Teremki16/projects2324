let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

let colorPicker = document.getElementById("color")
let renge = document.getElementById("renge")
let rangText = document.getElementById("rangeValue")

let lw = 10;
let color = "black";
let isMouseDovn = false;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function fillin() {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

colorPicker.addEventListener("change", (event) => {
    color = event.target.value
})


canvas.addEventListener("mousedown", () => {
    isMouseDovn = true;
    ctx.beginPath()
})


canvas.addEventListener("mouseup", () => {
    isMouseDovn = false;
    ctx.beginPath()
})

canvas.addEventListener("mousemove", (event) => {
    if (isMouseDovn) {
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.lineWidth = lw
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()

        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY,  lw / 2, 0, 2 * Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(event.clientX, event.clientY);
    }
});

renge.addEventListener("input", (event)=>{
    lw = event.target.value
    rangText.innerText = lw
});

document.querySelector("a").addEventListener("click", (event)=>{
let url = canvas.toDataURL().replace("image/png", "image/octet-stream");
document.querySelector("a").href = url
}); 