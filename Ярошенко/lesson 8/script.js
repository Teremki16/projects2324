/*let elem = document.getElementById('elem');
elem.stile.background = ''

function block1() {
    document.body.style.background = `rgb(${rnd(255)}, ${rnd(255)},${rnd(255)})`
}*/
function rnd(arg) {
    return Math.floor(Math.random() * arg);
}
function block1() {
        let elem = document.getElementById('block1');
        elem.style.color= `rgb(${rnd(255)}, ${rnd(255)},${rnd(255)})`
}