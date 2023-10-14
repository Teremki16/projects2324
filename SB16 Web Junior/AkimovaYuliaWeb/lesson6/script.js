// let a= +prompt("Write the number")
// function drawBox(){
// for(let i=0;i<a;i++){
//     let str=""
//     for(let j=0;j<a;j++){
//         str +=" *"
//     }
//     console.log(str)
// }
// }
// drawBox();

// let a= +prompt("Write the number")
// function drawtriangle(){
//     for(let i=0; i<a; i++){
//         let str =""
//         for(let j=0; j<i+1; j++){
//             str +=" *"
//         }
//         console.log(str)
//     }
// }
// drawtriangle()

// function sum(a,b){
//    return a+b
// }
// let a= sum(1,2)
// alert(a)

// function convertToMiles(km){
//     return km * 0.6214
// }
// let km=+prompt("km=")
// console.log(convertToMiles(km))

// function get_days(month){
//     if(month ==2){
//         return 28
//     }
//     else if((month==4)||(month==6)||(month==9)||(month==11)){ return 30}
//     else{return 30}
// }
// alert (get_days(+prompt("input number of month:")))

// function v(h,w,l){
//     return h*w*l
// }
// let h=+prompt("high")
// let w=+prompt("width")
// let l=+prompt("high")
// alert(v(h,w,l))

// let a=+prompt("input first number:")
// let o=prompt("operator:")
// let b=+prompt("input second number:")
// function mines(a,b){
//     return a-b
// }
// function plus(a,b){
//     return a+b
// }
// function dile(a,b){
//     if(b!=0){
//     return a/b}
//     else alert ("NaN")
// }
// function mnog(a,b){
//     return a*b
// }
// if(o=='-') console.log (mines(a,b))
// if(o=='+') console.log (plus(a,b))
// if(o=='/') console.log (dile(a,b))
// if(o=='*') console.log (mnog(a,b))

let a=+prompt("input first number:")
let o=prompt("operator:")
let b=+prompt("input second number:")
function mines(a,b){
    return a-b
}
function plus(a,b){
    return a+b
}
function dile(a,b){
    if(b!=0){
    return a/b}
    else alert ("NaN")
}
function mnog(a,b){
    return a*b}
switch(o){
    case "+":
    alert (a+" "+o+" "+b+" = "+plus(a,b))
    break;
    case "-":
    alert (a+" "+o+" "+b+" = "+mines(a,b))
    break;
    case "/":
    alert (`${a}${o}${b}=${dile(a,b)}`)
    break;
    case "*":
    alert (a+" "+o+" "+b+" = "+mnog(a,b))
    break;
    default: alert("No fuction")
    break
}
