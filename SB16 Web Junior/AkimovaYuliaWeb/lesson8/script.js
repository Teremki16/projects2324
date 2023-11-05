// for(let i=0;i<document.body.childNodes.length;i++){
//     console.log(document.body.childNodes[i])
// }

// let elem=document.getElementsByClassName("wrapper")[0]

// elem.style.background="red"

// let text=document.getElementById("a")

// text.style.color="blue"

// let header=document.querySelector("header")//#a//.wrapper

// header.style.fontSize="50px"
function block1(){
    let elem = document.querySelector(".block1")
    elem.style.color = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
}

function rnd(max){
    return Math.floor(Math.random()*max);
}

function block4(){
    let elem = document.querySelector(".block4")
    elem.style.background = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
}
function block2(){
    let elem = document.querySelector(".block2")
    elem.style.borderRadius = "25%"
}
function block3(){
    let elem = document.body
    elem.style.background = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
}
function block5(){
    let elem = document.querySelector(".block5")
    elem.style.fontFamily = 'cursive'
}
