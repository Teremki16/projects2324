// function drawBox(){
//     for(let i = 0; i < 4; i++){
//         for(let j = 0; j < 4; j++){
//             str += " *"
//         }
//         console.log(str)
//     }
// }

// let side = 5

// function drawTriangle(){
//     for(let i = 0; i < side; i++){
//         let str = ""
//         for(let j = 0; j < i + 1; j++){
//             str += " *"
//         } 
//         console.log(str)
//     }
// }

// drawTriangle()

// function convert_to_miles(km){
//     return km*0.6214
// }

// let km = +prompt("km=")
// alert(convert_to_miles(km))

function getDays (month){
    if (month==2) {returt 28}
    else if (month==4||month==6||month==9||month==11){
        return 30
    }
    else{
        return 31
    }
}
alert (getDays(+prompt("imput number")))