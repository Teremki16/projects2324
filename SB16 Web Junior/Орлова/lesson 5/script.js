// let number = +prompt("Put yur number")
// let i = 1
// while(number > 0){
//     let RandomNumber = Math.floor(Math.random()*100)
//     console.log(`Random Number ${1}: ${RandomNumber}`)
//     i++
//     number--;
// }

// let max = 0
// let number;

// do{
//     number = +prompt("put your number")
//     if(number > max){
//         max = number
//     }
// }while(number != 0)
// alert(`the biggest number is: ${max}`)

// let n = +prompt("put your number")
// let sum = 0

// for(let i = n; i > 0; i--){
//     if(n % i == 0){
//         sum += i
//     }
// }

// alert(`sum: ${sum}`)

let a = +prompt("input your a number")
let b = +prompt("input your b number")
let summ = 0;
for (let i = a; i < b; i++){
    let t = (i**3) %10 
    if(t == 4 || t = 9) summ++;
}
alert(`summ ${summ}`)