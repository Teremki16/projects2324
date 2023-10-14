//let side = +prompt("input box size")

// function draw_box (){
//     for(let i =0; i < side ; i ++){
//        let str = ""
//        for(let j =0;j < side; j++){
//             str += "  *";
//         }
//         console.log(str)
//     }
// }

// function draw_triangle (){
//     for(let i =1; i < side +1 ; i ++){
//        let str = ""
//        for(let j =0;j < i; j++){
//             str += "  *";
//         }
//         console.log(str)
//     }
// }


// let km=+prompt("введшть км")
// function km_to_miles(kill){
//     return kill*0.6214
// }
// alert(km_to_miles(km)+ "mils")

// function get_month_days(month){
// if(month > 0 && month < 13) {
//     if(month ==2){
//         return 28
    
// }
// else if(month==4 || month==6 || month ==9 ||month == 11){
// return  30
// }
// else {
//     return 31
// }
// }
// else {
//     alert("користова амеоба")
// }

// }

//let m = +prompt ("What is month?")


let width= +prompt("ширина")
let height= +prompt("висота")
let depth= +prompt("ширина")
function v(w,h,d){
    return w*h*d
}
alert(`кімната з шириною ${width} м , висотою ${ height}м та глибиною ${depth} М , має обєм ${v(width,height,depth )}`)