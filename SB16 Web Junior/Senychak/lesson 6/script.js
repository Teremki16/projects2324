function drawBox() {
    for (let i = 0; i < 4; i++) {
        let str = "";
        for (let j = 0; j < 4; j++) {
            str += " *";
        }
        console.log(str);
    }
}

let side = 5;

function drawTriangle() {
    for (let i = 0; i < side; i++) {
        let str = "";
        for (let j = 0; j < i + 1; j++) {
            str += "  *";
        }
        console.log(str);
    }
}

// function corvert_to_miles(km) {
//     return km * 0.6214;
// }
// let km = +prompt("km=");
// alert(corvert_to_miles(km));

const getDays = (month) => {
    if (month < 1 || month > 12) {
        atert("You fool");
    } else {
        if (month == 2) {
            return 28;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            return 30;
        } else {
            return 31;
        }
    }
}
// alert(getDays(+prompt("input number of month(1 to 12): ")));


// function v(width, height, depth){
//     return width * height * depth
// }
// let width = +prompt("Enter width")
// let height = +prompt("Enter height")
// let depth = +prompt("Enter depth")
// alert(`Кімната з шириною ${width} м, висотою м ${height} , глибиною м ${depth}, має об'єм ${v(width, height, depth)} м3`)

let a = +prompt("input first number")
let operator = prompt("input operator")
let b = +prompt("input second number")

function add(a, b){
    return a + b
}
function minus(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function devide(a, b){
    if (b == 0){
        return 0
    }else {
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
        alert(`${a} ${operator} ${b} = ${multiply(a, b)}`)
        break;
    case "/":
        alert(`${a} ${operator} ${b} = ${devide(a, b)}`)
        break;
        default: alert("No such function");
             break;
}