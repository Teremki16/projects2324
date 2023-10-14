// let side = +prompt("Input box size")

function draw_box() {
    for (let i = 0; i < side; i++) {
        let str = ""
        for (let j = 0; j < side; j++) {
            str += "  *"
        }
        console.log(str)
    }
}

function draw_triangl() {
    for (let i = 1; i < side +1; i++) {
        let str = ""
        for (let j = 0; j < i; j++) {
            str += "  *"
        }
        console.log(str)
    }
}

// let km = +prompt("input distance in kilometers to get distanse in miles")

// function kmToMiles (km) {
//     return km * 0.6214
// }

// alert(kmToMiles(km)+ "miles")

// function getMonthDays(month){
//     if(month>0 && month<13){ 
//         if(month== 2){
//             return 28
//         }
//         else if(month==4 || month==6 || month==11 || month==9){
//             return 30
//         }else{
//             return 31
//         }    
//     }else{
//         alert("Ви дурачок")
//     }
// }

// let m= + prompt("Month?")
// alert(`In ${m} month ${getMonthDays(m)} days`)

// let a = +prompt("Висота?")
// let b = +prompt("Глибина?")
// let c = +prompt("Ширина?")

// function volum(a,b,c){
//     return a*b*c
// }

// alert(`Об'єм кімнати ${volum(a,b,c)} m3`)

let a = +prompt("number 1");
let operator = prompt("operator");
let b = +prompt("number 2");
function plus(a, b){
 return a + b;
}
function minus(a, b){
 return a - b;
}
function multiply(a, b){
 return a * b;
}
function divide(a, b){
    if(b != 0 ) {return a / b;}
    else {alert("error"); return -1}

}

switch(operator){
    case"+":
    alert(` ${a} ${operator} ${b}=${plus(a,b)}`)
    break;
    case"-":
    alert(` ${a} ${operator} ${b}=${minus(a,b)}`)
    break;
    case"*":
    alert(` ${a} ${operator} ${b}=${multiply(a,b)}`)
    break;
    case"/":
    alert(` ${a} ${operator} ${b}=${divide(a,b)}`)
    break;
    default:
        alert("Я таких не знаю")
}