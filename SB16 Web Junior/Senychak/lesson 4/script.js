// let number1 = +prompt("Введіть перше число")
// console.log(`Перше число: ${number1}`)

// let number2 = +prompt("Введіть друге число")
// console.log(`друге число: ${number2}`)

// let number3 = +prompt("Введіть третє число")
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

// console.log(`Сума позитивних чисел: ${summ}`)

// let number = +prompt("Введи своє число")

// let one = number % 10;

// let ten = Math.floor((number % 100) / 10)

// let hund = Math.floor((number % 1000) / 100)

// let thous = Math.floor(number / 1000)

// if(one + thous == hund - ten){
//     alert("ТАК")
// }else{
//     alert("НІ!!!!!!!!!!!!!!!!!!")
// }

// let number = +prompt("Введи число і я перевірю чи воно гарне")

// if(number % 7 == 0 || number % 17 == 0){
//     alert(`${number} - це гарне число`)
// }else {
//     alert(`${number} - це страшне число`)
// }

// let year = +prompt("Перевіримо рік на високосність")
// if((year % 4 == 0 && year % 100 !=0)|| year % 400 == 0 ){
//     alert("цей рік високосний")
// }else{
//     alert("цей рік не високосний")
// }

let num1 = +prompt ("put first number")
let num2 = +prompt ("put second number")
let num3 = +prompt ("put third number")

let num4 = (num1 + num2 + num3) / 3

console.log(`your number is ${num4}`)

console.log(`first number is ${num1} `)
console.log(`second number is ${num2} `)
console.log(`third number is ${num3} `)
