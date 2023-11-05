let block = document.getElementById("block")
console.dir(block)
function changeBack(){
    document.body.style.background = `rgb(${rnd()}, ${rnd()}, ${rnd()})`
}

function rnd(){
    return (Math.random() * 255)
}

alert(document.body.innerHTML);

block.innerHTML = "<h1>Hello world!</h1>"

alert(block.outerHTML)


function send(){
    let val = document.querySelector("input").value
    document.body.style.background = val;
}