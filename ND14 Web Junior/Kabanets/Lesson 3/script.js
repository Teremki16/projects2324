// let name = prompt("Як тебе звати?", "Макс")
// let age = +prompt("Скільки тобі рочків?" 8)

// console.log((`Привіт, ${name}`))
// console.log(`Вітаю в своєму скрипті`)
// console.log(`Твій рік народження ${2023 - age}`)

// let number  = +prompt("Введіть число")

// console.log(`Ваше число ${number++}`)
// console.log(`Наступне ${number++}`)
// console.log(`Наступне ${number}`)

// let a = Number (prompt ("Введіть довжину сторону ребра")) 

// console.log (`Куб з ребром ${a} см, має об'єм ${a ** 3} см3 та площу повної поверхні ${6 *(a ** 2)} см2`)

// let age = +prompt (" Скільки тобі років?")

// if(age < 18){
//    alert("Йди у школу")
// }else if(age < 21){
//     alert("Йди в університет")
// } else {
//     alert("Йди на роботу")
// }

// let a = +prompt(`Введи число`)

// if( a % 2==0){
//     alert("парне")
// } else{
//     alert("не парне")
// }

// let password = prompt("enter your password")
// let password1 = prompt("enter your password")

// if(password==password1){
//     alert("all good!")
// } else{
//     alert("enter your password one more time")
// }

let number = +prompt("Введіть своє число")
let number1 = +prompt("Введіть своє число")
let number2 = +prompt("Введіть своє число")
let sum = 0

if(number > 0){
    sum=sum+number
}
if(number1 > 0){sum=sum+number1
}
if(number2 > 0){sum=sum+number2
}
alert (`Відповідь це ${sum}`)