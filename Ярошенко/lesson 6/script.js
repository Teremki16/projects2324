/*let side= +prompt ("input triangle size")

function draw_box(){
    for(let i= 0; i< side; i++){
        let str= ""
        for(let j= 0; j< side; j++){
            str += " *"
        }
        console.log(str)
    }
}
draw_box();*/

/*function draw_triangle(){
    for(let i= 1; i< side + 1; i++){
        let str= ""
        for(let j= 0; j< i; j++){
            str += " *"
        }
        console.log(str)
    }
}

let km=+prompt("Введіть кілометри для переведення")
function km_to_miles(kill){
    return kill*0.6214
}
alert (km_to_miles(km))

function get_month_days(month) {
    if (month > 0 && month < 13) {
        if (month == 2) {
            return 28
        }
        else if (month == 4 || month == 6 || month == 11) {
            return 30
        }
        else {
            return 31
        }
    }
    else {
        alert(" you are so dawn)")
    }
}
let m = +prompt("Який місяць?")

alert(`В ${m} місяці ${get_month_days(m)} днів`)*/

let a = +prompt("number 1")

let operator = prompt("operator")

let b =+prompt("Number 2")
function plus(a, b){
    return a+b
}
function minus(a, b){
    return a-b
}
function devide(a, b){
    if (b!=0){
    return a/b 
} else {
    return 0
}
}
function multi(a, b){
    return a*b
}
switch(operator){
    case "+":
        alert(`${a} ${operator} ${b} = ${plus(a, b)}`) 
        break; 
    case "-":
        alert(`${a} ${operator} ${b} = ${minus(a, b)}`) 
        break;
    case "*":
        alert(`${a} ${operator} ${b} = ${devide(a, b)}`) 
        break;
    case "/":
         alert(`${a} ${operator} ${b} = ${multi(a, b)}`) 
         break;}
    