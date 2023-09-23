// let name = prompt("Як тебе звати?", "Вєра")
// let age = +prompt("Скільки тобі рочків?", 13)

// console.log(`Привіт, ${name}`)
// console.log(`Вітаю у своєму скрипті!`)
// console.log(`Твій рік народження ${2023 - age}`)

// let number = +prompt("Число", 9)

// console.log(`Ваше число ${number++}`)
// console.log(`Наступне ${number++} `)
// console.log(`Наступне ${number}`)

// let a = +prompt("Введіть сторони ребра см")

// console.log(`Куб з ребром ${a} см, має об'єм ${a*a*a} см3 та площу повної поверхні ${a*a} см2`)

// let age = +prompt("Ваш вік?")

// if(age < 6){
//     alert("Шуруй у садок")
// }else if(age < 18){
//     alert("Шуруй в школу")
// }else if(age < 21){
//     alert("Шуруй в університет")
// }else {
//     alert("Шуруй на роботу")
// }

// let Number = +prompt("Введіть число?")

// if(Number % 2 == 0){
//     alert("Це парне число")
// }else if(Number % 2 ==1){
//     alert("Це не парне число")
// }

// let pasword = prompt("Пароль?")
// let pasword2 = prompt("Введіть ще раз")

// if(pasword!=pasword2){
// alert("Не вірно")
// }else if(pasword===pasword2){
//     alert("Вірно")
// }

let n1 = +prompt("Число?")
let n2 =  +prompt("Друге число?")
let n3 =  +prompt("Третє число?")
let sum= 0

if(n1>0){
    sum=sum+n1
}
if(n2>0){
    sum=sum+n2
}
if(n3>0){
    sum=sum+n3
}

alert (`Відповідь ${sum}`)