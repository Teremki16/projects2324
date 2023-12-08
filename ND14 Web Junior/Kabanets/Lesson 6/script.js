//let side = +prompt ("in put box size");

// function draw_box(){
//     for(let i = 0; i < side; i++){
//         let str = ""
//         for(let j = 0; j < side; j++){
//            str += "  *";
//         }
//         console.log(str)
//     }
// }

// function draw_triangle(){
//     for(let i = 1; i < side + 1; i++){
//         let str = ""
//         for(let j = 0; j < i; j++){
//            str += "  *";
//         }
//         console.log(str)
//     }
// }

// let km = +prompt("Введіть км")

// function km_to_miles(kill){
//     return kill*0.6214
// }

// alert(km_to_miles(km))

// let width = +prompt ("ширина")
// let height = +prompt ("висота")
// let depth= +prompt ("глибина")

// function v(w, h, d){
//     return w*h*d
// }

// alert(`кімната з шириною ${width} м, висотою ${height} м та глибиною ${depth} м має об'єм ${v(width, height, depth)} м3`);

let a = +prompt("first number")
let operator = prompt("symvol")
let b = +prompt("second number")

function plus(a, b){
    return a+b
}
function minus(a, b){
    return a-b
}
function multi(a, b){
    return a*b
}
function devide(a, b){
    if(b!=0){
      return a/b;
    } else{
        return 0;
    }
}

switch(operator){
    case "+":
        alert(` ${a} ${operator} ${b} = ${plus(a, b)}`)
        break
    case "-":
        alert(` ${a} ${operator} ${b} = ${minus(a, b)}`)
        break
    case "*":
        alert(` ${a} ${operator} ${b} = ${multi(a, b)}`)
        break
    case "/":
        alert(` ${a} ${operator} ${b} = ${devide(a, b)}`)
}