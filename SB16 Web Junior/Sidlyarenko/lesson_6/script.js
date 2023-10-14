// function drawBox(){
//     for(let i = 0; i < 4; i++){
//         let str = ''
//         for(let j =0; j < 4; j++){
//             str += " *";
//         }
//         console.log(str)
//     }
// }

// let side = 5

// function drawTriangle() {
//     for(let i = 0; i < side; i++){
//         let str = ""
//         for(let j = 0; j < i + 1; j ++){
//             str += "  *"
//         }
//         console.log(str)
//     }
// }



// function corvert_to_miles(km){
//     return km*0.6214
// }
// let km =+prompt("km=")
// alert(corvert_to_miles(km))

// function getDays(month){
//     if(month==2) {return 2}
// else if (month==4||month==6||month==9||month==11){
//     return 30   
// }
// else{
//     return 31
// }

// function v(width, heigth, depth){
//     return width * heigth * depth
// }
// let width = +prompt("черкани ширену")
// let heigth = +prompt(" черкани висоту")
// let depth = +prompt(" черкани глубину")
// alert(`My room with width ${width} m, heidth ${heigth} m,  depth ${depth} m, устал писать на англ має об'єм ${v(width, heigth, depth)} м3`)

let a = +prompt("input first number")
let b = prompt("input operator")
let c = +prompt("input second number")

function dodavanya(a, c){
    return a + c
}

function minus(a, c){
    return a - c
}

function mnoshennya(a, c){
    return a * c
}

function dilenya(a, c){
    if(a, c== 0 ){
        return 0
    }else {
        return a / c
    }
}

switch(b){
    case "+":
        alert(`{${a} ${b} ${c}} ${c} = ${add(a, c)}`)
        break;
    case "-":
        alert(`{${a} ${b} ${c}} ${c} = ${minus(a, c)}`)
        break;
    case "*":
        alert(`{${a} ${b} ${c}} ${c} = ${multiply(a, c)}`)
        break;
    case "/":
        alert(`{${a} ${b} ${c}} ${c} = ${devide(a, c)}`)
        break;
}