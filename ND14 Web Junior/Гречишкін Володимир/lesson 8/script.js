// let wrapper = document.getElementsByClassName("wrapper")[0]

// wrapper.style.backgroundColor ="red"

// let h1 = document.getElementById("a")

// h1.style.color = "blue"

// let header = document.querySelector("header")

// header.style.fontSize= "30px"

function block1(){
    let elem = document.querySelector(".block1")
    elem.style.color = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`
}

function rnd(max){
    return Math.floor(Math.random() * max);
}
function block2(){
    let elem = document.querySelector(".block2")
    elem.style.background = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`
}