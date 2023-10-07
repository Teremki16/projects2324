// let number = +prompt("put your number chmo vanuche")
// let i = 1
// while(number > 0){
//     let randomNumber = Math.floor(Math.random() * 100)
//     console.log(`Random number ${i}:  ${randomNumber}`)
//     i++;
//     number--;
// }

// let max = 0
// let number;

// do{
//   number = +prompt("put your number chmo nedokochene")
//   if(number > max){
//     max = number 
//   }
// }while(number != 0)
// alert(`The biggest number is: ${max}`)


// let n = +prompt("put you number chmo nedociklene")
// let sum = 0

// for(let i = n; i > 0; i--){
//     if(n % i == 0){
//         sum += i
//     }
// }

// alert(`sum: ${sum}`)


let a = +prompt("put a number")
let b = +prompt("put b number")
let summ = 0
for(let i = a; i < b; i++){
    let t = (i ** 3) % 10
    if(t == 4 || t == 9) summ++
}
alert(`count: ${summ}`)

