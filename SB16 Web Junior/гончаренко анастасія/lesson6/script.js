function drawBox() {
    for (let i = 0; i < 4; i++) {
        let str = ""
        for (let j = 0; j < 4; j++) {
            str += " *"
        }
        console.log(str)
    }
}
let side = 5
function drawTriangle() {
    for (let i = 0; i < side; i++) {
        let str = ""
        for (let j = 0; j < i + 1; j++) {
            str += "  *"
        }
        console.log(str)
    }
}

// drawTriangle()


function getDays(month) {
    if (month == 2) {
        return 28
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30
    } else {
        return 31

    }
}
// alert(getDays(+prompt("imput number of month:")))

// function v(width, height, depth){
//     return width * height * depth

// }
// let width = +prompt("Enter width")
// let height = +prompt("Enter height")
// let depth = +prompt("Enter depth")
// alert(`кімната з шириною м, висотою м, глибиною м, має об'єм ${v(width, height, depth)} м3` )


let a = prompt("imput first number")
let operator = prompt("imput operator")
let b = prompt("imput second number")

function minus(a, b) {
    return a - b
}
function add(a, b) {
    return a + b
}
function muitiply(a, b) {
    return a * b
}
function devide(a, b) {
    if (b == 0) {
        return 0
    } else {
        return a / b
    }
}

switch(operator){
    case "+":
        alert(`${a} ${operator} ${b} = ${add(a, b)}`)
        break; 
    case "-":
        alert(`${a} ${operator} ${b} = ${minus(a, b)}`)
        break; 
    case "*":
        alert(`${a} ${operator} ${b} = ${muitiply(a, b)}`)
        break; 
    case "/":
        alert(`${a} ${operator} ${b} = ${devide(a, b)}`)
        break; 
       
}