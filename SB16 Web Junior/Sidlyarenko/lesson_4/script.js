// let number1 = +prompt('Введіть перше число')
// console.log(`Перше число: ${number1}`)

// let number2 = +prompt('Введіть друге число')
// console.log(`Друге число: ${number2}`)

// let number3 = +prompt('Введіть третє число')
// console.log(`Третє число: ${number3}`)

// let summ = 0

// if(number1 >0){
//     summ += number1
// }
// if(number2 >0){
//     summ += number2
// }
// if(number3 >0){
//     summ += number3
// }

// console.log(`Сумма позитивних чисел: ${summ}`)

// let number = +prompt('Введи своє число')

// let one = number % 10

// let ten = Math.floor((number %100) / 10)

// let hund = Math.floor((number % 1000) / 100)

// let thous = Math.floor(number / 1000)

// if(one + thous === hund + ten){
//     alert('так?')
// }else{
//     alert('нє!')
// }

// let number = +prompt('Введи число і я скажу воно Гарне? чи ні!')

// if(number % 7 == 0 || number % 17 == 0){
//     alert(`${number} - це красиве число`)
// }else{
//     alert(`${number} - це нє красиве число`)
// }

// let year = +prompt('Перевіримо рік а високосний')

// if((year % 4 == 0 && year % 100 !=0)|| year % 400 == 0){
//     alert('цей рій високосний')
// }else{
//     alert('цей рік не високосний')
// }

let num1 = +prompt ('Введіть перше число')
let num2 = +prompt ('Введіть друге число')
let num3 = +prompt ('Введіть третє число')

let num4 = (num1 + num2 + num3) / 3

alert(`твоє число ${num4}`)

console.log(`середнє арефметичне ${num1} `)
console.log(`середнє арефметичне ${num2} `)
console.log(`середнє арефметичне ${num3} `)