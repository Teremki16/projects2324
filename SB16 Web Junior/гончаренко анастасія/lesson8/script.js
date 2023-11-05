// for(let i = 0; i < document.body.childNodes.length; i++){
//     consolelog(document.body. childNodes [i]
//         )
// }

function block1() {
    let elem = document.querySelector(".block1")
    elem.style.color = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`

}

function rnd(max) {
    return Math.floor(Math.random() * max);
}

function block2() {
    let elem = document.querySelector(".block2")
    elem.style.borderRadius = "25%"
}
function block3() {
    let elem = document.body
    elem.style.background = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
}

function block4() {
    let elem = document.querySelector(".block4")
    elem.style.background = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
}
function block5() {
    let elem = document.querySelector(".block5")
    elem.style.fontFamily= `cyrsive`;
}