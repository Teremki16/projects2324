

// let home1 = +prompt("цукерки на базу")
// console.log(`перший дав ${home1} цукерок`)
// let home2 = +prompt("ти також")
// console.log(`другий дав ${home2} цукерок`)
// let home3 = +prompt("давай цукерки")
// console.log(`третій дав ${home3} цукерок`)
// let q = 5

// let i = home1 + home2 + home3

// if (home1 < q && home2 < q && home3 < q){
//     console.log(`всі жмоти`)
// }


// if (home1 < home2 && home1 < home3){
//     console.log(`жмот в 1 будинку`)
// }

// if (home2 < home1 && home2 < home3){
//     console.log(`жмот в 2 будинку`)
// }

// if (home3 < home2 && home3 < home1){
//     console.log(`жмот в 3 будинку`)
// }

// console.log(`привид забрав ${i * 0.13}`)

let block = document.getElementById("block")

console.dir(block)

function rnd(max){
    return Math.floor(Math.random() * 255)
}


function color(){
    document.body.style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}

alert(document.body.innerHTML)
block.innerHTML = "<h1>Hello wrold!</h1>"

// alert(block.outerHTML)

block.hidden = true

// setInterval(()=>{
//     let elem = document.querySelector(".blink")
//     elem.hidden = !elem.hidden
// }, 500);

function send(){
    let val = document.querySelector("input").value
    document.body.style.background = val
}