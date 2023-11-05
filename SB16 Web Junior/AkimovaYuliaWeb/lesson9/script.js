let block = document.getElementById("block")
console.dir(block)
function changeColour(){
    document.body.style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}

function rnd(){
    return Math.floor(Math.random()*255)
}
// alert(document.body.innerHTML)

block.innerHTML ="<h1>Hello world!</h1>"

// alert(block.outerHTML)

// block.hidden=true

// setInterval(()=>{
// let elem=document.querySelector(".blink")
// elem.hidden = !elem.hidden
// },1);

function send(){
    let val = document.querySelector("input").value
    document.body.style.background = val
}