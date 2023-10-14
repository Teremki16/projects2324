let a = +prompt("input first number")
let operator =prompt("input operator")
let b = +prompt("input second number")

function add (a, b){
    return a + b
}
function minus(a , b){
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
}
    case "-":
        alert(`${a} ${operator} ${b} = ${minus(a, b)}`)
        break;
    case "*":
        alert(`${a} ${operator} ${b} = ${multiply(a, b)}`)
        break;
    case "/":
        alert(`${a} ${operator} ${b} = ${devide(a, b)}`)
        break;
        default: alert("no such function")
        break;