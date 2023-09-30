// let number1 = +prompt("введіть перше число")
// console.log(`перше число: ${number1}`)

// let number2 = +prompt("введіть друге число")
// console.log(`друге число: ${number2}`)

// let number3 = +prompt("введіть третє число")
// console.log(`третє число: ${number3}`)

// let summ = 0;

// if(number1 > 0){
//     summ += number1
// }
// if(number2 > 0){
//     summ += number2
// }
// if(number3 > 0){
//     summ += number3
// }

// console.log(`сума позтивнх чисел ${summ}`)

// let number = +prompt("введи своє число")

// let one = number % 10; 

// let ten =Math.floor((number % 100) / 10 )

// let hund =Math.floor((number % 1000) / 100 )

// let thous =Math.floor(number  / 1000 )

// if(one + thous == ten + hund){
//     alert("так")
// }else{
//     alert("ні")
// }

// let number = +prompt("введи чсло і я перевію чи воно гарне")

// if(number % 7 == 0 || number % 17 == 0){
//     alert(`${number} - це гарне число`)
// }else{
//     alert(`${number} - це страшне число`)
// }

// let year = +prompt("перевіримо рік на високосність")

// if((year % 4 ==0 && year % 100 != 0) || year % 400 == 0){
//     alert("цей рік високоснй")
// }else{
//     alert("цей рік не високосний")
// }

let  number1 = +prompt("put first number")
let  number2 = +prompt("put second number")
let  number3 = +prompt("put third number")
let number4 = (number1 + number2 + number3) / 3

alert(`yor number is ${ number4}`)

console.log(` first number is ${number1}`)
console.log(` second number is ${number2}`)
console.log(` third number is ${number3}`)
